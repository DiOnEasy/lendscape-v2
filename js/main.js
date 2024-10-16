document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".pools__item-filled");

  progressBars.forEach(bar => {
    const progressValue = bar.getAttribute("data-progress");
    
    bar.style.width = `${progressValue}%`;
    
    bar.querySelector('span').textContent = `${progressValue}% completed`;
  });
});