  // Get elements
  const composeButton = document.getElementById("compose");
  const composeModal = document.getElementById("composeModal");
  const closeModalButton = document.getElementById("closeModal");
  
  // Show the modal when "Compose" is clicked
  composeButton.addEventListener("click", () => {
     composeModal.style.display = "block";
     document.body.classList.add("modal-active");
  });
  
  // Hide the modal when "Close" is clicked
  closeModalButton.addEventListener("click", () => {
     composeModal.style.display = "none";
     document.body.classList.remove("modal-active");
  });
  
  // Optional: Close the modal when clicking outside of it
  window.addEventListener("click", (event) => {
     if (event.target === composeModal) {
        composeModal.style.display = "none";
        document.body.classList.remove("modal-active");
     }
  });