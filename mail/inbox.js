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

            if(primaryButton.style.color === "blue" && primaryButton.style.borderBottom === "2px solid blue") {

               promotionButton.style.color = "unset";
               promotionButton.style.borderBottom = "unset";

               socialButton.style.color = "unset";
               socialButton.style.borderBottom = "unset";

               updateButton.style.color = "unset";
               updateButton.style.borderBottom = "unset";
            };

            break;

         case "promotion-button":
            primaryMessages.style.display = "none";
            socialMessages.style.display = "none";
            updateMessages.style.display = "none";

            promotionMessages.style.display = "initial";

            promotionButton.style.color = "blue";
            promotionButton.style.borderBottom = "2px solid blue";

            if(promotionButton.style.color === "blue" && promotionButton.style.borderBottom === "2px solid blue") {
               primaryButton.style.color = "unset";
               primaryButton.style.borderBottom = "unset";

               socialButton.style.color = "unset";
               socialButton.style.borderBottom = "unset";

               updateButton.style.color = "unset";
               updateButton.style.borderBottom = "unset";
            };
            break;

         case "social-button":
            primaryMessages.style.display = "none";
            promotionMessages.style.display = "none";
            updateMessages.style.display = "none";

            socialMessages.style.display = "initial";

            socialButton.style.color = "blue";
            socialButton.style.borderBottom = "2px solid blue";

            if(socialButton.style.color === "blue" && socialButton.style.borderBottom === "2px solid blue") {
               primaryButton.style.color = "unset";
               primaryButton.style.borderBottom = "unset";

               promotionButton.style.color = "unset";
               promotionButton.style.borderBottom = "unset";

               updateButton.style.color = "unset";
               updateButton.style.borderBottom = "unset";
            };
            break;

         case "update-button":
            primaryMessages.style.display = "none";
            promotionMessages.style.display = "none";
            socialMessages.style.display = "none";

            updateMessages.style.display = "initial";

            updateButton.style.color = "blue";
            updateButton.style.borderBottom = "2px solid blue";

            if(updateButton.style.color === "blue" && updateButton.style.borderBottom === "2px solid blue") {
               primaryButton.style.color = "unset";
               primaryButton.style.borderBottom = "unset";

               promotionButton.style.color = "unset";
               promotionButton.style.borderBottom = "unset";

               socialButton.style.color = "unset";
               socialButton.style.borderBottom = "unset";
            };
            break;
         
         default: 
            promotionMessages.style.display = "none";
            socialMessages.style.display = "none";
            updateMessages.style.display = "none";

            primaryMessages.style.display = "initial";
      }
   })
})