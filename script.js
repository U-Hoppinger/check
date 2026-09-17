//===============================================================
//all LET/CONST
//===============================================================
const appContainer = document.querySelector("#app");
let btnMe = document.querySelector(".btnMe");
let btnAboutMe = document.querySelector(".btnAboutMe");
let btnContacts = document.querySelector(".btnContacts");
let btnSkills = document.querySelector(".btnSkills");
let btnSkillsV = document.querySelector(".btnSkillsV");
let menuPoint = document.querySelectorAll(".menu button");

//===============================================================
//Информация переключения
//===============================================================

btnMe.addEventListener("click", () => {
  appContainer.innerHTML = `
  <h4>Привет!</h4>
  <p></p>
  `;
});
btnAboutMe.addEventListener("click", () => {
  appContainer.innerHTML = `
  <h4>Обо мне!</h4>
  <p>Тест</p>
  `;
});
btnSkills.addEventListener("click", () => {
  appContainer.innerHTML = `
  <h4>Обо мне!</h4>
  <ul>
  <li>Коммуникабельность</li>
  <li>Работа в команде</li>
  <li>Внимание к деталям</li>
  <li>Стрессоустойчивость</li>
  </ul>
  `;
});
btnSkillsV.addEventListener("click", () => {
  appContainer.innerHTML = `
  <h4>Обо мне!</h4>
  <p>HTML</p>
  <p>CSS</p>
  <p>JS</p>
  <ul>
  <li>async/await/fetch/then/catch</li>
  <li>new Promise/Promise.all</li>
  <li>Event/preventDefault/stopPropagation</li>
  <li>target/currentTarget</li>
  </ul>
  
  `;
});
btnContacts.addEventListener("click", () => {
  appContainer.innerHTML = `
  <h4>Обо мне!</h4>
  <p>HTML</p>
  <p>CSS</p>
  `;
});
//===============================================================
//работа с активной кнопкой
//===============================================================

menuPoint.forEach((button) => {
  button.addEventListener("click", (event) => {
    menuPoint.forEach((btn) => btn.classList.remove("active"));
    event.currentTarget.classList.add("active");
  });
});
