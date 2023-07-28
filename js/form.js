function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validateEmail = regEx.test(email);
  return validateEmail;
}
function checkEmptySpacesRegister(
  nameUser,
  email,
  phone,
  password,
  confirmPassword
) {
  if (
    nameUser.trim() === "" ||
    email.trim() === "" ||
    phone.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    return true;
  } else {
    return false;
  }
}
function checkEmptySpacesLogin(email, password) {
  if (email.trim() === "" || password.trim() === "") {
    return true;
  } else {
    return false;
  }
}
function validateDataRegister(
  nameUser,
  email,
  phone,
  password,
  confirmPassword
) {
  let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  const emailExists = storedUsers.find((storedUsers) => {
    return storedUsers.email === email;
  });
  if (
    checkEmptySpacesRegister(nameUser, email, phone, password, confirmPassword)
  ) {
    formError.textContent = "Todos los campos son obligatorios.";
    return;
  } else if (nameUser.length <= 2) {
    formError.textContent = "Nombre invalido";
    return;
  } else if (!validateEmail(email)) {
    formError.textContent = "Formato de E-mail no valido.";
    return;
  } else if (emailExists !== undefined) {
    formError.textContent = "E-mail esta en uso.";
    return;
  } else if (phone.length < 10) {
    formError.textContent = "Numero de telefono invalido";
    return;
  } else if (password.length <= 5) {
    formError.textContent = "Contraseña invalida";
    return;
  } else if (password !== confirmPassword) {
    formError.textContent = "Las contraseña no coinciden";
    return;
  } else {
    console.log("Registro Completo");
    formError.textContent = "";
    registerForm.reset();
    return true;
  }
}
function validateDataLogin(email, password) {
  let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  const emailExists = storedUsers.find((storedUsers) => {
    return storedUsers.email === email;
  });
  const passwordExists = storedUsers.find((storedUsers) => {
    return storedUsers.password === password;
  });
  if (checkEmptySpacesLogin(email, password)) {
    formError.textContent = "Todos los campos son obligatorios.";
    return;
  } else if (emailExists == undefined) {
    formError.textContent = "E-mail no registrado.";
    return;
  } else if (passwordExists == undefined) {
    formError.textContent = "Contraseña incorrecta.";
    return;
  } else {
    console.log("Login Completo");
    formError.textContent = "";
    registerForm.reset();
    return;
  }
}
function storage(nameUser, email, phone, password) {
  let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
  class User {
    constructor(nameUser, email, phone, password) {
      (this.nameUser = nameUser),
        (this.email = email),
        (this.phone = phone),
        (this.password = password);
    }
  }
  let newUser = new User(nameUser, email, phone, password);
  storedUsers.push(newUser);

  localStorage.setItem("usuarios", JSON.stringify(storedUsers));
}
function validateRegister(event) {
  event.preventDefault();
  const nameUser = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (
    validateDataRegister(nameUser, email, phone, password, confirmPassword) ==
    true
  ) {
    storage(nameUser, email, phone, password);
  }
}
function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  validateDataLogin(email, password);
}
