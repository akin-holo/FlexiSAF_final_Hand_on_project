// menu-bar button to change width of both left-side-bar and msg-display-area
let menuBarClick = 1;

const menuBar = document.getElementById("menuBar");
menuBar.addEventListener("click", () => {
   
   let leftSideBar = document.querySelector(".left-side-bar");
   let messageDisplayArea = document.querySelector(".msg-display-area");
   // let rightSideBar = document.querySelector(".right-side-bar");

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


// function to change which properties in the left-side-bar to display if clicked 
const changeIframeButtons = document.querySelectorAll(".change-iframe-content-btn-wrapper button");
const iframe = document.getElementById("iframe");

changeIframeButtons.forEach(button => {
   button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      switch (value) {
         case "inbox":
            iframe.src = "mail/u/inbox.html";
            break;
         case "starred":
            iframe.src = "mail/u/starred.html";
            break;
         case "snoozed":
            iframe.src = "mail/u/snoozed.html";
            break;
         case "sent":
            iframe.src = "mail/u/sent.html";
            break;
         case "drafts":
            iframe.src = "mail/u/drafts.html";
            break;
         default:
            iframe.src = "mail/u/inbox.html";
      }

      // changeIframeButtons.style.backgroundColor = "blue";
   });
});