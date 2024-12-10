// menu-bar button to change width of both left-side-bar and msg-display-area
let menuBarClick = 1;

const menuBar = document.getElementById("menuBar");
menuBar.addEventListener("click", () => {
   
   let leftSideBar = document.querySelector(".left-side-bar");
   let messageDisplayArea = document.querySelector(".msg-display-area");
   let rightSideBar = document.querySelector(".right-side-bar");

   if(menuBarClick === 1) {
      leftSideBar.style.width = "70px";
      // rightSideBar.style.width = "10%"
      messageDisplayArea.style.marginLeft = "67px";
      messageDisplayArea.style.width = "90%";

      menuBarClick = 0;
   } else {
      leftSideBar.style.width = "10%";
      messageDisplayArea.style.marginLeft = "235px";
      messageDisplayArea.style.width = "77%";
      menuBarClick = 1;
   }
});