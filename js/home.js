function home() {
  const links = document.querySelector("ul");
  links.style.display = "flex";
  const main = document.createElement("div");
  document.body.append(main);
  main.className = "main";
  const mainHeader = document.createElement("div");
  mainHeader.className = "mainHeader";
  main.append(mainHeader);

  //аватар
  const containerAvatar = document.createElement("div");
  containerAvatar.className = "containerAvatar";
  mainHeader.append(containerAvatar);

  const inputImage = document.createElement("input");
  inputImage.type = "file";
  inputImage.style.opacity = 0;
  inputImage.style.cursor = "pointer";
  inputImage.style.width = "300px";
  inputImage.style.marginLeft = "50px";
  inputImage.style.zIndex = "9";
  containerAvatar.append(inputImage);

  const img = document.createElement("img");
  img.className = "avatar";
  containerAvatar.append(img);

  const result = document.createElement("div");
  containerAvatar.append(result);

  inputImage.addEventListener("change", function () {
    const file = this.files[0];

    if (file.type.indexOf("image") < 0) {
      res.innerHTML = "invalid type";
      return;
    }

    const fReader = new FileReader();

    fReader.addEventListener("load", () => {
      img.src = fReader.result;
      localStorage.setItem("imgData", getBase64Image(img));
    });

    fReader.readAsDataURL(file);
  });

  function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  function fetchimage() {
    const dataImage = localStorage.getItem("imgData");
    img.src = "data:image/png;base64," + dataImage;
  }

  fetchimage();

  //Кнопка редактировать профиль и отображение профиля
  const containerProfile = document.createElement("div");
  containerProfile.className = "containerProfile";
  mainHeader.append(containerProfile);
  const editProfile = document.createElement("a");
  editProfile.className = "editProfile";
  editProfile.append("Редактировать профиль");
  containerProfile.append(editProfile);

  const userAcc = document.createElement("div");
  userAcc.className = "userAcc";
  containerProfile.append(userAcc);

  const nickName = document.createElement("h2");
  nickName.className = "nickName";
  nickName.append("");
  userAcc.append(nickName);

  const genderUserStatus = document.createElement("p");
  genderUserStatus.className = "genderUserStatus";
  genderUserStatus.append("");
  userAcc.append(genderUserStatus);

  const familyStatus = document.createElement("p");
  familyStatus.className = "familyStatus";
  familyStatus.append("");
  userAcc.append(familyStatus);

  editProfile.addEventListener("click", () => {
    const containerForm = document.createElement("div");
    containerForm.className = "containerForm";
    document.body.append(containerForm);
    const profile = document.createElement("form");
    profile.className = "profile";
    containerForm.append(profile);
    const titleUser = document.createElement("h2");
    titleUser.className = "titleUser";
    titleUser.append("Введите ваши данные");
    profile.append(titleUser);

    const nickSection = document.createElement("div");
    nickSection.className = "nickSection";
    const nickLabel = document.createElement("label");
    nickLabel.setAttribute("for", "nick");
    nickLabel.className = "nickLabel";
    nickLabel.append("Введите имя пользователя");
    nickSection.append(nickLabel);
    profile.append(nickSection);

    const nick = document.createElement("input");
    nick.className = "nick";
    nick.required = true;
    nick.placeholder = "Имя пользователя";
    nick.id = "nick";
    nickSection.append(nick);

    //gender
    const genderSection = document.createElement("div");
    genderSection.className = "genderSection";

    const genderSectionTitle = document.createElement("p");
    genderSectionTitle.append("Выберите ваш пол");
    genderSectionTitle.className = "genderSectionTitle";
    genderSection.append(genderSectionTitle);

    const genderContainer = document.createElement("div");
    genderContainer.className = "genderContainer";
    genderSection.append(genderContainer);

    const genderBtn = document.createElement("div");
    const genderBtn2 = document.createElement("div");
    const genderBtn3 = document.createElement("div");
    genderBtn.className = "genderBtn";
    genderBtn2.className = "genderBtn";
    genderBtn3.className = "genderBtn";
    genderContainer.append(genderBtn, genderBtn2, genderBtn3);

    const male = document.createElement("input");
    male.name = "gender";
    male.className = "male";
    male.type = "radio";
    male.id = "male";
    genderBtn.append(male);

    const maleLabel = document.createElement("label");
    maleLabel.setAttribute("for", "male");
    maleLabel.className = "maleLabel";
    maleLabel.append("Мужской");
    genderBtn.append(maleLabel);

    const femaleLabel = document.createElement("label");
    femaleLabel.setAttribute("for", "female");
    femaleLabel.className = "femaleLabel";
    femaleLabel.append("Женский");
    const female = document.createElement("input");
    female.name = "gender";
    female.className = "female";
    female.type = "radio";
    female.id = "female";
    genderBtn2.append(female);
    genderBtn2.append(femaleLabel);

    const noneGender = document.createElement("input");
    noneGender.name = "gender";
    noneGender.className = "noneGender";
    noneGender.type = "radio";
    noneGender.id = "noneGender";

    const noneLabel = document.createElement("label");
    noneLabel.setAttribute("for", "noneGender");
    noneLabel.className = "noneLabel";
    noneLabel.append("Не хочу указывать");
    genderBtn3.append(noneGender);
    genderBtn3.append(noneLabel);
    profile.append(genderSection);

    //family
    const familySection = document.createElement("div");
    familySection.className = "familySection";
    const familySectionTitle = document.createElement("p");
    familySectionTitle.append("Ваше семейное положение");
    familySectionTitle.className = "familySectionTitle";
    const family = document.createElement("select");

    const married = document.createElement("option");
    married.className = "married";
    married.value = "Женат/Замужем";
    married.append("Женат/Замужем");

    const unmarried = document.createElement("option");
    unmarried.className = "unmarried";
    unmarried.value = "Не женат/Не замужем";
    unmarried.append("Не женат/Не замужем");

    family.append(married);
    family.append(unmarried);
    familySection.append(familySectionTitle);
    familySection.append(family);
    profile.append(familySection);

    const closeProfile = document.createElement("span");
    closeProfile.className = "closeProfile";
    closeProfile.append("x");
    profile.append(closeProfile);
    closeProfile.addEventListener("click", () => {
      containerForm.remove();
    });

    const profileBtn = document.createElement("a");
    profileBtn.className = "profileBtn";
    profileBtn.append("Сохранить");
    profile.append(profileBtn);
    profileBtn.addEventListener("click", () => {
      nickName.append(nick.value);

      let genderUser = function () {
        if (male.checked) {
          genderUserStatus.append("Мужской");
        } else if (female.checked) {
          genderUserStatus.append("Женский");
        } else if (noneGender.checked) {
          genderUserStatus.append("Не указан");
        }
      };
      genderUser();
      familyStatus.append(family.value);
      containerForm.style.display = "none";
    });
  });
}

export { home };
