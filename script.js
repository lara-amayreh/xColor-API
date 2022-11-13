window.onload = function () {
  generatedivs();
  buttonsColor();
};
let btns = document.querySelectorAll(".colorptn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    loadcolors(btn.innerHTML);
  });
});
function buttonsColor() {
  let btns = document.querySelectorAll(".colorptn");
  btns.forEach(function (btn) {
    btn.style.backgroundColor = btn.innerHTML;
  });
}
function loadcolors(valu) {
  console.log(valu);
  const xhr = new XMLHttpRequest();
  const apiUrl =
    "https://x-colors.herokuapp.com/api/random/" + valu + "?number=10";
  console.log(apiUrl);
  xhr.open("GET", apiUrl, true);
  xhr.onload = () => {
    let colors = JSON.parse(xhr.responseText);
    console.log(colors);
    generatecolors(colors);
  };
  xhr.send();
}

let colorpic = document.querySelector(".colorpic");
colorpic.addEventListener("keypress", function (event) {
  let divc = document.querySelector(".colorp");
  if (event.key == "Enter" && divc.valu !== "") loadcolors(colorpic.value);

  console.log(colorpic.value);
});

function generatedivs() {
  let divc = document.querySelector(".colorp");
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    const div = document.createElement("div");
    div.classList.add("colordiv");
    const conv = document.createElement("div");
    conv.classList.add("convert");

    const hex = document.createElement("div");
    const hsl = document.createElement("div");
    const rgb = document.createElement("div");

    conv.append(hex, hsl, rgb);
    card.append(div, conv);
    divc.append(card);
  }
}
function generatecolors(colors) {
  const divc = document.querySelectorAll(".colordiv");
  let hex = document.querySelectorAll(".convert :first-child");
  let hsl = document.querySelectorAll(".convert :nth-child(2)");
  let rgb = document.querySelectorAll(".convert :last-child");
  for (let i = 0; i < 10; i++) {
    divc[i].style.backgroundColor = colors[i].hex;
    hex[i].innerHTML = colors[i].hex;
    hsl[i].innerHTML = colors[i].hsl;
    rgb[i].innerHTML = colors[i].rgb;
    console.log(hex[i].innerHTML);
  }
}
