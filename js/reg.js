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
  regBtn.type = "submit";
  formReg.append(regBtn);

  formReg.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = regName.value;
    const password = regPassword.value;
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    formReg.remove();
  });
}

export { reg };
