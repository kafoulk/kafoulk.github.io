document.addEventListener("DOMContentLoaded", () => {
  const increaseBtn = document.getElementById("increase-text");
  const decreaseBtn = document.getElementById("decrease-text");
  let currentSize = 100; 

  increaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    const scrollY = window.scrollY; 
    currentSize = Math.min(currentSize + 10, 200);
    document.documentElement.style.fontSize = currentSize + "%";
    window.scrollTo(0, scrollY); 
  });

  decreaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    const scrollY = window.scrollY;
    currentSize = Math.max(currentSize - 10, 50);
    document.documentElement.style.fontSize = currentSize + "%";
    window.scrollTo(0, scrollY);
  });

  // Drag functionality for mobile
const resizer = document.getElementById("text-resizer");
let offsetX = 0, offsetY = 0, isDragging = false;

resizer.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  const rect = resizer.getBoundingClientRect();
  offsetX = touch.clientX - rect.left;
  offsetY = touch.clientY - rect.top;
});

resizer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault(); // prevent scrolling
  const touch = e.touches[0];
  resizer.style.left = (touch.clientX - offsetX) + "px";
  resizer.style.top = (touch.clientY - offsetY) + "px";
});

resizer.addEventListener("touchend", () => {
  isDragging = false;
});


});



