  
  const composeButton = document.getElementById("compose");
  const composeModal = document.getElementById("composeModal");
  const closeModalButton = document.getElementById("closeModal");
  
  composeButton.addEventListener("click", () => {
     composeModal.style.display = "block";
     document.body.classList.add("modal-active");
  });
  
  closeModalButton.addEventListener("click", () => {
     composeModal.style.display = "none";
     document.body.classList.remove("modal-active");
  });
  
  window.addEventListener("click", (event) => {
     if (event.target === composeModal) {
        composeModal.style.display = "none";
        document.body.classList.remove("modal-active");
     }
  });