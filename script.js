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
  if (tab === 'login') {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  } else {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    loginTab.classList.remove("active");
    signupTab.classList.add("active");
  }
}

// Optional: click outside to close
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};
