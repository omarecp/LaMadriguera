const header = document.querySelector("[data-header]");
const form = document.querySelector(".signup-form");
const formMessage = document.querySelector("[data-form-message]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const email = String(data.get("email") || "").trim();

  if (!email) {
    formMessage.textContent = "Add an email and we will save your spot.";
    return;
  }

  form.reset();
  formMessage.textContent = "You are on the list. First sip news coming soon.";
});
