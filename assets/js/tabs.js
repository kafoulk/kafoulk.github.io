document.addEventListener("DOMContentLoaded", function () {
  function openTab(evt, tabName) {
    const tabcontents = document.querySelectorAll(".tabcontent");
    const tablinks = document.querySelectorAll(".tablink");

    // Hide all tab contents
    tabcontents.forEach((content) => {
      content.classList.remove("show");
    });

    // Remove 'active' from all tab buttons
    tablinks.forEach((link) => link.classList.remove("active"));

    // Show the clicked tab content
    const content = document.getElementById(tabName);
    if (content) {
      content.classList.add("show");
    }

    // Activate the clicked tab button
    if (evt.currentTarget) {
      evt.currentTarget.classList.add("active");
    }
  }

  // Attach click listeners to tab buttons
  const tabButtons = document.querySelectorAll(".tablink");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      openTab(e, this.getAttribute("data-tab"));
    });

    // Keyboard accessibility
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openTab(e, this.getAttribute("data-tab"));
      }
    });
  });

  // Open the first tab on page load
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
});
