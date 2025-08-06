document.addEventListener("DOMContentLoaded", function () {
  function openTab(evt, tabName) {
    const tabcontents = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablink");

    tabcontents.forEach((content) => (content.style.display = "none"));
    tablinks.forEach((link) => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }

  // Attach click listeners to tab buttons
  const tabButtons = document.querySelectorAll(".tablink");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
    openTab(e, this.getAttribute("data-tab"));
    });
  });

  //  Open the first tab on page load
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
});
