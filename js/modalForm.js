function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalCloser = document.getElementById("modalCloser");

  modalCloser.addEventListener("click", function () {
    modalOverlay.remove();
  });
}
function modalRegistro() {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer">
          <span id="modalCloser" class="modalCloser">x</span>
          <div class="modalContent">
            <form id="registerForm" class="registerForm">
              <p id="formError"></p>
              <label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  maxlength="24"
                />
              </label>
              <label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  maxlength="30"
                />
              </label>
              <label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Numero de celular"
                  maxlength="11"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  maxlength="20"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar contraseña"
                  maxlength="20"
                />
              </label>
              <button id="submitForm" type="submit" onclick="validateRegister(event)">Registrarse</button>
            </form>
          </div>
        </div>    
      </div>`;
  }
}
function modalLogin() {
  if (document.getElementById("modalOverlay") === null) {
    modal.innerHTML = `
      <div id="modalOverlay" class="modalOverlay">
        <div id="modalContainer" class="modalContainer">
          <span id="modalCloser" class="modalCloser">x</span>
          <div class="modalContent">
            <form id="registerForm" class="registerForm">
              <p id="formError"></p>
              <label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  maxlength="30"
                />
              </label>
              <label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  maxlength="20"
                />
              </label>
              <button id="submitForm" type="submit" onclick="validateLogin(event)">Entrar</button>
            </form>
          </div>
        </div>    
      </div>`;
  }
}
buttonRegister.addEventListener("click", function () {
  modalRegistro();
  closeModal();
});
buttonLogin.addEventListener("click", function () {
  modalLogin();
  closeModal();
});
