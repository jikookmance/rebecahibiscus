document
  .querySelector(".navbar-brand")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var dropdown = document.querySelector(".dropdown .dropdown-content");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector("video");
  if (video) {
    video.play().catch(function (error) {
      console.log("Reprodução automática falhou:", error);
    });
  }
});

window.onclick = function (event) {
  if (!event.target.matches(".navbar-brand")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (jimin) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (jungkook) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (solar) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (taehyung) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (jin) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (yoongi) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (namjoon) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (hoseok) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (wheein) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (hwasa) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  } else if (moonbyul) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
}

function autora(event) {
  event.preventDefault();

  const autora = document.getElementById("autora");
  const conteudo = document.getElementById("conteudo");
  const personagens = document.getElementById("personagens");

  if (autora) {
    autora.style.display = "block";
    conteudo.style.display = "none";
    personagens.innerText = "Voltar";
    document.getElementById("personagens").style.display = "inline";
  }
}

function voltar() {
  const autora = document.getElementById("autora");
  const conteudo = document.getElementById("conteudo");
  const personagens = document.getElementById("personagens");
  autora.style.display = "none";
  conteudo.style.display = "block";
  personagens.innerText = "Personagens";
  document.getElementById("voltar").style.display = "none";
}

function copyText() {
  var textToCopy = document.getElementById("text-to-copy").innerText;

  var tempInput = document.createElement("input");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempInput);

  var icon = document.getElementById("copy-icon");
  icon.classList.remove("bi-copy");
  icon.classList.add("bi-check2-square");

  setTimeout(function () {
    icon.classList.remove("bi-check2-square");
    icon.classList.add("bi-copy");
  }, 500);
}
