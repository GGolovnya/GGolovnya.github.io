/////////////////////////// Анимация 3D карточек /////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card, .card2, .card3");

  cards.forEach((card) => {
    const foreground = card.querySelector(".foreground-image");
    const background = card.querySelector(".background-image");
    const secondImage = card.querySelector(".second-image");
    const ramka = card.querySelector(".ramka");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;

      foreground.style.transform = `translate(${-angleY * 0.75}px, ${
        -angleX * 0.75
      }px)`;
      background.style.transform = `translate(${angleY * 0.25}px, ${
        angleX * 0.25
      }px)`;
      secondImage.style.transform = `translate(${angleY * 0.75}px, ${
        angleX * 0.75
      }px)`;
      ramka.style.transform = `translate(${-angleY * 0.25}px, ${
        -angleX * 0.25
      }px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      foreground.style.transform = "translate(0, 0)";
      background.style.transform = "translate(0, 0)";
      secondImage.style.transform = "translate(0, 0)";
      ramka.style.transform = "translate(0, 0)";
    });
  });
});

/////////////////////////// Анимация навыков /////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const skillsContainer = document.querySelector(".skills-container");
  const skills = document.querySelectorAll(".skill");

  skillsContainer.addEventListener("mouseenter", () => {
    skills.forEach((skill, index) => {
      const angle = (index / skills.length) * 2 * Math.PI;
      const x = Math.cos(angle) * 100 + 100;
      const y = Math.sin(angle) * 100 + 100;
      skill.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  skillsContainer.addEventListener("mouseleave", () => {
    skills.forEach((skill) => {
      skill.style.transform = "translate(0, 0)";
    });
  });
});

////////// МАТРИЦА ////////

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const symbols = '{}[]()&lt;&gt;+-*/=&amp;&amp;||!?:;,.#$%^&amp;_~`|';
  const fontSize = 16;
  const columns = canvas.width / fontSize;

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 0, 0, 100)';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 60);

  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollText = document.querySelector('.scroll-text');
  
  scrollText.addEventListener('wheel', function(e) {
      e.preventDefault();
      
      const scrollSpeed = 10; // Скорость прокрутки
      
      if (e.deltaY > 0) {
          // Прокрутка вниз
          this.scrollTop += scrollSpeed;
      } else {
          // Прокрутка вверх
          this.scrollTop -= scrollSpeed;
      }
  });
});