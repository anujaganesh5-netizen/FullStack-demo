 
     const slider = document.querySelector(".slider");
      const dots = document.querySelectorAll(".dot");
      const prevBtn = document.querySelector(".arrow.left");
      const nextBtn = document.querySelector(".arrow.right");

      let index = 0;
      const slideWidth = 330; 

      function updateSlider() {
        slider.style.transform = `translateX(${-index * slideWidth}px)`;

        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
      }

      nextBtn.addEventListener("click", () => {
        index++;
        if (index >= dots.length) index = 0;
        updateSlider();
      });

      prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) index = dots.length - 1;
        updateSlider();
      });

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          index = i;
          updateSlider();
        });
      });

      setInterval(() => {
        index++;
        if (index >= dots.length) index = 0;
        updateSlider();
      }, 2500);
 


