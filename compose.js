document.addEventListener("DOMContentLoaded", () => {
   const composeButton = document.getElementById("compose");
   const formContainer = document.getElementById("formContainer");
 
   composeButton.addEventListener("click", () => {

      if (document.getElementById("emailForm")) {
       return; 
     }
 

     const form = document.createElement("form");
     form.id = "emailForm";
     form.style = "position: fixed; top: 10%; left: 20%; background: #fff; border: 1px solid #ccc; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); width: 60%;";
 

     const toLabel = document.createElement("label");
     toLabel.for = "to";
     toLabel.textContent = "To:";
     const toInput = document.createElement("input");
     toInput.type = "email";
     toInput.id = "to";
     toInput.name = "to";
     toInput.placeholder = "Recipient's email";
     toInput.required = true;
 

     const subjectLabel = document.createElement("label");
     subjectLabel.for = "subject";
     subjectLabel.textContent = "Subject:";
     const subjectInput = document.createElement("input");
     subjectInput.type = "text";
     subjectInput.id = "subject";
     subjectInput.name = "subject";
     subjectInput.placeholder = "Email subject";
 

     const messageLabel = document.createElement("label");
     messageLabel.for = "message";
     messageLabel.textContent = "Message:";
     const messageTextarea = document.createElement("textarea");
     messageTextarea.id = "message";
     messageTextarea.name = "message";
     messageTextarea.rows = 10;
     messageTextarea.placeholder = "Write your email here...";
 

     const sendButton = document.createElement("button");
     sendButton.type = "submit";
     sendButton.textContent = "Send";
 
     const cancelButton = document.createElement("button");
     cancelButton.type = "button";
     cancelButton.textContent = "Cancel";
 

     form.appendChild(toLabel);
     form.appendChild(toInput);
     form.appendChild(document.createElement("br"));
     form.appendChild(subjectLabel);
     form.appendChild(subjectInput);
     form.appendChild(document.createElement("br"));
     form.appendChild(messageLabel);
     form.appendChild(messageTextarea);
     form.appendChild(document.createElement("br"));
     form.appendChild(sendButton);
     form.appendChild(cancelButton);
 

     formContainer.appendChild(form);
 
     
     cancelButton.addEventListener("click", () => {
       formContainer.innerHTML = ""; // Remove the form
     });
 
     form.addEventListener("submit", (e) => {
       e.preventDefault();
       const to = toInput.value;
       const subject = subjectInput.value;
       const message = messageTextarea.value;
 
       console.log(`To: ${to}\nSubject: ${subject}\nMessage: ${message}`);
       alert("Email sent successfully!");
 
       formContainer.innerHTML = ""; // Remove the form after sending
     });
   });
 });