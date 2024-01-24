// info@daocorp.ltd
// 12345678qwerty

/*
import  Login  from "./modules/login";
import { signout } from "./modules/sign_out";
import { fetchAchievements } from "./modules/achievements";




document.addEventListener("click", (event) => {
  if (event.target === document.getElementById("loginButton")) {
    Login(event);
  }
  if (event.target === document.getElementById("logout")) {
    signout();
  }
});

// fetch achievements when achievements page is loaded
if (window.location.pathname === "/achievements.html") {
  fetchAchievements();
}

*/



// languages dropdwn
document.addEventListener('DOMContentLoaded', function () {
  let languagesBtn = document.querySelector('.languages-dropbtn');
  let languagesList = document.querySelector('.languages-droplist');
  let checkboxes = document.querySelectorAll('.languages-option input[type="checkbox"]');
  let isActive = false;

  languagesBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    isActive = !isActive;
    languagesList.classList.toggle('active', isActive);
    languagesBtn.classList.toggle('active', isActive); 
  });

  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!languagesList.contains(targetElement) && !languagesBtn.contains(targetElement)) {
      languagesList.classList.remove('active');
      isActive = false;
      languagesBtn.classList.remove('active'); 
    }
  });

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', function () {
      checkboxes.forEach(function (otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
      languagesBtn.textContent = checkbox.id;
    });
  });
});




// сonfirmation popup

document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.rewards__list-item').forEach(item => {
        item.classList.remove('active');
        item.style.zIndex = '';

        const confirmationPopups = item.querySelectorAll('.сonfirmation-popup');
        confirmationPopups.forEach(popup => {
          popup.classList.remove('active');
        });
      });

      const listItem = button.closest('.rewards__list-item');
      listItem.classList.add('active');
      listItem.style.zIndex = '99999';

      const confirmationPopup = listItem.querySelector('.сonfirmation-popup');
      confirmationPopup.classList.add('active');

      const noButton = confirmationPopup.querySelector('.no');
      noButton.addEventListener('click', () => {
        confirmationPopup.classList.remove('active');
      });
    });
  });
});



/* menu popup */

const avatarBtn = document.querySelector(".avatar");
const menuPopup = document.querySelector(".header__popup-menu");

if (avatarBtn && menuPopup) {
  avatarBtn.addEventListener("click", () => {
    menuPopup.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = menuPopup.contains(event.target);
    const isClickInsideAvatar = avatarBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideAvatar) {
      menuPopup.classList.remove("active");
    }
  });
}


/* badges-popup */

const badgesTrigger = document.querySelector('.badges-trigger');
const badgesPopup = document.querySelector('.badges-popup');

if (badgesTrigger && badgesPopup) {
  badgesTrigger.addEventListener('click', function () {
    badgesPopup.classList.add('active');

    setTimeout(function () {
      badgesPopup.classList.remove('active');
    }, 3000);
  });
}

// temporary block

const temporaryTrigger = document.querySelector('.temporary-trigger');
const temporaryPopup = document.querySelector('.temporary-popup');
const permanentBtn = document.querySelector('.permanent-btn');
const temporaryBtn = document.querySelector('.temporary-btn');
const permanentAchievements = document.querySelector('.permanent-achievements');
const temporaryAchievements = document.querySelector('.temporary-achievements');

if (temporaryTrigger && temporaryPopup) {
  temporaryTrigger.addEventListener('click', function () {
    temporaryPopup.classList.add('active');

    setTimeout(function () {
      temporaryPopup.classList.remove('active');
    }, 3000);
  });
}

const permanentTrigger = document.querySelector('.permanent-trigger');

if (permanentTrigger && temporaryPopup) {
  permanentTrigger.addEventListener('click', function () {
    temporaryPopup.classList.add('active');

    setTimeout(function () {
      temporaryPopup.classList.remove('active');
    }, 3000);
  });
}


if (permanentBtn && temporaryBtn && permanentAchievements && temporaryAchievements) {
  permanentBtn.addEventListener('click', function () {
    permanentAchievements.classList.add('active');
    temporaryAchievements.classList.remove('active');
    permanentBtn.classList.add('active');
    temporaryBtn.classList.remove('active');
  });

  temporaryBtn.addEventListener('click', function () {
    temporaryAchievements.classList.add('active');
    permanentAchievements.classList.remove('active');
    permanentBtn.classList.remove('active');
    temporaryBtn.classList.add('active');
  });
}

/* notification popup */

const notificationBtn = document.querySelector(".notification");
const notificationPopup = document.querySelector(".header__popup-notification");

if (notificationBtn && notificationPopup) {
  notificationBtn.addEventListener("click", () => {
    notificationPopup.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = notificationPopup.contains(event.target);
    const isClickInsideBtn = notificationBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      notificationPopup.classList.remove("active");
    }
  });
}

/* info popup */

const infoBtn = document.querySelector(".profile__left-item.deactivate");
const infoPopup = document.querySelector(".lock__popup");

if (infoBtn && infoPopup) {
  infoBtn.addEventListener("click", () => {
    infoPopup.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = infoPopup.contains(event.target);
    const isClickInsideBtn = infoBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      infoPopup.classList.remove("active");
    }
  });
}

/* mask info popup */

const maskInfoBtn = document.querySelector(".mask-info");
const maskInfoPopup = document.querySelector(".mask__info-popup");

if (maskInfoBtn && maskInfoPopup) {
  maskInfoBtn.addEventListener("click", () => {
    maskInfoPopup.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = maskInfoPopup.contains(event.target);
    const isClickInsideBtn = maskInfoBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      maskInfoPopup.classList.remove("active");
    }
  });
}

/* passwordInput */

const passwordInput = document.getElementById("password");
const passwordIcon = document.querySelector(".password-icon");

if (passwordInput && passwordIcon) {
  passwordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.add("active");
    } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove("active");
    }
  });
}

/* profile info popup */

const profilePopup = document.querySelector(".profile__info-popup");
const profilePopupOpen = document.querySelector(".info-btn");
const profilePopupClose = document.querySelector(".close-popup");

if (profilePopup && profilePopupOpen) {
  profilePopupOpen.addEventListener("click", () => {
    profilePopup.classList.add("active");
  });
  profilePopupClose.addEventListener("click", () => {
    profilePopup.classList.remove("active");
  });
}

/* power popup */

const attributesPopup = document.querySelector(".power__popup");
const attributesPopupOpen = document.querySelector(".power");
const attributesPopupClose = document.querySelector(".main__popup-close");

if (attributesPopup && attributesPopupOpen) {
  attributesPopupOpen.addEventListener("click", () => {
    attributesPopup.classList.add("active");
  });
  attributesPopupClose.addEventListener("click", () => {
    attributesPopup.classList.remove("active");
  });
}

/* protection popup */

const protectionPopup = document.querySelector(".protection__popup");
const protectionPopupOpen = document.querySelector(".protection");
const protectionPopupClose = document.querySelector(".protection-close");

if (protectionPopup && protectionPopupOpen) {
  protectionPopupOpen.addEventListener("click", () => {
    protectionPopup.classList.add("active");
  });
  protectionPopupClose.addEventListener("click", () => {
    protectionPopup.classList.remove("active");
  });
}

/* speed popup */

const speedPopup = document.querySelector(".speed__popup");
const speedPopupOpen = document.querySelector(".speed");
const speedPopupClose = document.querySelector(".speed-close");

if (speedPopup && speedPopupOpen) {
  speedPopupOpen.addEventListener("click", () => {
    speedPopup.classList.add("active");
  });
  speedPopupClose.addEventListener("click", () => {
    speedPopup.classList.remove("active");
  });
}

/* dont have popup */

const donthaveBtn = document.querySelector(".donthave");
const donthavePopup = document.querySelector(".donthave-popup");

if (donthaveBtn && donthavePopup) {
  donthaveBtn.addEventListener("click", () => {
    donthavePopup.classList.toggle("active");
    donthaveBtn.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = donthavePopup.contains(event.target);
    const isClickInsideBtn = donthaveBtn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      donthavePopup.classList.remove("active");
      donthaveBtn.classList.remove("active");
    }
  });
}

/* attributes popup-info */

const popupInfoBtns = document.querySelectorAll(".attributes-info");
const popupInfoElements = document.querySelectorAll(".attributes__popup-info");

popupInfoBtns.forEach((btn, index) => {
  const popupInfo = popupInfoElements[index];

  btn.addEventListener("click", () => {
    popupInfo.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = popupInfo.contains(event.target);
    const isClickInsideBtn = btn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      popupInfo.classList.remove("active");
    }
  });
});

// Exchange popup

const exchangePopupBtns = document.querySelectorAll(".three");
const exchangePopupElements = document.querySelectorAll(".exchange-popup");

exchangePopupBtns.forEach((btn, index) => {
  const popup = exchangePopupElements[index];

  btn.addEventListener("click", () => {
    popup.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = popup.contains(event.target);
    const isClickInsideBtn = btn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      popup.classList.remove("active");
    }
  });
});

// Dismantle popup

const dismantlePopupBtns = document.querySelectorAll(".dismantle");
const dismantlePopupElements = document.querySelectorAll(".dismantle-popup");

dismantlePopupBtns.forEach((btn, index) => {
  const popup = dismantlePopupElements[index];

  btn.addEventListener("click", () => {
    popup.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isClickInsidePopup = popup.contains(event.target);
    const isClickInsideBtn = btn.contains(event.target);
    if (!isClickInsidePopup && !isClickInsideBtn) {
      popup.classList.remove("active");
    }
  });
});

/* rewardspopup */

const rewardsPopup = document.querySelector(".rewards__pupup");
const rewardsPopupOpen = document.querySelector(".coins");
const rewardsPopupClose = document.querySelector(".rewards-close");

if (rewardsPopup && rewardsPopupOpen) {
  rewardsPopupOpen.addEventListener("click", () => {
    rewardsPopup.classList.add("active");
  });
  rewardsPopupClose.addEventListener("click", () => {
    rewardsPopup.classList.remove("active");
  });
}

/* add skill popup */

const addSkillPopup = document.querySelector(".add__skill-popup");
const addSkillOpen = document.querySelector(".add");
const addSkillClose = document.querySelector(".add-skill-close");

if (addSkillPopup && addSkillOpen) {
  addSkillOpen.addEventListener("click", () => {
    addSkillPopup.classList.add("active");
  });
  addSkillClose.addEventListener("click", () => {
    addSkillPopup.classList.remove("active");
  });
}


/* passive skills popup */

const passiveSkillsPopup = document.querySelector(".passive__skills-popup");
const passiveSkillsOpen = document.querySelector(".passive-btn");
const passiveSkillsClose = document.querySelector(".passive__skills-close");

if (passiveSkillsPopup && passiveSkillsOpen) {
  passiveSkillsOpen.addEventListener("click", () => {
    passiveSkillsPopup.classList.add("active");
  });
  passiveSkillsClose.addEventListener("click", () => {
    passiveSkillsPopup.classList.remove("active");
  });
}

/* wisdom scroll popup */

const wisdomScrollPopup = document.querySelector(".wisdom__scroll-popup");
const wisdomScrollOpen = document.querySelector(".wisdom__scroll-btn");
const wisdomScrollClose = document.querySelector(".wisdom__scroll-close");

if (wisdomScrollPopup && wisdomScrollOpen) {
  wisdomScrollOpen.addEventListener("click", () => {
    wisdomScrollPopup.classList.add("active");
  });
  wisdomScrollClose.addEventListener("click", () => {
    wisdomScrollPopup.classList.remove("active");
  });
}

/* Pop up (Status: In progress) */
const inProgressPopup = document.querySelector(".in-progress");
const inProgressOpen = document.querySelectorAll(".in-progress-btn");
const inProgressClose = document.querySelector(".in-progress-close");

if (inProgressPopup && inProgressOpen && inProgressClose) {
  inProgressOpen.forEach((button) => {
    button.addEventListener("click", () => {
      inProgressPopup.classList.add("active");
    });
  });
  inProgressClose.addEventListener("click", () => {
    inProgressPopup.classList.remove("active");
  });
}

/* Pop up (Under Review) */

const underReviewPopup = document.querySelector(".under-review");
const underReviewOpen = document.querySelectorAll(".under-review-btn");
const underReviewClose = document.querySelector(".under-review-close");

if (underReviewPopup && underReviewOpen && underReviewClose) {
  underReviewOpen.forEach((button) => {
    button.addEventListener("click", () => {
      underReviewPopup.classList.add("active");
    });
  });
  underReviewClose.addEventListener("click", () => {
    underReviewPopup.classList.remove("active");
  });
}

/* Pop up (Status Open) */

const statusOpenPopup = document.querySelector(".status-open");
const statusOpenBtn = document.querySelectorAll(".status-open-btn");
const statusOpenClose = document.querySelector(".status-open-close");

if (statusOpenPopup && statusOpenBtn && statusOpenClose) {
  statusOpenBtn.forEach((button) => {
    button.addEventListener("click", () => {
      statusOpenPopup.classList.add("active");
    });
  });
  statusOpenClose.addEventListener("click", () => {
    statusOpenPopup.classList.remove("active");
  });
}

/* Pop up (Status Open) */

const addTaskPopup = document.querySelector(".add-task");
const addTaskBtn = document.querySelectorAll(".add__task-btn");
const addTaskClose = document.querySelector(".add-task-close");

if (addTaskPopup && addTaskBtn && addTaskClose) {
  addTaskBtn.forEach((button) => {
    button.addEventListener("click", () => {
      addTaskPopup.classList.add("active");
    });
  });
  addTaskClose.addEventListener("click", () => {
    addTaskPopup.classList.remove("active");
  });
}

// photo popup

const photoPopup = document.querySelector(".photo__popup");
const photoOpen = document.querySelectorAll(".photo");
const photoClose = document.querySelector(".close");

if (photoPopup && photoOpen) {
  photoOpen.forEach((button) => {
    button.addEventListener("click", () => {
      photoPopup.classList.add("active");
    });
  });
  photoClose.addEventListener("click", () => {
    photoPopup.classList.remove("active");
  });
}

/* filter select */

let selectAll = document.querySelectorAll(".filter-select");

selectAll.forEach(function (select) {
  let selectSelected = select.querySelector(".select-selected");
  let selectItems = select.querySelector(".select-items");

  if (selectSelected) {
    selectSelected.addEventListener("click", function () {
      if (selectItems && selectItems.classList.contains("select-hide")) {
        selectItems.classList.remove("select-hide");
        select.classList.add("active");
      } else if (selectItems) {
        selectItems.classList.add("select-hide");
        select.classList.remove("active");
      }
    });
  }
});

/* big photo popup */

const rewardsImgTrigger = document.querySelector(".rewards-img-trigger");
const bigPhotoPopup = document.querySelector(".big__photo-popup");

if (rewardsImgTrigger && bigPhotoPopup) {
  rewardsImgTrigger.addEventListener("click", function () {
    bigPhotoPopup.classList.add("active");
  });
  document.addEventListener("click", function (event) {
    const isClickInside = bigPhotoPopup.contains(event.target);
    if (!isClickInside && event.target !== rewardsImgTrigger) {
      bigPhotoPopup.classList.remove("active");
    }
  });
}

/* tasks-popup */

const taskTrigger = document.querySelector(".task-trigger");
const taskPopup = document.querySelector(".tasks-popup");

if (taskTrigger && taskPopup) {
  taskTrigger.addEventListener("click", function () {
    taskPopup.classList.add("active");
    taskTrigger.style.zIndex = "9999";

    setTimeout(function () {
      taskPopup.classList.remove("active");
    }, 3000);
  });
}

/* tasks-popup */

const swordTrigger = document.querySelector(".sword-trigger");
const swordPopup = document.querySelector(".sword-popup");

if (swordTrigger && swordPopup) {
  swordTrigger.addEventListener("click", function () {
    swordPopup.classList.add("active");

    setTimeout(function () {
      swordPopup.classList.remove("active");
    }, 3000);
  });
}

const meadowTrigger = document.querySelector(".meadow-trigger");
const meadowPopup = document.querySelector(".meadow-popup");

if (meadowTrigger && meadowPopup) {
  meadowTrigger.addEventListener("click", function () {
    meadowPopup.classList.add("active");

    setTimeout(function () {
      meadowPopup.classList.remove("active");
    }, 3000);
  });
}

/* skill report popup */

const skillReportPopup = document.querySelector(".skill-report");
const skillReportOpen = document.querySelector(".report-btn");
const skillReportClose = document.querySelector(".skill-report-close");

if (skillReportPopup && skillReportOpen) {
  skillReportOpen.addEventListener("click", () => {
    skillReportPopup.classList.add("active");
  });
  skillReportClose.addEventListener("click", () => {
    skillReportPopup.classList.remove("active");
  });
}

/* feedback popup */

const feedbackPopup = document.querySelector(".feedback-reject");
const feedbackOpen = document.querySelectorAll(".repost-btn");
const feedbackClose = document.querySelector(".feedback-reject-close");

if (feedbackPopup && feedbackOpen && feedbackClose) {
  feedbackOpen.forEach((button) => {
    button.addEventListener("click", () => {
      feedbackPopup.classList.add("active");
    });
  });
  feedbackClose.addEventListener("click", () => {
    feedbackPopup.classList.remove("active");
  });
}

/* skills upgraded popup */

const skillsUpgradedPopup = document.querySelector(".skills-upgraded-1");
const skillsUpgradedOpen = document.querySelector(".skills-upgraded-btn");
const skillsUpgradedClose = document.querySelector(".skills-upgraded-close");

if (skillsUpgradedPopup && skillsUpgradedOpen) {
  skillsUpgradedOpen.addEventListener("click", () => {
    skillsUpgradedPopup.classList.add("active");
  });
  skillsUpgradedClose.addEventListener("click", () => {
    skillsUpgradedPopup.classList.remove("active");
  });
}

/* skills upgraded popup 2 */

const skillsUpgradedPopup2 = document.querySelector(".skills-upgraded-2");
const skillsUpgradedOpen2 = document.querySelector(".skills-upgraded2-btn");
const skillsUpgradedClose2 = document.querySelector(".skills-upgraded2-close");

if (skillsUpgradedPopup2 && skillsUpgradedOpen2) {
  skillsUpgradedOpen2.addEventListener("click", () => {
    skillsUpgradedPopup2.classList.add("active");
  });
  skillsUpgradedClose2.addEventListener("click", () => {
    skillsUpgradedPopup2.classList.remove("active");
  });
}

/* skills upgraded popup 3 */

const skillsUpgradedPopup3 = document.querySelector(".skills-upgraded-3");
const skillsUpgradedOpen3 = document.querySelector(".skills-upgraded3-btn");
const skillsUpgradedClose3 = document.querySelector(".skills-upgraded3-close");

if (skillsUpgradedPopup3 && skillsUpgradedOpen3) {
  skillsUpgradedOpen3.addEventListener("click", () => {
    skillsUpgradedPopup3.classList.add("active");
  });
  skillsUpgradedClose3.addEventListener("click", () => {
    skillsUpgradedPopup3.classList.remove("active");
  });
}

/* create reports popup */

const createReportsPopup = document.querySelector(".create-reports-popup");
const createReportsOpen = document.querySelector(".create-reports-btn");
const createReportsClose = document.querySelector(".create-reports-close");

if (createReportsPopup && createReportsOpen) {
  createReportsOpen.addEventListener("click", () => {
    createReportsPopup.classList.add("active");
  });
  createReportsClose.addEventListener("click", () => {
    createReportsPopup.classList.remove("active");
  });
}

/* course popup */

const coursePopup = document.querySelector(".course-popup");
const coursePopupOpen = document.querySelector(".course-popup-open");
const coursePopupClose = document.querySelector(".course-popup-close");

if (coursePopup && coursePopupOpen) {
  coursePopupOpen.addEventListener("click", () => {
    coursePopup.classList.add("active");
  });
  coursePopupClose.addEventListener("click", () => {
    coursePopup.classList.remove("active");
  });
}

/* tasks list bg */

const items = document.querySelectorAll(".tasks__list-item");

if (items) {
  const images = [
    "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-yellow.webp",
    "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-green.webp",
    "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-white.webp",
    "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-purple.webp",
    "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-red.webp",
    "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-black.webp",
  ];

  const styles = [
    {
      nameColor: "#866639",
      priceImage:
        "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-price-yellow.svg",
      textBackground: "#EAC185",
      textShadow: "0px 0px 10px 5px rgba(140, 98, 39, 0.4)",
    },
    {
      nameColor: "#27433E",
      priceImage:
        "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-price-green.svg",
      textBackground: "rgba(90, 147, 138, 0.4)",
      textShadow: "0vw 0vw 0.521vw 0.261vw rgba(63, 101, 95, 0.65)",
    },
    {
      nameColor: "#A0A0A0",
      priceImage:
        "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-price-white.svg",
      textBackground: "#ECECEC",
      textShadow: "0vw 0vw 0.521vw 0.261vw rgba(198, 198, 198, 0.8)",
    },
    {
      nameColor: "#444561",
      priceImage:
        "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-price-purple.svg",
      textBackground: "#8183B8",
      textShadow: "0vw 0vw 0.521vw 0.261vw rgba(93, 95, 139, 0.8)",
    },
    {
      nameColor: "#74423E",
      priceImage:
        "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-price-red.svg",
      textBackground: "rgba(190, 117, 112, 0.3)",
      textShadow: "0vw 0vw 0.521vw 0.261vw rgba(136, 85, 82, 0.6)",
    },
    {
      nameColor: "#A0A0A0",
      priceImage:
        "https://yur4ik1.github.io/html/ninjable-portal/img/tasks-price-black.svg",
      textBackground: "#242C3E",
      textShadow: "0vw 0vw 0.521vw 0.261vw rgba(22, 26, 36, 0.8)",
    },
  ];

  items.forEach((item, index) => {
    const imageIndex = index % images.length;
    item.style.background = `url('${images[imageIndex]}') no-repeat center top / cover`;

    const styleIndex = index % styles.length;
    const style = styles[styleIndex];

    item.querySelector(".name").style.color = style.nameColor;
    item.querySelector(".text a").style.background = style.textBackground;
    item.querySelector(".text a").style.boxShadow = style.textShadow;

    if ((index + 1) % 3 === 0) {
      item.querySelector(".text a").style.color = "#A0A0A0";
      item.querySelector(".price span").style.color = "#A0A0A0";
      item.querySelector(".text p").style.color = "#A0A0A0";
    }

    const priceImageElement = document.createElement("span");
    priceImageElement.classList.add("price-image");
    priceImageElement.style.background = `url('${style.priceImage}') no-repeat center top / cover`;

    item
      .querySelector(".price")
      .insertBefore(priceImageElement, item.querySelector(".price").firstChild);
  });
}

/* calendar popup */

const calendarPopup = document.querySelector(".calendar-popup");
const calendarBtn = document.querySelector(".calendar-btn");

if (calendarPopup && calendarBtn) {
  calendarBtn.addEventListener("click", () => {
    calendarPopup.classList.add("active");
  });

  document.addEventListener("click", (event) => {
    const targetElement = event.target;
    if (
      !targetElement.closest(".calendar-popup") &&
      !targetElement.closest(".calendar-btn")
    ) {
      calendarPopup.classList.remove("active");
    }
  });
}

/* achievements popup */

const achievementsPopup = document.querySelector(".achievements-popup");
const achievementsBtn = document.querySelector(".achievements-btn");
const achievementsClose = document.querySelector(".achievements-close");

if (achievementsPopup && achievementsBtn) {
  achievementsBtn.addEventListener("click", () => {
    achievementsPopup.classList.add("active");
  });
  achievementsClose.addEventListener("click", () => {
    achievementsPopup.classList.remove("active");
  });
}

/* custom period popup */

const customPeriodPopup = document.querySelector(".custom-period-popup");
const customPeriodBtns = document.querySelectorAll(".custom-period-btn");
const customPeriodClose = document.querySelector(".custom-period-close");

if (customPeriodPopup && customPeriodBtns.length > 0) {
  customPeriodBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      customPeriodPopup.classList.add("active");
    });
  });

  customPeriodClose.addEventListener("click", () => {
    customPeriodPopup.classList.remove("active");
  });
}


// dropdown block

const dropdowns = document.querySelectorAll(".report__dropdown");

document.querySelectorAll(".dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const dropdown = this.closest(".report__dropdown");
    if (dropdown) {
      dropdown.classList.toggle("active");
    }
  });
});

/* custom select */

let selectElements = document.getElementsByClassName("custom-select");

document.addEventListener("click", function (event) {
  if (!event.target.closest(".custom-select")) {
    for (let i = 0; i < selectElements.length; i++) {
      let selectElement = selectElements[i];
      let selectSelectedElement =
        selectElement.getElementsByClassName("select-selected")[0];
      let selectItemsElement =
        selectElement.getElementsByClassName("select-items")[0];

      selectSelectedElement.classList.remove("select-arrow-active");
      selectItemsElement.classList.add("select-hide");
      selectElement.classList.remove("active");
    }
  }
});

for (let i = 0; i < selectElements.length; i++) {
  let selectElement = selectElements[i];
  let selectSelectedElement =
    selectElement.getElementsByClassName("select-selected")[0];
  let selectItemsElement =
    selectElement.getElementsByClassName("select-items")[0];
  let selectOptionElements =
    selectItemsElement.getElementsByClassName("select-option");

  selectSelectedElement.addEventListener("click", function () {
    this.classList.toggle("select-arrow-active");
    selectItemsElement.classList.toggle("select-hide");

    if (this.classList.contains("select-arrow-active")) {
      selectElement.classList.add("active");
    } else {
      selectElement.classList.remove("active");
    }
  });

  for (let j = 0; j < selectOptionElements.length; j++) {
    selectOptionElements[j].addEventListener("click", function () {
      let selectOptionValue = this.innerHTML;
      selectSelectedElement.innerHTML = selectOptionValue;
      selectSelectedElement.classList.remove("select-arrow-active");
      selectItemsElement.classList.add("select-hide");

      if (selectSelectedElement.classList.contains("select-arrow-active")) {
        selectElement.classList.add("active");
      } else {
        selectElement.classList.remove("active");
      }
    });
  }
}

/* custom select new */

const newCustomSelects = document.querySelectorAll(".new__custom-select");
const arrows = document.querySelectorAll(".arrow");

function closeAllSelectsExcept(selectedSelect) {
  newCustomSelects.forEach((select) => {
    if (
      select !== selectedSelect &&
      select.classList.contains("open") &&
      !(
        select.classList.contains("filter-select-scroll") &&
        select.classList.contains("new__custom-select-open")
      )
    ) {
      select.classList.remove("open");
    }
  });
}

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  const isCustomSelect = targetElement.closest(".new__custom-select");
  if (!isCustomSelect) {
    closeAllSelectsExcept(null);
  }
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    closeAllSelectsExcept(null);
  });
});

newCustomSelects.forEach((newCustomSelect) => {
  const newCustomTrigger = newCustomSelect.querySelector(
    ".new__custom-select__trigger"
  );
  const newCustomOptionsContainer = newCustomSelect.querySelector(
    ".new__custom-options"
  );
  const newCustomOptionsList = newCustomSelect.querySelectorAll(
    ".new__custom-option"
  );
  const customScrollbar = newCustomSelect.querySelector(".custom-scrollbar");
  const customScrollbarThumb = document.createElement("div");
  customScrollbarThumb.classList.add("custom-scrollbar-thumb");
  customScrollbar.appendChild(customScrollbarThumb);

  function updateScroll() {
    const containerScrollTop = newCustomOptionsContainer.scrollTop;
    const containerHeight = newCustomOptionsContainer.clientHeight;
    const containerScrollHeight = newCustomOptionsContainer.scrollHeight;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = Math.max(
      (containerHeight / containerScrollHeight) * scrollbarHeight,
      20
    );
    const maxThumbTop = scrollbarHeight - thumbHeight;
    const thumbTop =
      (containerScrollTop / (containerScrollHeight - containerHeight)) *
      maxThumbTop;
    customScrollbarThumb.style.height = `${thumbHeight}px`;
    customScrollbarThumb.style.top = `${thumbTop}px`;
  }

  newCustomTrigger.addEventListener("click", () => {
    if (newCustomSelect.classList.contains("open")) {
    } else {
      closeAllSelectsExcept(newCustomSelect);
      newCustomSelect.classList.add("open");
    }
  });

  newCustomOptionsContainer.addEventListener("scroll", updateScroll);

  newCustomOptionsList.forEach((option) => {
    option.addEventListener("click", (event) => {
      if (newCustomSelect.closest(".skills-filter-select")) {
        const selectedOptions = newCustomSelect.querySelectorAll(
          ".new__custom-option.selected"
        );
        const selectedOptionValues = Array.from(selectedOptions).map((option) =>
          option.getAttribute("data-value")
        );
        const newCustomOptionValue = option.getAttribute("data-value");
        const newCustomTrigger = newCustomSelect.querySelector(
          ".new__custom-select__trigger"
        );
        const skillsTagsList = newCustomSelect
          .closest(".new__custom-select-wrapper")
          .querySelector(".skills-tags-list");

        if (selectedOptionValues.includes(newCustomOptionValue)) {
          return;
        }

        const tagItem = document.createElement("div");
        tagItem.classList.add("tag-item");

        const tagItemText = document.createElement("p");
        tagItemText.textContent = option.textContent;

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove");
        tagItem.appendChild(tagItemText);
        tagItem.appendChild(removeButton);
        skillsTagsList.appendChild(tagItem);
        addRemoveButtonListener(removeButton);
      } else {
        const newCustomOptionValue = option.getAttribute("data-value");
        const newCustomTrigger = newCustomSelect.querySelector(
          ".new__custom-select__trigger"
        );
        if (newCustomSelect.closest(".achievements-select")) {
          newCustomTrigger.textContent = "icon";
        } else {
          // Add your desired code here
        }
        newCustomSelect.classList.remove("open");
        if (newCustomSelect.classList.contains("filter-select-scroll")) {
          newCustomSelect.classList.add("open");
        }
      }
    });
  });

  const addSkillTagButton = document.querySelector(".add-skill-tag");
  const addSlillSelect = document.querySelector(".add-slill-select");
  const newCustomSelectOpen = document.querySelector(
    ".new__custom-select-open"
  );

  if (addSkillTagButton) {
    addSkillTagButton.addEventListener("click", () => {
      addSkillTagButton.style.display = "none";
      addSlillSelect.classList.add("active");
      newCustomSelectOpen.classList.add("open");
    });

    document.addEventListener("click", (event) => {
      const targetElement = event.target;

      if (
        !targetElement.closest(".new__custom-select") &&
        !targetElement.classList.contains("add-skill-tag")
      ) {
        addSkillTagButton.style.display = "flex";
        addSlillSelect.classList.remove("active");
        newCustomSelectOpen.classList.remove("open");
      }
    });
  }

  if (newCustomOptionsList.length < 9) {
    customScrollbar.style.display = "none";
  }

  customScrollbarThumb.addEventListener("mousedown", (e) => {
    const thumbStartPosition =
      e.clientY - customScrollbarThumb.getBoundingClientRect().top;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = customScrollbarThumb.clientHeight;
    const maxThumbTop = scrollbarHeight - thumbHeight;

    function onMouseMove(e) {
      const thumbTop =
        e.clientY -
        customScrollbar.getBoundingClientRect().top -
        thumbStartPosition;
      if (thumbTop < 0) {
        customScrollbarThumb.style.top = "0";
        newCustomOptionsContainer.scrollTop = 0;
      } else if (thumbTop > maxThumbTop) {
        customScrollbarThumb.style.top = maxThumbTop + "px";
        newCustomOptionsContainer.scrollTop =
          newCustomOptionsContainer.scrollHeight;
      } else {
        customScrollbarThumb.style.top = thumbTop + "px";
        newCustomOptionsContainer.scrollTop =
          (thumbTop / maxThumbTop) *
          (newCustomOptionsContainer.scrollHeight -
            newCustomOptionsContainer.clientHeight);
      }
    }

    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  updateScroll();
});

/* Delete the Task */

function handleBtnClick(event, btn, popup) {
  event.stopPropagation();

  if (!popup.classList.contains("active")) {
    popup.classList.add("active");
  }
}

function handlePageClick(event, popups, btns) {
  const isClickOnPopup = popups.some((popup) => popup.contains(event.target));
  const isClickOnButton = btns.some((btn) => event.target === btn);

  if (!isClickOnPopup && !isClickOnButton) {
    popups.forEach((popup) => {
      popup.classList.remove("active");
    });
  }
}

const buttons = [
  {
    btn: document.querySelector(".delete-btn"),
    popup: document.querySelector(".task__delete-popup"),
  },
  {
    btn: document.querySelector(".due-date-btn"),
    popup: document.querySelector(".date__popup"),
  },
  {
    btn: document.querySelector(".priority-btn"),
    popup: document.querySelector(".priority__popup"),
  },
  {
    btn: document.querySelector(".player-btn"),
    popup: document.querySelector(".player__popup"),
  },
  {
    btn: document.querySelector(".status-btn"),
    popup: document.querySelector(".status__popup"),
  },
];

const commentsTitle = document.querySelector(".comments-title");
const noCommentsPopup = document.querySelector(".no-comments-popup");

if (commentsTitle && noCommentsPopup) {
  buttons.push({
    btn: commentsTitle,
    popup: noCommentsPopup,
  });

  buttons.forEach(({ btn, popup }) => {
    btn.addEventListener("click", (event) => handleBtnClick(event, btn, popup));
  });

  const allPopups = buttons.map((button) => button.popup);
  const allButtons = buttons.map((button) => button.btn);
  document.addEventListener("click", (event) =>
    handlePageClick(event, allPopups, allButtons)
  );
}

/* table colored  */

const rowItem = document.querySelectorAll(".row-item");

if (rowItem) {
  for (let i = 0; i < rowItem.length; i += 2) {
    rowItem[i].classList.add("colored");
  }
}



// ninja color popup

const ninjacolorTrigger = document.querySelector(".ninja__color-btn");
const ninjacolorPopup = document.querySelector(".ninja__color-popup");

if (ninjacolorTrigger && ninjacolorPopup) {
  ninjacolorTrigger.addEventListener("click", function () {
    ninjacolorPopup.classList.add("active");
  });

  document.addEventListener("click", function (event) {
    if (!ninjacolorPopup.contains(event.target) && event.target !== ninjacolorTrigger) {
      ninjacolorPopup.classList.remove("active");
    }
  });
}


/* add skill popup (profile) */

const addSkillprofilePopup = document.querySelector(".add__skill-profile");
const addSkillprofileOpen = document.querySelector(".add-skill-btn");
const addSkillprofileClose = document.querySelector(".add-skill-profile-close");

if (addSkillprofilePopup && addSkillprofileOpen) {
  addSkillprofileOpen.addEventListener("click", () => {
    addSkillprofilePopup.classList.add("active");
  });
  addSkillprofileClose.addEventListener("click", () => {
    addSkillprofilePopup.classList.remove("active");
  });
}


/* Pop up (Edit)-reject */

const editRejectPopup = document.querySelector(".edit-reject");
const editRejectOpen = document.querySelectorAll(".edit-reject-btn");
const editRejectClose = document.querySelector(".edit-reject-close");

if (editRejectPopup && editRejectOpen && editRejectClose) {
  editRejectOpen.forEach((button) => {
    button.addEventListener("click", () => {
      editRejectPopup.classList.add("active");
    });
  });
  editRejectClose.addEventListener("click", () => {
    editRejectPopup.classList.remove("active");
  });
}

/* Pop up (Edit)-approve */

const editApprovePopup = document.querySelector(".edit-approve");
const editApproveOpen = document.querySelectorAll(".edit-approve-btn");
const editApproveClose = document.querySelector(".edit-approve-close");

if (editApprovePopup && editApproveOpen && editApproveClose) {
  editApproveOpen.forEach((button) => {
    button.addEventListener("click", () => {
      editApprovePopup.classList.add("active");
    });
  });
  editApproveClose.addEventListener("click", () => {
    editApprovePopup.classList.remove("active");
  });
}

/* Pop up Skill map */

const skillMapPopup = document.querySelector(".skill__map");
const skillMapOpen = document.querySelector(".map-btn");
const skillMapClose = document.querySelector(".skill__map-close");

if (skillMapPopup && skillMapPopup && skillMapClose) {
  skillMapOpen.addEventListener("click", () => {
    skillMapPopup.classList.add("active");
  });
  skillMapClose.addEventListener("click", () => {
    skillMapPopup.classList.remove("active");
  });
}



// color info popup 
var itemsColor = document.querySelectorAll('.item');

itemsColor.forEach(function (item) {
  item.addEventListener('click', function () {

    var popup = item.querySelector('.item-popup');

    if (popup) {

      itemsColor.forEach(function (item) {
        var popup = item.querySelector('.item-popup');
        if (popup) {
          popup.classList.remove('act');
        }
      });

      popup.classList.add('act');
    }
  });
});


document.addEventListener('click', function (event) {

  var isInsideItem = false;
  for (var i = 0; i < itemsColor.length; i++) {
    if (itemsColor[i].contains(event.target)) {
      isInsideItem = true;
      break;
    }
  }

  if (!isInsideItem) {

    itemsColor.forEach(function (item) {
      var popup = item.querySelector('.item-popup');
      if (popup) {
        popup.classList.remove('act');
      }
    });
  }
});

/* custom period popup (reports page) */

const reportsPeriodPopup = document.querySelector(".custom-period-popup");
const reportsPeriodBtns = document.querySelectorAll(".custom-period-btn");
const reportsPeriodClose = document.querySelector(".custom-period-close");

if (reportsPeriodPopup && reportsPeriodBtns.length > 0) {
  reportsPeriodBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      reportsPeriodPopup.classList.add("active");
    });
  });

  reportsPeriodClose.addEventListener("click", () => {
    reportsPeriodPopup.classList.remove("active");
  });
}



// Skill matrix popup
const skillMatrixPopup = document.getElementById("skill-matrix-popup");
const skillMatrixPopupOpen = document.querySelectorAll(".skill-matrix-popup-opener");
const skillMatrixPopupClose = document.querySelector(".in-progress-close");

registerPopup(skillMatrixPopup, skillMatrixPopupOpen, skillMatrixPopupClose)

// workforce popup
const workForcePopup = document.getElementById("workforce-popup");
const workForcePopupOpeners = document.querySelectorAll(".workforce-popup-opener");
const workForcePopupClose = document.querySelector(".workforce-popup-close");

registerPopup(workForcePopup, workForcePopupOpeners, workForcePopupClose)

// skillApproval popup
const skillApprovalPopup = document.getElementById("skill-approval-popup");
const skillApprovalPopupOpeners = document.querySelectorAll(".skill-approval-popup-opener");
const skillApprovalPopupClose = document.querySelector(".skill-approval-popup-close");

registerPopup(skillApprovalPopup, skillApprovalPopupOpeners, skillApprovalPopupClose)

// skillProgress popup
const skillProgressPopup = document.getElementById("skill-progress-popup");
const skillProgressPopupOpeners = document.querySelectorAll(".skill-progress-popup-open");
const skillProgressPopupClose = document.querySelector(".skill-progress-popup-close");

registerPopup(skillProgressPopup, skillProgressPopupOpeners, skillProgressPopupClose)


// Adding scroll to popup script
function checkHeightAndMakeScrollIfNeeded(popupWrapper) {
  let popupInner = popupWrapper.firstChild.nextElementSibling;
  let popupHeight = parseFloat(getComputedStyle(popupInner).width.slice(0, -2));

  if (popupHeight > window.innerHeight) {
    popupWrapper.style.alignItems = "flex-start";
    popupWrapper.style.overflow = "auto";
  }
}

// Custom multi-select
const OPEN_CLASS = "opened";
const VISUALLY_HIDDEN_CLASS = "visually-hidden";

let customSelections = document.querySelectorAll(".custom-multi-select");

customSelections.forEach((selection) => {
  let valueInput = selection.querySelector(".custom-multi-select__value");
  let label = selection.querySelector(".custom-multi-select__label");
  let groupItems = document.querySelectorAll('[data-selectiongroup]');
  let clearButtonId = selection.dataset.clearbuttonid;
  let selectedItemsContainer = selection.querySelector(".custom-multi-select__selection-selected-items");
  let inputs = selection.querySelectorAll(".custom-multi-select__selection-input input");
  selection.selectedInputs = [];


  if (clearButtonId) {
    let closeButton = document.getElementById(clearButtonId);
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        inputs.forEach(input => { input.checked = false; })

        selection.selectedInputs = []
        updateInputSelected();
        updateMainInput();
      })
    }
  }

  setDefaultLabelValue();


  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        addInputToSelected(input);
      } else {
        removeInputFromSelected(input);
      }
    });
  });

  function addInputToSelected(input) {
    selection.selectedInputs.push(input);
    updateInputSelected();
    updateMainInput();
  }

  function removeInputFromSelected(input) {
    let indexToRemove = selection.selectedInputs.indexOf(input);
    selection.selectedInputs.splice(indexToRemove, 1);

    updateInputSelected();
    updateMainInput();
  }

  let search = selection.querySelector(".custom-multi-select__selection-search");

  search.addEventListener("input", () => {
    if (search.value == "") {
      inputs.forEach((input) =>
        input.parentNode.classList.remove(VISUALLY_HIDDEN_CLASS)
      );
    } else {
      inputs.forEach((input) => {
        let labelValue = input.parentNode.querySelector("label").innerText;
        if (!labelValue.toLowerCase().includes(search.value.toLowerCase())) {
          input.parentNode.classList.add(VISUALLY_HIDDEN_CLASS);
        } else {
          input.parentNode.classList.remove(VISUALLY_HIDDEN_CLASS);
        }
      });
    }
  });

  label.addEventListener("click", () => {
    closeGroupSelection();
    selection.classList.toggle(OPEN_CLASS);
  });

  function closeGroupSelection() {
    groupItems.forEach(groupItem => {
      if (groupItem != selection) {
        groupItem.classList.remove(OPEN_CLASS);
      }
    })
  }

  function updateInputSelected() {
    updateLabel();
    updateSelected();
  }

  function updateSelected() {
    selectedItemsContainer.innerHTML = "";

    if (selection.selectedInputs.length > 0) {
      selection.selectedInputs.forEach((input) => {
        let createdItem = createCustomSelectItem(input.nextElementSibling.innerText);

        let itemRemoveButton = createdItem.querySelector(".selected-item__button")
        itemRemoveButton.addEventListener("click", _ => {
          removeInputFromSelected(input);
          input.checked = false;
        })
      });
    }
  }

  function createCustomSelectItem(textContent) {
    let container = document.createElement("div");
    container.className = "custom-multi-select__selected-item";

    let textSpan = document.createElement("span");
    textSpan.className = "selected-item__text";
    textSpan.textContent = textContent;

    let buttonSpan = document.createElement("span");
    buttonSpan.className = "selected-item__button";

    container.appendChild(textSpan);
    container.appendChild(buttonSpan);

    let parentElement = selectedItemsContainer
    if (parentElement) {
      selectedItemsContainer.appendChild(container);
    } else {
      console.error("Parent element not found");
    }

    return container;
  }

  function updateLabel() {
    if (selection.selectedInputs.length > 0) {
      let newLabelValue = "";

      selection.selectedInputs.forEach((input) => {
        console.log(input.nextElementSibling);

        newLabelValue += input.nextElementSibling.innerText + ", ";
      });

      setLabelValue(newLabelValue.slice(0, -2));
    } else {
      setDefaultLabelValue();
    }
  }

  function updateMainInput() {
    let newInputValue = "";
    selection.selectedInputs.forEach(input => {
      newInputValue += input.nextElementSibling.innerText + ",";
    })

    valueInput.value = newInputValue.slice(0, -1);
  }

  function setLabelValue(value) {
    label.innerText = value;
  }

  function setDefaultLabelValue() {
    setLabelValue(selection.dataset.placeholder);
  }
});

// Custom radio-select
let radioSelections = document.querySelectorAll(".custom-radio-select");

radioSelections.forEach((selection) => {
  let valueInput = selection.querySelector(".custom-radio-select__value");
  let label = selection.querySelector(".custom-radio-select__label");
  let groupItems = document.querySelectorAll('[data-selectiongroup]');
  let clearButtonId = selection.dataset.clearbuttonid;
  let inputs = selection.querySelectorAll(".custom-radio-select__selection-input input");
  selection.selectedInputs = [];


  if (clearButtonId) {
    let closeButton = document.getElementById(clearButtonId);
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        inputs.forEach(input => { input.checked = false; })

        selection.selectedInputs = []
        updateInputSelected();
        updateMainInput();
      })
    }
  }

  setDefaultLabelValue();


  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        addInputToSelected(input);
      } else {
        removeInputFromSelected(input);
      }
    });
  });

  function addInputToSelected(input) {
    selection.selectedInputs.push(input);
    updateInputSelected();
    updateMainInput();
  }

  function removeInputFromSelected(input) {
    let indexToRemove = selection.selectedInputs.indexOf(input);
    selection.selectedInputs.splice(indexToRemove, 1);

    updateInputSelected();
    updateMainInput();
  }

  label.addEventListener("click", () => {
    closeGroupSelection();
    selection.classList.toggle(OPEN_CLASS);
  });

  function closeGroupSelection() {
    groupItems.forEach(groupItem => {
      if (groupItem != selection) {
        groupItem.classList.remove(OPEN_CLASS);
      }
    })
  }

  function updateInputSelected() {
    updateLabel();
  }

  function updateLabel() {
    if (selection.selectedInputs.length > 0) {
      let newLabelValue = "";

      selection.selectedInputs.forEach(input => {
        if (input.checked) {
          newLabelValue = input.nextElementSibling.innerText;
        }
      })

      setLabelValue(newLabelValue.slice(0, -2));
    } else {
      setDefaultLabelValue();
    }
  }

  function updateMainInput() {
    let newInputValue = "";
    selection.selectedInputs.forEach(input => {
      if (input.checked) {
        newInputValue = input.nextElementSibling.innerText;
      }
    })

    valueInput.value = newInputValue;
  }

  function setLabelValue(value) {
    label.innerText = value;
  }

  function setDefaultLabelValue() {
    setLabelValue(selection.dataset.placeholder);
  }
});


// handling clear popup
const SHOW_BUTTON_ATTRIBUTE = "data-showButtonId";
const POPUP_SHOWTIME = 3000;
let clearPopups = document.querySelectorAll(`[${SHOW_BUTTON_ATTRIBUTE}]`)

const ACTIVE_CLASS = "active";
clearPopups.forEach(popup => {
  let triggerButtonId = popup.getAttribute(SHOW_BUTTON_ATTRIBUTE)
  let triggerButton = document.getElementById(triggerButtonId);

  if (triggerButton) {
    triggerButton.addEventListener("click", () => {
      popup.classList.add(ACTIVE_CLASS);

      setTimeout(() => {
        popup.classList.remove(ACTIVE_CLASS);
      }, POPUP_SHOWTIME);
    })
  }
})

function registerPopup(popup, popupOpeners, popupClose, isOpened) {
  function open() {
    checkHeightAndMakeScrollIfNeeded(popup);
    popup.classList.add("active");
    document.querySelector("html").style.overflow = "hidden"
  }

  if (popup && popupOpeners && popupClose) {
    if (isOpened) {
      open();
    }

    popupOpeners.forEach((button) => {
      button.addEventListener("click", () => {
        open();
      });
    });

    popupClose.addEventListener("click", () => {
      popup.classList.remove("active");
      document.querySelector("html").style.overflow = "auto"
    });
  }
}

// skill-progress-popup

const tableFilterPopup = document.querySelectorAll(".skill-progress-popup__table-filter");

tableFilterPopup.forEach(filter => {
  let tableFilterPopupOpeners = filter.querySelector(".skill-progress-popup__table-filter-button");

  tableFilterPopupOpeners.addEventListener("click", () => {
    filter.classList.toggle("active")
  })
})


// tooltip
const TOOLTIP_ATTRIBUTE = "[data-tooltip]";
let tooltiped = document.querySelectorAll(TOOLTIP_ATTRIBUTE)
let tooltip = createTooltip();
tooltiped.forEach(tooltipedElement => {
  tooltipedElement.addEventListener('mouseover', function () {
    tooltip.innerHTML = tooltipedElement.getAttribute("data-tooltip");
    tooltip.classList.add("active")

    var rect = tooltipedElement.getBoundingClientRect();

    tooltip.style.left = rect.right + "px";
    tooltip.style.top = rect.top + document.documentElement.scrollTop + "px";
  });

  tooltipedElement.addEventListener('mouseout', function () {
    tooltip.classList.remove("active")
  });
})

function createTooltip() {
  var tooltipContainer = document.createElement('div');

  tooltipContainer.classList.add('tooltip');
  document.documentElement.appendChild(tooltipContainer)

  return tooltipContainer;
}


