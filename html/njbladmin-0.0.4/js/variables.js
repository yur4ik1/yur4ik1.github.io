let localStorageItems = Object.keys(localStorage);
const urlParams = new URLSearchParams(window.location.search);
let KEY = "";
let sessionTime = Number(localStorage.getItem("sessionTime"));
let expiresIn = Number(localStorage.getItem("expiresIn"));
let validateTmpsessionFlag = true;
let checkingTmpsession = "";
let functionRefreshTokeCheck = true
let functionRefreshTokeCheckCount = 0  

const localStorageItemsCheck = [
  "expiresIn",
  "authKey",
  "refreshToken",
  "sessionTime",
  "TemporarySessionId",
  "token",
  "userData",
];

window.addEventListener("storage", () => {
  if (localStorage.getItem("closeSession") === "true") {
    localStorage.clear();
    window.location.href = urlPortal + "login-in.html";
  }
});

let checkInterval = setInterval(refreshToken, 10000);

document.addEventListener("DOMContentLoaded", async () => {
  try {
    document
      .querySelector(".header__logo")
      .setAttribute("href", urlPortal + "skills.html");
    document.querySelector(".header__logo").dataset.sId =
      localStorage.getItem("TemporarySessionId");
    checkingTmpsession = localStorage.getItem("TemporarySessionId");
    if (urlParams.has(tmpsession)) {
      localStorage.removeItem("closeSession");
    }

    if (
      localStorage.getItem("TemporarySessionId") ===
        urlParams.get("tmpsession") &&
      localStorageItems.length > 1
    ) {
      window.location.href = "index.html";
    }
  } catch {
    await validateTmpsession();
  }
});

async function validateTmpsession() {
  
  try {
    let query = `query validateTmpsession($tmpsession: uuid) {
        tmpsessions(where: {id: {_eq: $tmpsession}}) {
          id
          refreshtoken
        }
      }`;

    if (urlParams.get("tmpsession") !== null) {
      variables = {
        tmpsession: urlParams.get("tmpsession"),
      };

      localStorage.setItem("TemporarySessionId", urlParams.get("tmpsession"));
      document
        .querySelector(".header__logo")
        .setAttribute("href", urlPortal + "skills.html");
      document
        .querySelector(".header__logo")
        .setAttribute("data-sId", urlParams.get("tmpsession"));
    } else if (
      localStorage.getItem("TemporarySessionId") !== "" &&
      localStorage.getItem("TemporarySessionId") !== null &&
      localStorage.getItem("TemporarySessionId") === checkingTmpsession
    ) {
      variables = {
        tmpsession: localStorage.getItem("TemporarySessionId"),
      };
      document
        .querySelector(".header__logo")
        .setAttribute("href", urlPortal + "skills.html");
      document
        .querySelector(".header__logo")
        .setAttribute("data-sId", localStorage.getItem("TemporarySessionId"));
    } else {
      try {
        variables = {
          tmpsession: document.querySelector(".header__logo").dataset.sId,
        };
        localStorage.setItem(
          "TemporarySessionId",
          document.querySelector(".header__logo").dataset.sId
        );
      } catch {
        // console.log("error I havent tmpsession");
      }
    }

    const data = JSON.stringify({ query, variables });

    const headers = {
      "Content-Type": "application/json",
      "X-Hasura-Role": "anonymous",
    };

    const response = await fetch(BaseUrl, {
      method: "post",
      headers,
      body: data,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const json = await response.json();
    localStorage.setItem("refreshToken", json.data.tmpsessions[0].refreshtoken);
    await refreshToken();

    if (localStorage.getItem("userData") === null) {
      localId = localStorage.getItem("authKey");
      await profile(localId);
    }
    // console.log("validateTmpsession ok");

    if (urlParams.has("tmpsession")) {
      window.location.href = "index.html";
    }

    return true;
  } catch (error) {
    // console.log("validatTempsession error");
    if (checkingTmpsession !== "" && checkingTmpsession !== "undefined") {
      localStorage.setItem("TemporarySessionId", checkingTmpsession);
    } else {
      // console.log(1);
      localStorage.clear();
      window.location.href = urlPortal + "login-in.html";
    }
    return false;
  }
}

function checkingTmpsessionMissing() {
    
  return !localStorageItemsCheck.some((item) => !localStorage.getItem(item));
}

function tokenExpired() {
  
  // console.log("test token");
  localStorageItems = Object.keys(localStorage);

  // console.log(" localStorageItems.lengt ", localStorageItems.length);

  if (
    localStorage.getItem("closeSession") === "true" ||
    localStorageItems.length === 0
  ) {
    // console.log(1);
    localStorage.clear();
    window.location.href = urlPortal + "login-in.html";
    return;
  }

  const missingItem = checkingTmpsessionMissing();
  // console.log(missingItem);

  if (!missingItem) {
    if (
      localStorage.getItem("userData") === null &&
      localStorage.getItem("authKey") !== null
    ) {
      localId = localStorage.getItem("authKey");
      profile(localId);
      return;
    }

    if(functionRefreshTokeCheck){ 
      validateTmpsessionFlag = false;
      validateTmpsession();
    }else{
      return
    }
  }

  if (localStorageItems.length > 0) {
    localStorageItems.forEach((item) => {
      let value = localStorage.getItem(item);
      if (!value) {
        try {
          validateTmpsessionFlag = false;
          validateTmpsession();
        } catch {
          localStorage.clear();
          window.location.href = "login.html";
        }
      }
    });
  } else {
    // console.log(1);
    localStorage.clear();
    window.location.href = urlPortal + "login-in.html";
  }

  const now = Math.floor(Date.now() / 1000);
  const expiresIn = Number(localStorage.getItem("expiresIn"));

  const expirationTime = sessionTime + expiresIn;
  const timeUntilExpiration = expirationTime - now;
  return timeUntilExpiration < 60;
}

async function refreshToken() {
  if(functionRefreshTokeCheck){
    const isExpired = tokenExpired();
    if (!isExpired && validateTmpsessionFlag === true) {
      return;
    }
  }else{
    return
  }
 

  validateTmpsessionFlag = true;
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    
    try {
      
      const response = await fetch(
        "https://securetoken.googleapis.com/v1/token?key=" + fireBaseKey,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            grant_type: "refresh_token",
            refresh_token: refreshToken,
          }),
        }
      );

      if (!response.ok) {
        functionRefreshTokeCheckCount++
        if(functionRefreshTokeCheckCount === 2){
          functionRefreshTokeCheck = false
        }
        clearInterval(checkInterval);
        throw new Error("Network response was not ok");
        return
      }

      const json = await response.json();

      if (json.id_token) {
        KEY = json.id_token;
        sessionTime = Date.now() / 1000;
        localStorage.setItem("token", KEY);
        localStorage.setItem("authKey", json.user_id);
        localStorage.setItem("sessionTime", JSON.stringify(Date.now() / 1000));
        localStorage.setItem("refreshToken", json.refresh_token);
        localStorage.setItem("expiresIn", json.expires_in);
      } else {
        functionRefreshTokeCheckCount++
        if(functionRefreshTokeCheckCount === 2){
          functionRefreshTokeCheck = false
        }
        clearInterval(checkInterval);
        throw new Error("No id_token in response");
      }
    } catch (error) {
      if(functionRefreshTokeCheckCount === 2){
        functionRefreshTokeCheck = false
      }
      clearInterval(checkInterval);
      console.error("Refresh token error:", error);
    }
  }
}


async function profile(localId) {
  let query = `query getProfile($ssoid:String) {
          users(where: {ssoid: {_eq: $ssoid}}) {
              active
              email
              firstname
              id
              job_id
              lastname
              level_id
              manager_id
              role
              status
              users_job {
                  department_id
                  id
                  title
              }users_level {
                  id
                  title
              }users_manager {
                  id
                  lastname
                  firstname
              }
          }
      }`;

  variables = {
    ssoid: localId,
  };
  const data = JSON.stringify({ query, variables });
  const headers = {
    "Content-Type": "application/json",
    "Content-Length": data.length,
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  const response = await fetch(BaseUrl, {
    method: "POST",
    headers,
    body: data,
  });
  const json = await response.json();
  datas = json.data.users[0];
  localStorage.setItem("userData", JSON.stringify(datas));
}

document.addEventListener("click", () => {
  if (event.target.textContent === "Log Out") {
    localStorage.clear();
    window.location.href =
      urlPortal +
      "login-in.html" +
      "?tmpsession=" +
      localStorage.getItem("TemporarySessionId");
  }
});

function waitForValidateTmpsession() {
  return new Promise(async (resolve, reject) => {
    try {
      await validateTmpsession();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
