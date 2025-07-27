function switchTabSlide(tab) {
  const slider = document.getElementById("formSlider");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  if (tab === "signup") {
    slider.style.transform = "translateX(-400px)";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  } else {
    slider.style.transform = "translateX(0px)";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  }
}


