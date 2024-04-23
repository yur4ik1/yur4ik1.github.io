var BaseUrl = "https://dev-fox-47.hasura.app/v1/graphql";

if (!localStorage.getItem('authKey')) {
  window.location.href = 'login.html'
}

function tokenExpired() {
  const idToken = localStorage.getItem("token");
  if (!idToken) {
    console.log("expired token");
    localStorage.clear();
    window.location.href = 'login.html'
    return true;
  }
  const sessionTime = JSON.parse(localStorage.getItem("sessionTime"));
  if (!sessionTime) {
    console.log("timestamp missing");
    localStorage.clear();
    window.location.href = 'login.html'
    return true;
  }
  const now = Math.floor(Date.now() / 1000);
  const expiresIn = Number(localStorage.getItem("expiresIn"));

  const expirationTime = sessionTime + expiresIn;
  const timeUntilExpiration = expirationTime - now;

  return timeUntilExpiration < 60;
}

async function refreshToken() {
  if (tokenExpired()) {  
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      const response = await fetch(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyAUGwfsR5Y3loDFqL8SA2smKqNRPUood1g",
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
      const data = await response.json();
      if (data.id_token) {
        localStorage.setItem("token", data.id_token);
        localStorage.setItem("expiresIn", data.expires_in);
        const now = Math.floor(Date.now() / 1000);
        localStorage.setItem("sessionTime", JSON.stringify(now));
      }
    }
  }
}

setInterval(refreshToken, 10000);

document.addEventListener("click", () => {
  if (event.target.textContent === "Log Out") {
    localStorage.clear();
    window.location.href = "login.html";
  }
});
