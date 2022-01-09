// Фоновый элемент
const header = document.createElement("header");
document.body.append(header);
header.className = "header";

const logo = document.createElement("div");
header.append(logo);
logo.classList = "logo";
logo.append("JSgram");

function link() {
  const links = document.createElement("ul");
  header.append(links);
  const home = document.createElement("img");
  home.src = "./img/icon/home.png";
  home.className = "homeLink";
  home.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/";
  });

  const chat = document.createElement("img");
  chat.src = "./img/icon/chat.png";
  chat.className = "chatLink";
  chat.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/hrytskou_andrei/";
  });
  let list = [home, chat];
  for (let i = 0; i < list.length; i++) {
    let linkSite = document.createElement("li");
    linkSite.append(list[i]);
    links.append(linkSite);
  }
}
link();

import { form } from "./logIn.js";

form();
