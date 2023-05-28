body = document.querySelector("body");
foto = document.querySelector(".apresentacao-foto");

document.querySelector("#theme-checkbox").addEventListener("change", () => {
  if (body.className === "dark-theme") {
    body.className = "light-theme";
    foto.src = "./assets/foto-light.png";
  } else {
    body.className = "dark-theme";
    foto.src = "./assets/foto-dark.png";
  }
});

apresIntro = document.querySelector(".apresentacao-conteudo-intro");
apresTitulo = document.querySelector(".apresentacao-conteudo-titulo");
apresTexto = document.querySelector(".apresentacao-conteudo-texto");
cvTexto = document.querySelector(".cv-texto");

document.querySelector("#lang-checkbox").addEventListener("change", () => {
  if (apresIntro.innerText === "Olá, meu nome é") {
    apresTitulo.classList.toggle("eng");
    apresIntro.innerText = "Hi, my name is";
    apresTitulo.innerText = "I am a Jr. Developer";
    apresTexto.innerText =
      "I'm looking for an opportunity to start my career as a programmer in a learning-friendly environment to develop my skills.";
    cvTexto.innerText = "Resumé";
  } else {
    apresIntro.innerText = "Olá, meu nome é";
    apresTitulo.innerText = "Sou um Dev. Jr";
    apresTexto.innerText =
      "Estou em busca de uma oportunidade para iniciar minha carreira como programador em um ambiente propício para meu aprendizado e desenvolvimento.";
    cvTexto.innerText = "Currículo";
  }
});
