(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector(".backdrop"),
  };

  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener("click", toggleModal);
  }

  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  // Close modal on backdrop click
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) {
      toggleModal();
    }
  });

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("is-open")) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");

    // Prevent body scroll when modal is open
    if (refs.modal.classList.contains("is-open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
})();
