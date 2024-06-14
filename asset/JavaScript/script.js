let nama = prompt('Siapa nama anda?')
alert('Hai, selamat datang, saya senang anda mengunjungi website ini, ' + nama)
alert('Website ini dibuat untuk tampil Smartphone')

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
  nav.classList.toggle('slide');
});