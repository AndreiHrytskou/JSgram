// Вход и регистрация
function form() {
  const form = document.createElement("form");
  form.className = "form";
  document.body.append(form);

  //user name
  const userNameLabel = document.createElement("label");
  userNameLabel.setAttribute("for", "name");
  userNameLabel.className = "userNameLabel";

  userNameLabel.append("Введите имя пользователя");
  form.append(userNameLabel);

  const userName = document.createElement("input");
  userName.className = "userName";
  userName.required = true;
  userName.placeholder = "Имя пользователя";
  userName.id = "name";
  form.append(userName);

  // password
  const userPasswordLabel = document.createElement("label");
  const userPassword = document.createElement("input");
  userPasswordLabel.setAttribute("for", "password");
  userPasswordLabel.className = "userPasswordLabel";
  userPasswordLabel.append("Введите пароль");
  userPassword.type = "password";
  userPassword.id = "password";
  userPassword.required = true;
  userPassword.placeholder = "Пароль";
  userPassword.className = "userPassword";
  form.append(userPasswordLabel);
  form.append(userPassword);

  //button войти
  const btn = document.createElement("button");
  btn.className = "btn-form";
  btn.append("Войти");
  btn.type = "button";
  form.append(btn);
  btn.addEventListener("click", () => {
    function signIn() {
      let user = userName.value;
      let pwd = userPassword.value;
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let exist =
        users.length &&
        JSON.parse(localStorage.getItem("users")).some(
          (el) =>
            el.user.toLowerCase() == user.toLowerCase() &&
            el.pwd.toLowerCase() == pwd.toLowerCase()
        );

      if (!exist) {
        const mod = document.createElement("div");
        const modText = document.createElement("p");
        const closeMod = document.createElement("span");
        mod.className = "mod";
        modText.append(
          "Проверьте правильность написания Имя пользователя или пароль. Возможно вы не зарегистрированы"
        );
        mod.append(modText);
        modText.append(closeMod);
        document.body.append(mod);
        closeMod.className = "closeMod";
        closeMod.append("x");
        closeMod.addEventListener("click", () => {
          mod.remove();
        });
      } else {
        home();
        form.remove();
      }
    }
    signIn();
  });

  //регистрация
  const reg = document.createElement("button");
  reg.className = "reg-form";
  reg.append("Зарегистрироваться");
  reg.type = "button";
  form.append(reg);
  reg.addEventListener("click", async () => {
    let reg = await import("./reg.js");
    reg.reg();
  });
}
export { form };

import { home } from "./home.js";
