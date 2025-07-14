document.getElementById("jobApplicationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const popup = document.getElementById("popupOverlay");
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
    this.reset();
  }, 4000);
});
