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

    // Snap to nearest corner
    const rect = resizer.getBoundingClientRect();
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const margin = 20;

    // Distances to each corner
    const distTL = Math.hypot(rect.left, rect.top);
    const distTR = Math.hypot(screenW - rect.right, rect.top);
    const distBL = Math.hypot(rect.left, screenH - rect.bottom);
    const distBR = Math.hypot(screenW - rect.right, screenH - rect.bottom);

    const minDist = Math.min(distTL, distTR, distBL, distBR);

    let targetLeft, targetTop;

    if (minDist === distTL) {
      // top-left
      targetLeft = margin;
      targetTop = margin;
    } else if (minDist === distTR) {
      // top-right
      targetLeft = screenW - rect.width - margin;
      targetTop = margin;
    } else if (minDist === distBL) {
      // bottom-left
      targetLeft = margin;
      targetTop = screenH - rect.height - margin;
    } else {
      // bottom-right
      targetLeft = screenW - rect.width - margin;
      targetTop = screenH - rect.height - margin;
    }

    // Smooth snap
    resizer.style.transition = "all 0.2s ease-out";
    resizer.style.left = targetLeft + "px";
    resizer.style.top = targetTop + "px";

    // Remove transition after snapping
    setTimeout(() => {
      resizer.style.transition = "";
    }, 200);
  });
});
