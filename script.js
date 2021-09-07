// event listeners

const dropDownButton = document.querySelector(".dropbtn");
dropDownButton.addEventListener("mouseover", () => {
  dropDownMenu.showDropDown();
});
dropDownButton.addEventListener("mouseout", () => {
  dropDownMenu.hideDropDown();
});

// IIFE

const dropDownMenu = (() => {
  const menu = document.querySelector(".dropdowncontent");
  const showDropDown = () => {
    menu.style.display = "block";
  };

  const hideDropDown = () => {
    menu.style.display = "none";
  };

  return { showDropDown, hideDropDown };
})();

//? maybe a factory function and then const myMenu = dropDownMenu();
