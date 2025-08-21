document.addEventListener("DOMContentLoaded", () => {
  const increaseBtn = document.getElementById("increase-text");
  const decreaseBtn = document.getElementById("decrease-text");
  let currentSize = 100; 

  increaseBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    const scrollY = window.scrollY; 
    currentSize = Math.min(currentSize + 10, 200);
    document.documentElement.style.fontSize = currentSize + "%";
    window.scrollTo(0, scrollY); 
  });

  decreaseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const scrollY = window.scrollY;
    currentSize = Math.max(currentSize - 10, 50);
    document.documentElement.style.fontSize = currentSize + "%";
    window.scrollTo(0, scrollY);
  });
});


