body = document.querySelector("body");
botaoTema = document.querySelector(".theme-button");

foto = document.querySelector(".apresentacao-foto");
linkedin = document.querySelector(".linkedin");
github = document.querySelector(".github");
cv = document.querySelector(".cv");

function trocaTema() {
  if (body.className === "dark-theme") {
    body.className = "light-theme";
    botaoTema.src = "./assets/lua.png";
    foto.src = "./assets/foto-light.png";
    linkedin.src = "./assets/linkedinicon-light.png";
    github.src = "./assets/githubicon-light.png";
    cv.src = "./assets/cvicon-light.png";
  } else {
    body.className = "dark-theme";
    botaoTema.src = "./assets/sol.png";
    foto.src = "./assets/foto-dark.png";
    linkedin.src = "./assets/linkedinicon-dark.png";
    github.src = "./assets/githubicon-dark.png";
    cv.src = "./assets/cvicon-dark.png";
  }
}

botaoTema.addEventListener("click", trocaTema);
