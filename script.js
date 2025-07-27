const modal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

function openAuthModal() {
  modal.classList.remove("hidden");
  switchTab('login');
}

function switchTab(tab) {
  const loginBox = document.getElementById("loginBox");
  const signupBox = document.getElementById("signupBox");

  if (tab === 'login') {
    loginBox.classList.remove("hidden");
    signupBox.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    loginBox.classList.add("hidden");
    signupBox.classList.remove("hidden");

    loginTab.classList.remove("active");
    signupTab.classList.add("active");
  }
}


window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};

