
const musicAudio = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
const settingsContainer = document.getElementById("settingsContainer");
const settingsBtn = document.getElementById("settingsBtn");
const bgMusicCheckbox = document.getElementById("bgMusic");
const efekAudio = new Audio("efekTekan.mp3");

function efekTekan() {
  let sound = efekAudio;
  sound.currentTime = 0;
  sound.volume = 1;
  sound.play();
}

function playMusic() {
  if (musicAudio.paused) {
    musicAudio.play().catch((error) => {
      console.log("Autoplay dicegah, klik tombol musik untuk memulai.", error);
    });
    musicBtn.innerText = "";
  } else {
    musicAudio.pause();
    musicBtn.innerText = "";
  }
}

function toggleSettings() {
  efekTekan();
  settingsContainer.style.display = settingsContainer.style.display === "block" ? "none" : "block";
  document.getElementById("donation").innerHTML = "dukung kami dengan donasi.<br> Dana:<br> 0813-6170-5396";
  document.getElementById("space").innerHTML = "----";
  document.getElementById("new").innerHTML = "Pembaruan terbaru<br> 1.<br> 2.<br> 3.<br> 4.<br> 5.<br>";
  document.getElementById("channel").innerHTML = "Follow we channel in what'sapp";
}

function follow() {
  efekTekan();
  window.location.href = "intent://whatsapp.com/channel/0029VbAjPZz7T8bRRmhy2G0M#Intent;package=com.whatsapp;scheme=https;end";
  musicAudio.pause();

const checkbox = document.getElementById("bgMusic");
checkbox.checked = false;
}

function toggleMusic() {
  efekTekan();
  if (bgMusicCheckbox.checked) {
    musicAudio.play();
    musicBtn.innerText = "";
  } else {
    musicAudio.pause();
    musicBtn.innerText = "";
  }
}

function openLogin() {
  efekTekan();
      location.replace("difficult.html");
      musicAudio.pause();

const checkbox = document.getElementById("bgMusic");
checkbox.checked = false;
}

function exit() {
  efekTekan();
  location.replace("https:google.com");
}

function openWa() {
  efekTekan();
      window.location.href = "https://wa.me/6282162107307";
      musicAudio.pause();

const checkbox = document.getElementById("bgMusic");
checkbox.checked = false;
}

function shop() {
  location.replace("shop.html");
}
