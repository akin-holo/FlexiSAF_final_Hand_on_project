// menu-bar button to change width of both left-side-bar and msg-display-area
let menuBarClick = 1;

const menuBar = document.getElementById("menuBar");
menuBar.addEventListener("click", () => {
   
   let leftSideBar = document.querySelector(".left-side-bar");
   let messageDisplayArea = document.querySelector(".msg-display-area");
   let hideBTNname = document.querySelectorAll("button .BTN-name");

   // let rightSideBar = document.querySelector(".right-side-bar");

   if(menuBarClick === 1) {
      hideBTNname.forEach((btn) => {
         btn.style.display = "none";
      });

      document.querySelector(".compose").style.width = "70px";

      leftSideBar.style.width = "70px";
      // rightSideBar.style.width = "10%"
      messageDisplayArea.style.marginLeft = "80px";
      messageDisplayArea.style.width = "90%";

      menuBarClick = 0;
   } else {
      hideBTNname.forEach((btn) => {
         btn.style.display = "initial";
      });

      document.querySelector(".compose").style.width = "150px";

      leftSideBar.style.width = "10%";
      messageDisplayArea.style.marginLeft = "250px";
      messageDisplayArea.style.width = "80%";

      document.getElementById("less").style.display = "none"; // hidding the less span

      menuBarClick = 1;
   }
});


// function to change which properties in the left-side-bar to display if clicked 
const changeIframeButtons = document.querySelectorAll(".change-iframe-content-btn-wrapper button");
const iframe = document.getElementById("iframe");

let inboxBTN = document.querySelector(".inboxBTN");
let starredBTN = document.querySelector(".starredBTN");
let snoozedBTN = document.querySelector(".snoozedBTN");


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


 

