document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "knight" && password === "shadow") {
      alert("sucesso");
      window.location.href = "Desenvolvimento.html";
    } else {
      alert("usuário ou senha inválidos");
    }
  });
});

function aplicarResponsividade() {
  const container = document.querySelector('.container');
  const boxes = document.querySelectorAll('.box');

  if (window.innerWidth <= 768) {
    container.style.flexDirection = 'column';
    boxes.forEach(box => {
      box.style.flex = '1 1 100%';
      box.style.backgroundColor = '#e0f7fa';
    });
  } else {
    container.style.flexDirection = 'row';
    boxes.forEach(box => {
      box.style.flex = '1 1 30%';
      box.style.backgroundColor = '#fff';
    });
  }
}

// Aplica ao carregar e ao redimensionar
window.addEventListener('load', aplicarResponsividade);
window.addEventListener('resize', aplicarResponsividade);

