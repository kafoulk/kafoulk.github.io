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

  function updateTrianglePosition() {
    const rect = resizer.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const corners = [
      { name: 'top-left', x: rect.left, y: rect.top },
      { name: 'top-right', x: rect.right, y: rect.top },
      { name: 'bottom-left', x: rect.left, y: rect.bottom },
      { name: 'bottom-right', x: rect.right, y: rect.bottom }
    ];

    // Find corner closest to center
    let closest = corners[0];
    let minDist = Math.hypot(centerX - closest.x, centerY - closest.y);

    for (let i = 1; i < corners.length; i++) {
      const d = Math.hypot(centerX - corners[i].x, centerY - corners[i].y);
      if (d < minDist) {
        minDist = d;
        closest = corners[i];
      }
    }

    // Position triangle in the closest corner
    resizer.dataset.triangleCorner = closest.name; // store for CSS
  }

  resizer.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    const rect = resizer.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
  });

  resizer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    resizer.style.left = (touch.clientX - offsetX) + "px";
    resizer.style.top = (touch.clientY - offsetY) + "px";

    updateTrianglePosition();
  });

  resizer.addEventListener("touchend", () => {
    isDragging = false;

    // Snap to nearest corner
    const rect = resizer.getBoundingClientRect();
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const margin = 20;

    const distTL = Math.hypot(rect.left, rect.top);
    const distTR = Math.hypot(screenW - rect.right, rect.top);
    const distBL = Math.hypot(rect.left, screenH - rect.bottom);
    const distBR = Math.hypot(screenW - rect.right, screenH - rect.bottom);

    const minDist = Math.min(distTL, distTR, distBL, distBR);

    let targetLeft, targetTop;

    if (minDist === distTL) {
      targetLeft = margin;
      targetTop = margin;
    } else if (minDist === distTR) {
      targetLeft = screenW - rect.width - margin;
      targetTop = margin;
    } else if (minDist === distBL) {
      targetLeft = margin;
      targetTop = screenH - rect.height - margin;
    } else {
      targetLeft = screenW - rect.width - margin;
      targetTop = screenH - rect.height - margin;
    }

    resizer.style.transition = "all 0.2s ease-out";
    resizer.style.left = targetLeft + "px";
    resizer.style.top = targetTop + "px";

    setTimeout(() => {
      resizer.style.transition = "";
      updateTrianglePosition(); // update triangle after snap
    }, 200);
  });

  // Initial triangle positioning
  updateTrianglePosition();
});
