function changeProfile() {
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
}
