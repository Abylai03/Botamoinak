"use strict";
const karasai = document.querySelector(".karasai");
const kamysai = document.querySelector(".kamysai");
const botamoinak = document.querySelector(".botamoinak");
const tower_1 = document.querySelector(".tower_1");
const tower_2 = document.querySelector(".tower_2");

const krs = document.querySelector(".krs");
const krm = document.querySelector(".krm");
const btm = document.querySelector(".btm");
const t_1 = document.querySelector(".t_1");
const t_2 = document.querySelector(".t_2");

const close_krs = document.querySelector(".close_krs");
const close_krm = document.querySelector(".close_krm");
const close_btm = document.querySelector(".close_btm");
const close_t_1 = document.querySelector(".close_t_1");
const close_t_2 = document.querySelector(".close_t_2");

close_krs.addEventListener("click", () => {
    krs.classList.add("hide");
});
close_krm.addEventListener("click", () => {
    krm.classList.add("hide");
});
close_btm.addEventListener("click", () => {
    btm.classList.add("hide");
});
close_t_1.addEventListener("click", () => {
    t_1.classList.add("hide");
});
close_t_2.addEventListener("click", () => {
    t_2.classList.add("hide");
});

karasai.addEventListener("click", () => {
  krs.classList.remove("hide");
});
kamysai.addEventListener("click", () => {
  krm.classList.remove("hide");
});
botamoinak.addEventListener("click", () => {
  btm.classList.remove("hide");
});
tower_1.addEventListener("click", () => {
  t_1.classList.remove("hide");
});
tower_2.addEventListener("click", () => {
  t_2.classList.remove("hide");
});
