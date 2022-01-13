function home() {
  const links = document.querySelector("ul");
  links.style.display = "flex";
  const main = document.createElement("div");
  document.body.append(main);
  main.className = "main";
}

export { home };
