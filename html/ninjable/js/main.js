/* let know */

const addBtns = document.querySelectorAll('.user-add');

if (addBtns) {
  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const letKnowElems = document.querySelectorAll('.let-know');
      letKnowElems.forEach(elem => {
        elem.classList.add('active');
      });
    });
  });
}

// Levels popup

const levelsPopup = document.querySelector('.level__popup');
const openLevelsPopup = document.querySelector('.add-level');
const levelPopupClose = document.querySelector('.level-close');

if (levelsPopup && openLevelsPopup) {
  openLevelsPopup.addEventListener('click', () => {
    levelsPopup.classList.add('active');
  });
  levelPopupClose.addEventListener('click', () => {
    levelsPopup.classList.remove('active');
  });
}


// Levels buttons 

const buttons = document.querySelectorAll('.level__popup-form button');

buttons.forEach(button => {
  let clickCount = 0;
  let popup = null;

  button.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 2 && button.classList.contains('active')) {
      popup = document.createElement('div');
      popup.classList.add('delete-level-popup');
      popup.innerHTML = '<p>Level can\'t be deactivated until you have at least one active user with this level.</p>';

      popup.style.position = 'absolute';
      popup.style.top = `${(button.offsetTop + button.offsetHeight) / window.innerHeight * 55}%`;
      popup.style.right = `${(window.innerWidth - button.offsetLeft) / window.innerWidth * 55}%`;

      button.parentNode.insertBefore(popup, button.nextSibling);
      clickCount = 0;
    } else {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        button.classList.add('active');
      }
    }
  });

  document.addEventListener('click', (event) => {
    if (popup && !button.contains(event.target) && !popup.contains(event.target)) {
      popup.remove();
      popup = null;
    }
  });
});


// auto entry of the extended department

const inputs = document.querySelectorAll('.department-field');
if (inputs.length > 0) {
  const placeholderWidth = inputs[0].placeholder.length + 9;
  inputs.forEach((input) => {
    let width = placeholderWidth;
    input.style.width = (width * 0.5) + 'vw';
    input.addEventListener('input', () => {
      width = Math.max(placeholderWidth, input.value.length + 9);
      input.style.width = (width * 0.5) + 'vw';
    });
  });
}



/* sidebar menu */

const sidemenuItem = document.querySelectorAll('.sidemenu__item');

if (sidemenuItem) {
  sidemenuItem.forEach(menu => {
    menu.addEventListener('click', function () {
      sidemenuItem.forEach(menu => menu.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* popup users */

const popupUsers = document.querySelector('.add-users');
const addUserBtn = document.querySelector('.add-user-btn');
const userPopupClose = document.querySelector('.ninjable__popup-close');

if (popupUsers && addUserBtn) {
  addUserBtn.addEventListener('click', () => {
    popupUsers.classList.add('active');
  });
  userPopupClose.addEventListener('click', () => {
    popupUsers.classList.remove('active');
  });
}

const popupEditUsers = document.querySelector('.edit-users');
const addEditUserBtns = document.querySelectorAll('.edit');
const EdituserPopupClose = document.querySelector('.edit-close');

if (popupEditUsers && addEditUserBtns) {
  addEditUserBtns.forEach(addEditUserBtn => {
    addEditUserBtn.addEventListener('click', () => {
      popupEditUsers.classList.add('active');
    });
  });

  EdituserPopupClose.addEventListener('click', () => {
    popupEditUsers.classList.remove('active');
  });
}


/* popup add level skills */

const popupSkillsLevel = document.querySelector('.add-skillss-level');
const addSkillsBtns = document.querySelectorAll('.add-skills');
const skillsPopupClose = document.querySelector('.ninjable__popup-close');

if (popupSkillsLevel && addSkillsBtns.length > 0) {
  addSkillsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      popupSkillsLevel.classList.add('active');
    });
  });
  skillsPopupClose.addEventListener('click', () => {
    popupSkillsLevel.classList.remove('active');
  });
}

/* popup edit level skills */

const editLevelPopup = document.querySelector('.edit-skillss-level');
const editLevelBtn = document.querySelectorAll('.edit-job-btn');
const skillsAddClose = document.querySelector('.edit-close');

if (editLevelPopup && editLevelBtn.length > 0) {
  editLevelBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      editLevelPopup.classList.add('active');
    });
  });
  skillsAddClose.addEventListener('click', () => {
    editLevelPopup.classList.remove('active');
  });
}

/* popup add skills */

const addSkillPopup = document.querySelector('.add-skillss-popup');
const addSkillBtn = document.querySelectorAll('.add-skill-btn');
const closeAddSkill = document.querySelector('.add-skill-close');

if (addSkillPopup && addSkillBtn.length > 0) {
  addSkillBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      addSkillPopup.classList.add('active');
    });
  });
  closeAddSkill.addEventListener('click', () => {
    addSkillPopup.classList.remove('active');
  });
}

/* popup edit skills */

const editSkillPopup = document.querySelector('.edit-skillss-popup');
const editSkillBtn = document.querySelectorAll('.edit-skill-btn');
const closeEditSkill = document.querySelector('.edit-skill-close');

if (editSkillPopup && editSkillBtn.length > 0) {
  editSkillBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      editSkillPopup.classList.add('active');
    });
  });
  closeEditSkill.addEventListener('click', () => {
    editSkillPopup.classList.remove('active');
  });
}


/* info popup skills */

const skillsIcos = document.querySelectorAll('.skills-info');
const skillsInfoPopups = document.querySelectorAll('.info-popup');

if (skillsIcos.length > 0 && skillsInfoPopups.length > 0) {
  skillsIcos.forEach((skillsIco, index) => {
    const skillsInfoPopup = skillsInfoPopups[index];

    skillsIco.addEventListener('click', () => {
      skillsInfoPopup.classList.add('active');
      setTimeout(() => {
        skillsInfoPopup.classList.remove('active');
      }, 3000);
    });
  });
}



/* add badge popup */

const addBadgePopup = document.querySelector('.add-badge-popup');
const addBadgeBtn = document.querySelectorAll('.add-badge-btn');
const addBadgeClose = document.querySelector('.add-badge-close');

if (addBadgePopup && addBadgeBtn.length > 0) {
  addBadgeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      addBadgePopup.classList.add('active');
    });
  });
  addBadgeClose.addEventListener('click', () => {
    addBadgePopup.classList.remove('active');
  });
}


/* badge info popups */

const labels = document.querySelectorAll('.info');

labels.forEach(label => {
  label.addEventListener('click', () => {
    const badge = label.querySelector('.badge__info-popup');
    badge.classList.add('active');
    setTimeout(() => {
      badge.classList.remove('active');
    }, 3000);
  });
});


/* acievements title popup */

const acievementsTitleIco = document.querySelector('.acievements-info');
const acievementsTitlePopup = document.querySelector('.acievements-title');

if (acievementsTitleIco && acievementsTitlePopup) {
  acievementsTitleIco.addEventListener('click', () => {
    acievementsTitlePopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.acievements-title') && !event.target.closest('.acievements-info')) {
      acievementsTitlePopup.classList.remove('active');
    }
  });
}


/* add reward popup */

const addRewardPopup = document.querySelector('.add-reward-popup');
const addRewardBtn = document.querySelectorAll('.add-revard-btn');
const addRewardClose = document.querySelector('.add-revard-close');

if (addRewardPopup && addRewardBtn.length > 0) {
  addRewardBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      addRewardPopup.classList.add('active');
    });
  });
  addRewardClose.addEventListener('click', () => {
    addRewardPopup.classList.remove('active');
  });
}

/* edit reward popup */

const editRewardPopup = document.querySelector('.edit-reward-popup');
const editRewardBtn = document.querySelectorAll('.edit');
const editRewardClose = document.querySelector('.edit-revard-close');

if (editRewardPopup && editRewardBtn.length > 0) {
  editRewardBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      editRewardPopup.classList.add('active');
    });
  });
  editRewardClose.addEventListener('click', () => {
    editRewardPopup.classList.remove('active');
  });
}


/* header avatar */

const profileBtn = document.querySelector('.header__avatar');
const profilePopup = document.querySelector('.header__profile-popup');

if (profileBtn && profilePopup) {
  profileBtn.addEventListener('click', () => {
    profilePopup.classList.toggle('active');
  });
}

/* alert popup */

const archiveDeleteBtns = document.querySelectorAll('.delete-icon, .archive');

archiveDeleteBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const row = btn.closest('.row-item');
    const popup = document.createElement('div');
    popup.classList.add('alert-popup');
    popup.innerHTML = `
      <p>Are you sure?</p>
      <div class="btns">
        <button class="true">Yes</button>
        <button class="false">No</button>
      </div>
    `;
    row.appendChild(popup);
    const trueBtn = popup.querySelector('.true');
    const falseBtn = popup.querySelector('.false');
    trueBtn.addEventListener('click', () => {
      if (document.body.classList.contains('levels-page')) {
        const deleteLevelPopup = document.createElement('div');
        deleteLevelPopup.classList.add('delete-level-popup');
        deleteLevelPopup.innerHTML = `
          <p>
            Level can't be deactivated until you have at least one active user with this level.
          </p>
        `;
        const rowRect = row.getBoundingClientRect();
        const popupHeight = deleteLevelPopup.getBoundingClientRect().height;
        const topOffset = rowRect.top - popupHeight;
        deleteLevelPopup.style.position = 'absolute';
        deleteLevelPopup.style.top = `1vw`;
        deleteLevelPopup.style.left = `33vw`;
        row.parentNode.appendChild(deleteLevelPopup); // Append to the parent of the table row
      } else {
        row.remove();
      }

      popup.remove();
    });
    falseBtn.addEventListener('click', () => {
      popup.remove();
    });
  });
});


const skillsArchive = document.querySelector('.skills-archive');
const skillsArchivePopup = document.querySelector('.skills__archive-popup');
const skillsAlertPopup = document.querySelector('.skills__alert-popup');
const alertFalse = document.querySelector('.false');
const alertTrue = document.querySelector('.true');

if (skillsArchive && skillsArchivePopup && skillsAlertPopup && alertFalse && alertTrue) {
  skillsArchive.addEventListener('click', (event) => {
    event.preventDefault();
    skillsAlertPopup.classList.add('active');

    setTimeout(() => {
      if (skillsArchivePopup) {
        skillsArchivePopup.classList.remove('active');
      }
    }, 3000);
  });

  alertTrue.addEventListener('click', () => {
    skillsAlertPopup.classList.remove('active');
    if (skillsArchivePopup) {
      skillsArchivePopup.classList.add('active');
    }
  });

  alertFalse.addEventListener('click', () => {
    skillsAlertPopup.classList.remove('active');
  });
}


/* custom period popup */

const periodPopup = document.querySelector('.custom__period-popup');
const invoicesBtn = document.querySelector('.invoices-btn');
const invoicesCloseBtn = document.querySelector('.custom__period-close');

if (invoicesBtn && periodPopup) {
  invoicesBtn.addEventListener('click', () => {
    periodPopup.classList.add('active');
  });
  if (invoicesCloseBtn) {
    invoicesCloseBtn.addEventListener('click', () => {
      periodPopup.classList.remove('active');
    });
  }
}


/* payment method */

const paymentCarts = document.querySelectorAll('.payment__method-item');
const cancelBtn = document.querySelector('.cancel');

paymentCarts.forEach(paymentCart => {
  paymentCart.addEventListener('click', () => {

    paymentCarts.forEach(cart => {
      if (cart !== paymentCart) {
        cart.classList.remove('active');
      }
    });

    paymentCart.classList.add('active');
    cancelBtn.classList.add('active');
  });
});


/* Custom branding info popup */

const brandingIco = document.querySelector('.content__section-title.icon');
const brandingPopup = document.querySelector('.branding__popup');

if (brandingIco && brandingPopup) {
  brandingIco.addEventListener('click', () => {
    brandingPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.branding__popup') && !event.target.closest('.content__section-title.icon')) {
      brandingPopup.classList.remove('active');
    }
  });
}


/* Departments info popup */

const infoTitle = document.querySelector('.departments-title');
const infoPopup = document.querySelector('.info-popup');

if (infoTitle && infoPopup) {
  infoTitle.addEventListener('click', () => {
    infoPopup.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.info-popup') && !event.target.closest('.departments-title')) {
      infoPopup.classList.remove('active');
    }
  });
}

/* Departments edit field */

document.addEventListener("DOMContentLoaded", function () {
  var departmentBlocks = document.querySelectorAll(".department");

  departmentBlocks.forEach(function (departmentBlock) {
    var editLink = departmentBlock.querySelector(".edit");

    editLink.addEventListener("click", function (event) {
      event.preventDefault();

      var editElements = departmentBlock.querySelectorAll(".edit");
      var departmentFieldElements = departmentBlock.querySelectorAll(".department-field");

      if (editLink.classList.contains("active")) {
        editElements.forEach(function (editElement) {
          editElement.classList.remove("active");
        });

        departmentFieldElements.forEach(function (departmentFieldElement) {
          departmentFieldElement.classList.remove("active");
        });
      } else {
        editElements.forEach(function (editElement) {
          editElement.classList.add("active");
        });

        departmentFieldElements.forEach(function (departmentFieldElement) {
          departmentFieldElement.classList.add("active");
        });
      }
    });

    document.addEventListener("click", function (event) {
      if (!departmentBlock.contains(event.target)) {
        var editElements = departmentBlock.querySelectorAll(".edit");
        var departmentFieldElements = departmentBlock.querySelectorAll(".department-field");

        editElements.forEach(function (editElement) {
          editElement.classList.remove("active");
        });

        departmentFieldElements.forEach(function (departmentFieldElement) {
          departmentFieldElement.classList.remove("active");
        });
      }
    });
  });
});


/* custom period popup */

const positionsPopup = document.querySelector('.positions__popup.add-department');
const addDepartmentBtns = Array.from(document.querySelectorAll('.add-department-btn'));
const positionsClose = document.querySelector('.edit-close');

if (positionsPopup && addDepartmentBtns.length > 0) {
  addDepartmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      positionsPopup.classList.add('active');
    });
  });
  if (positionsClose) {
    positionsClose.addEventListener('click', () => {
      positionsPopup.classList.remove('active');
    });
  }
}

const addJobPopup = document.querySelector('.positions__popup.add-job');
const addJobBtns = Array.from(document.querySelectorAll('.add-job-btn'));
const addJobClose = document.querySelector('.add-job-close');

if (addJobPopup && addJobBtns.length > 0) {
  addJobBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      addJobPopup.classList.add('active');
    });
  });
  if (addJobClose) {
    addJobClose.addEventListener('click', () => {
      addJobPopup.classList.remove('active');
    });
  }
}

const editJobPopup = document.querySelector('.positions__popup.edit-job');
const editJobBtns = Array.from(document.querySelectorAll('.edit-job-btn'));
const editJobClose = document.querySelector('.edit-job-close');

if (editJobPopup && editJobBtns.length > 0) {
  editJobBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      editJobPopup.classList.add('active');
    });
  });
  if (editJobClose) {
    editJobClose.addEventListener('click', () => {
      editJobPopup.classList.remove('active');
    });
  }
}


/* Subscription branding */

const subscriptionBtn = document.querySelector('.upgrade__btn');
const downgradeBtn = document.querySelector('.downgrade__btn');
const subscriptionPopup = document.querySelector('.subscription__popup');
const subscriptionClose = document.querySelector('.ninjable__popup-close');

if (subscriptionBtn && subscriptionPopup && downgradeBtn) {
  subscriptionBtn.addEventListener('click', () => {
    subscriptionPopup.classList.toggle('active');
  });

  downgradeBtn.addEventListener('click', () => {
    subscriptionPopup.classList.toggle('active');
  });

  subscriptionClose.addEventListener('click', () => {
    subscriptionPopup.classList.remove('active');
  });
}

/* invoices table colored  */

const invoices = document.querySelectorAll(".invoices__list-item");
for (let i = 0; i < invoices.length; i += 2) {
  invoices[i].classList.add("colored");
}

/* table colored  */

const rowItem = document.querySelectorAll(".row-item");
for (let i = 0; i < rowItem.length; i += 2) {
  rowItem[i].classList.add("colored");
}

/* Calendar  */

const calendarFrom = document.querySelectorAll('.calendar-from td');
if (calendarFrom) {
  calendarFrom.forEach(td => {
    td.addEventListener('click', function () {
      calendarFrom.forEach(td => td.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

const calendarTo = document.querySelectorAll('.calendar-to td');
if (calendarTo) {
  calendarTo.forEach(td => {
    td.addEventListener('click', function () {
      calendarTo.forEach(td => td.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* upload images */

const fileInput = document.getElementById("upload__file");
const popup = document.querySelector(".resize__img-popup");
const popupClose = document.querySelector(".resize__img-close");

if (fileInput && popup) {
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      popup.classList.add("active");
    } else {
      popup.classList.remove("active");
    }
  });
  popupClose.addEventListener('click', () => {
    popup.classList.remove("active");
  })
};


/* filter select */

let select = document.querySelector(".filter-select");
let selectSelected = select ? select.querySelector(".select-selected") : null;
let selectItems = select ? select.querySelector(".select-items") : null;

if (selectSelected) {
  selectSelected.addEventListener("click", function () {
    if (selectItems && selectItems.classList.contains("select-hide")) {
      selectItems.classList.remove("select-hide");
      select.classList.add('active');
    } else if (selectItems) {
      selectItems.classList.add("select-hide");
      select.classList.remove('active');
    }
  })
};


/* custom select */

let selectElements = document.getElementsByClassName("custom-select");

for (let i = 0; i < selectElements.length; i++) {
  let selectElement = selectElements[i];
  let selectSelectedElement = selectElement.getElementsByClassName("select-selected")[0];
  let selectItemsElement = selectElement.getElementsByClassName("select-items")[0];
  let selectOptionElements = selectItemsElement.getElementsByClassName("select-option");
  
  selectSelectedElement.addEventListener("click", function () {
    this.classList.toggle("select-arrow-active");
    selectItemsElement.classList.toggle("select-hide");
    
    // Оновлюємо стан `custom-select` на основі класів `select-selected`
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
      
      // Оновлюємо стан `custom-select` на основі класів `select-selected`
      if (selectSelectedElement.classList.contains("select-arrow-active")) {
        selectElement.classList.add("active");
      } else {
        selectElement.classList.remove("active");
      }
    });
  }
}



/* custom select new */

const newCustomSelects = document.querySelectorAll('.new__custom-select');

function closeAllSelectsExcept(selectedSelect) {
  newCustomSelects.forEach((select) => {
    if (select !== selectedSelect && select.classList.contains('open')) {
      select.classList.remove('open');
    }
  });
}

newCustomSelects.forEach((newCustomSelect) => {
  const newCustomTrigger = newCustomSelect.querySelector('.new__custom-select__trigger');
  const newCustomOptionsContainer = newCustomSelect.querySelector('.new__custom-options');
  const newCustomOptionsList = newCustomSelect.querySelectorAll('.new__custom-option');
  const customScrollbar = newCustomSelect.querySelector('.custom-scrollbar');
  const customScrollbarThumb = document.createElement('div');
  customScrollbarThumb.classList.add('custom-scrollbar-thumb');
  customScrollbar.appendChild(customScrollbarThumb);

  function updateScroll() {
    const containerScrollTop = newCustomOptionsContainer.scrollTop;
    const containerHeight = newCustomOptionsContainer.clientHeight;
    const containerScrollHeight = newCustomOptionsContainer.scrollHeight;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = Math.max((containerHeight / containerScrollHeight) * scrollbarHeight, 20);
    const maxThumbTop = scrollbarHeight - thumbHeight;
    const thumbTop = (containerScrollTop / (containerScrollHeight - containerHeight)) * maxThumbTop;
    customScrollbarThumb.style.height = `${thumbHeight}px`;
    customScrollbarThumb.style.top = `${thumbTop}px`;
  }

  newCustomTrigger.addEventListener('click', () => {
    if (newCustomSelect.classList.contains('open')) {
      newCustomSelect.classList.remove('open');
    } else {
      closeAllSelectsExcept(newCustomSelect);
      newCustomSelect.classList.add('open');
    }
  });

  newCustomOptionsContainer.addEventListener('scroll', updateScroll);

  newCustomOptionsList.forEach((option) => {
    option.addEventListener('click', (event) => {
      if (newCustomSelect.closest('.skills-filter-select')) {
        const selectedOptions = newCustomSelect.querySelectorAll('.new__custom-option.selected');
        const selectedOptionValues = Array.from(selectedOptions).map((option) => option.getAttribute('data-value'));
        const newCustomOptionValue = option.getAttribute('data-value');
        const newCustomTrigger = newCustomSelect.querySelector('.new__custom-select__trigger');
        const skillsTagsList = newCustomSelect.closest('.new__custom-select-wrapper').querySelector('.skills-tags-list');

        if (selectedOptionValues.includes(newCustomOptionValue)) {
          return;
        }

        const tagItem = document.createElement('div');
        tagItem.classList.add('tag-item');

        const tagItemText = document.createElement('p');
        tagItemText.textContent = option.textContent;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        tagItem.appendChild(tagItemText);
        tagItem.appendChild(removeButton);
        skillsTagsList.appendChild(tagItem);
        addRemoveButtonListener(removeButton);

        option.classList.add('selected');
        newCustomTrigger.textContent = 'Type here to search for Clan...';
      } else {
        const newCustomOptionValue = option.getAttribute('data-value');
        const newCustomTrigger = newCustomSelect.querySelector('.new__custom-select__trigger');
        if (newCustomSelect.closest('.acievements-select')) {
          newCustomTrigger.textContent = 'icon';
        } else {
          newCustomTrigger.textContent = option.textContent;
        }
        newCustomSelect.classList.remove('open');
        if (newCustomSelect.classList.contains('filter-select-scroll')) {
          newCustomSelect.classList.add('open');
          newCustomTrigger.textContent = 'Type here to search for Clan...';
        }
      }
    });
  });


  customScrollbarThumb.addEventListener("mousedown", (e) => {
    const thumbStartPosition = e.clientY - customScrollbarThumb.getBoundingClientRect().top;
    const scrollbarHeight = customScrollbar.clientHeight;
    const thumbHeight = customScrollbarThumb.clientHeight;
    const maxThumbTop = scrollbarHeight - thumbHeight;

    function onMouseMove(e) {
      const thumbTop = e.clientY - customScrollbar.getBoundingClientRect().top - thumbStartPosition;
      if (thumbTop < 0) {
        customScrollbarThumb.style.top = "0";
        newCustomOptionsContainer.scrollTop = 0;
      } else if (thumbTop > maxThumbTop) {
        customScrollbarThumb.style.top = maxThumbTop + "px";
        newCustomOptionsContainer.scrollTop = newCustomOptionsContainer.scrollHeight;
      } else {
        customScrollbarThumb.style.top = thumbTop + "px";
        newCustomOptionsContainer.scrollTop = thumbTop / maxThumbTop * (newCustomOptionsContainer.scrollHeight - newCustomOptionsContainer.clientHeight);
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

const skillsTagsList = document.querySelector('.skills-tags-list');

const observer = new MutationObserver(() => {
  if (skillsTagsList.querySelectorAll('.tag-item').length > 0) {
    skillsTagsList.classList.add('active');
  } else {
    skillsTagsList.classList.remove('active');
  }
});

const config = { childList: true };
observer.observe(skillsTagsList, config);


const newCustomSelect = document.querySelector('.new__custom-select');

function checkCustomSelect() {
  if (skillsTagsList.classList.contains('active') && !newCustomSelect.classList.contains('open')) {
    newCustomSelect.classList.add('hide');
  } else {
    newCustomSelect.classList.remove('hide');
  }
}

checkCustomSelect();

skillsTagsList.addEventListener('click', () => {
  checkCustomSelect();
});

const selectOpenBtn = document.querySelector('.select-open-btn');
selectOpenBtn.addEventListener('click', () => {
  console.log('clk')
  newCustomSelect.classList.add('open');
  newCustomSelect.classList.remove('hide');
});



/* passwordInput */

const passwordInput = document.getElementById("password");
const passwordIcon = document.querySelector(".password-icon");

if (passwordInput && passwordIcon) {
  passwordIcon.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  })
};

