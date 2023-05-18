"use strict"

const gif = document.querySelector(".hero__video");

if (gif) {
  if (document.body.clientWidth >= 1024) {
    let template = `
    <img src="./img/decstop.gif" loading="lazy" width="300" height="300" alt="Gif">
    `;
    gif.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 601) {
    let template = `
    <img src="./img/mobile.gif" loading="lazy" width="300" height="300" alt="Gif">
    `;
    gif.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 992) {
    let template = `
    <img src="./img/tablet.gif" loading="lazy" width="300" height="300" alt="Gif">
    `;
    gif.insertAdjacentHTML("beforeend", template);
  }
}

window.addEventListener("load", windowLoad);

function windowLoad() {
  const preload = document.querySelector(".preload");

preload.classList.add("disabled");
};