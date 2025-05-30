import store from "./authStore/store";
const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};

async function register(formData) {
  const config = {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    credentials: "include",
    body: JSON.stringify(formData),
  };
  const response = await fetch("/api/accounts/register/", config);
  return response.ok;
}

function isMod() {
  const currentStore = store.getState().store;
  return currentStore.isMod || currentStore.isAdmin || currentStore.isSuperuser;
}

function isAdmin() {
  const currentStore = store.getState().store;
  return currentStore.isAdmin || currentStore.isSuperuser;
}

function isSuperuser() {
  const currentStore = store.getState().store;
  return currentStore.isSuperuser;
}

function isAuthenticated() {
  const currentStore = store.getState().store;
  return currentStore.isAuthenticated;
}

export default getCookie;
export { register, isMod, isAdmin, isSuperuser, isAuthenticated };
