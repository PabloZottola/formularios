let storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
let aprovUser = JSON.parse(localStorage.getItem("aprobados")) || [];
let blockUser = JSON.parse(localStorage.getItem("bloqueados")) || [];

function userTable() {
  const tableUser = document.getElementById("userTable");
  tableUser.innerHTML = "";
  storedUsers.map((user) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="table-dark">${user.nameUser}</td>
        <td class="table-dark">${user.email}</td>
        <td class="table-dark">${user.phone}</td>
        <td>
          <button class="icons" onclick="approvedUsers('${user.email}')">
            <img src="../img/check.png" alt="check-icon" />
          </button>
        </td>
        <td>
          <button class="icons" onclick="blockedUsers('${user.email}')">
            <img src="../img/trash.png" alt="check-icon" />
          </button>
        </td>
    `;
    console.log(tr);
    tableUser.appendChild(tr);
  });
}
function blockTable() {
  const blockTable = document.getElementById("blockTable");
  blockTable.innerHTML = "";
  blockUser.map((user) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="table-dark">${user.nameUser}</td>
        <td class="table-dark">${user.email}</td>
        <td class="table-dark">${user.phone}</td>
        <td>
          <button class="icons" onclick="approvedUsers('${user.email}')">
            <img src="../img/check.png" alt="check-icon" />
          </button>
        </td>
        <td></td>
    `;
    blockTable.appendChild(tr);
  });
}

function approvedTable() {
  const approvedTable = document.getElementById("approvedTable");
  approvedTable.innerHTML = "";
  aprovUser.map((user) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="table-dark">${user.nameUser}</td>
        <td class="table-dark">${user.email}</td>
        <td class="table-dark">${user.phone}</td>
        <td></td>
        <td>
          <button class="icons" onclick="blockedUsers('${user.email}')">
            <img src="../img/trash.png" alt="check-icon" />
          </button>
        </td>
    `;
    approvedTable.appendChild(tr);
  });
}

const blockedUsers = (email) => {
  let bloqueado = {};
  if (storedUsers.filter((user) => user.email == email).length !== 0) {
    bloqueado = storedUsers.filter((user) => user.email == email);
    storedUsers = storedUsers.filter((user) => user.email != email);
    localStorage.setItem("usuarios", JSON.stringify(storedUsers));
  } else {
    bloqueado = aprovUser.filter((user) => user.email == email);
    aprovUser = aprovUser.filter((user) => user.email != email);
    localStorage.setItem("aprobados", JSON.stringify(aprovUser));
  }
  blockUser.push(bloqueado[0]);
  localStorage.setItem("bloqueados", JSON.stringify(blockUser));

  userTable();
  approvedTable();
  blockTable();
};

const approvedUsers = (email) => {
  let aprobado = {};

  if (storedUsers.filter((user) => user.email == email).length !== 0) {
    aprobado = storedUsers.filter((user) => user.email == email);
    storedUsers = storedUsers.filter((user) => user.email != email);
    localStorage.setItem("usuarios", JSON.stringify(storedUsers));
  } else {
    aprobado = blockUser.filter((user) => user.email == email);
    blockUser = blockUser.filter((user) => user.email != email);
    localStorage.setItem("bloqueados", JSON.stringify(blockUser));
  }
  aprovUser.push(aprobado[0]);
  localStorage.setItem("aprobados", JSON.stringify(aprovUser));

  userTable();
  approvedTable();
  blockTable();
};

function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "../pages/formularioRegistro.html";
}

window.onload = function () {
  userTable();
  approvedTable();
  blockTable();
  const isAdmin = localStorage.getItem("isAdmin");
  if (!isAdmin) {
    window.location.href = "../pages/formularioRegistro.html";
  }
};
