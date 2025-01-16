
document.addEventListener('DOMContentLoaded', () => {
   const contactList = document.querySelector('.contact-list');

   console.log("// *** Presentation of Learning Outcome*** through console");

   
   if (contactList) {
       contactList.style.display = 'block';

       const contacts = document.querySelectorAll('.contact-list ul li');
       for (let contact of contacts) {
           console.log(contact.textContent.trim()); 
       }

       contactList.style.display = 'none';
   } else {
       console.error('The contact list element was not found.');
   }
});
