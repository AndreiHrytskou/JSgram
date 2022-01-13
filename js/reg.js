function reg() {
  const formReg = document.createElement("form");
  formReg.className = "formReg";
  formReg.style.display = "flex";
  document.body.append(formReg);

  //user name
  const regNameLabel = document.createElement("label");
  regNameLabel.setAttribute("for", "nameReg");
  regNameLabel.className = "regNameLabel";
  regNameLabel.append("Введите имя пользователя");
  formReg.append(regNameLabel);

  const regName = document.createElement("input");
  regName.className = "regName";
  regName.required = true;
  regName.placeholder = "Имя пользователя";
  regName.id = "nameReg";
  formReg.append(regName);

  // password
  const regPasswordLabel = document.createElement("label");
  regPasswordLabel.setAttribute("for", "passwordReg");
  regPasswordLabel.append("Введите пароль");
  regPasswordLabel.className = "regPasswordLabel";
  formReg.append(regPasswordLabel);

  const regPassword = document.createElement("input");
  regPassword.type = "password";
  regPassword.id = "passwordReg";
  regPassword.required = true;
  regPassword.placeholder = "Пароль";
  regPassword.className = "regPassword";
  formReg.append(regPassword);

  // reg
  const regBtn = document.createElement("button");
  regBtn.className = "regBtn";
  regBtn.append("Зарегистрироваться");
  regBtn.type = "button";
  formReg.append(regBtn);

  regBtn.addEventListener("click", () => {
    const signUp = () => {
      let user = regName.value.toLowerCase();
      let pwd = regPassword.value.toLowerCase();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      let exist =
        users.length &&
        JSON.parse(localStorage.getItem("users")).some(
          (data) =>
            data.user.toLowerCase() == user.toLowerCase() &&
            data.pwd.toLowerCase() == pwd.toLowerCase()
        );

      if (!exist) {
        users.push({ user, pwd });
        localStorage.setItem("users", JSON.stringify(users));

        const mod = document.createElement("div");
        const modText = document.createElement("p");
        const closeMod = document.createElement("span");
        mod.className = "mod";
        modText.append("Вы успешно создали аккаунт");
        mod.append(modText);
        modText.append(closeMod);
        document.body.append(mod);
        closeMod.className = "closeMod";
        closeMod.append("x");
        closeMod.addEventListener("click", () => {
          mod.remove();
        });
      } else {
        const mod = document.createElement("div");
        const modText = document.createElement("p");
        //const closeMod = document.createElement("span");
        mod.className = "mod";
        document.body.append(mod);
        mod.append(modText);
        modText.append("Такой аккаунт уже есть");
        function modClose() {
          mod.remove();
        }
        setTimeout(modClose, 1000);
      }

      formReg.remove();
    };
    signUp();
  });
}

export { reg };
