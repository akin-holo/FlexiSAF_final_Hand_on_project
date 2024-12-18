const primaryMessages = document.getElementById("primaryContainer");
const promotionMessages = document.getElementById("promotionContainer");
const socialMessages = document.getElementById("socialContainer");
const updateMessages = document.getElementById("updateContainer");

const selectButton = document.querySelectorAll(".inbox-type button");
selectButton.forEach(button => {
   button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      
      var x;
      
      const primaryButton = document.getElementById("primaryButton");
      const promotionButton = document.getElementById("promotionButton");
      const socialButton = document.getElementById("socialButton");
      const updateButton = document.getElementById("updateButton");

      switch (value) {
         case "primary-button":
            promotionMessages.style.display = "none";
            socialMessages.style.display = "none";
            updateMessages.style.display = "none";

            primaryMessages.style.display = "initial";

            primaryButton.style.color = "blue";
            primaryButton.style.borderBottom = "2px solid blue";

            break;

         case "promotion-button":
            x = primaryButton;
            x.style.color = "initial";
            x.style.borderBottom = "initial";

            primaryMessages.style.display = "none";
            socialMessages.style.display = "none";
            updateMessages.style.display = "none";

            primaryButton.style.color = "initial";
            primaryButton.style.borderBottom = "initial";

            promotionMessages.style.display = "flex";

            promotionButton.style.color = "blue";
            promotionButton.style.borderBottom = "2px solid blue";

            break;

         case "social-button":
            primaryMessages.style.display = "none";
            promotionMessages.style.display = "none";
            updateMessages.style.display = "none";

            socialMessages.style.display = "flex";

            promotionButton.style.color = "initial";
            promotionButton.style.borderBottom = "initial";

            socialButton.style.color = "blue";
            socialButton.style.borderBottom = "2px solid blue";

            break;

         case "update-button":
            primaryMessages.style.display = "none";
            promotionMessages.style.display = "none";
            socialMessages.style.display = "none";

            socialButton.style.color = "unset";
            socialButton.style.borderBottom = "unset";

            updateMessages.style.display = "flex";

            updateButton.style.color = "blue";
            updateButton.style.borderBottom = "2px solid blue";

            break;
         
         default: 
         promotionMessages.style.display = "none";
         socialMessages.style.display = "none";
         updateMessages.style.display = "none";

         primaryMessages.style.display = "initial";
      }
   })
})