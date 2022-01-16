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
  const inputImage = document.createElement("input");
  inputImage.type = "file";
  inputImage.style.opacity = 0;
  inputImage.style.cursor = "pointer";
  inputImage.style.width = "300px";
  inputImage.style.marginLeft = "50px";
  inputImage.style.zIndex = "9";
  mainHeader.append(inputImage);

  const img = document.createElement("img");
  img.className = "avatar";
  mainHeader.append(img);

  const result = document.createElement("div");
  mainHeader.append(result);

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
}

export { home };
