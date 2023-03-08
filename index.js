// Array para armazenar compromissos
let appointments = [];

// Obter o formulário de adição de compromisso
let addAppointmentForm = document.getElementById("add-appointment-form");

// Adicionar um ouvinte de eventos para lidar com o envio do formulário
addAppointmentForm.addEventListener("submit", addAppointment);

// Função para lidar com o envio do formulário de adição de compromisso
function addAppointment(event) {
  event.preventDefault();

  // Obter informações do formulário
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let description = document.getElementById("description").value;

  // Adicionar compromisso ao array
  appointments.push({ title, date, time, description });

  // Limpar o formulário
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("description").value = "";

  // Atualizar a lista de compromissos
  displayAppointments();
}

// Função para exibir a lista de compromissos
function displayAppointments() {
  let appointmentsList = document.getElementById("appointment-list");
  appointmentsList.innerHTML = "";

  appointments.forEach((appointment, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <strong>${appointment.title}</strong><br>
      <em>${appointment.date} às ${appointment.time}</em><br>
      ${appointment.description}
    `;

    let editButton = document.createElement("button");
    editButton.innerText = "Editar";
    editButton.onclick = () => editAppointment(index);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Excluir";
    deleteButton.onclick = () => deleteAppointment(index);

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    appointmentsList.appendChild(li);
  });
}

// Função para editar um compromisso existente
function editAppointment(index) {
  let appointment = appointments[index];

  // Obter informações do compromisso existente
  let title = prompt("Título:", appointment.title);
  let date = prompt("Data:", appointment.date);
  let time = prompt("Hora:", appointment.time);
  let description = prompt("Descrição:", appointment.description);

  // Atualizar o compromisso
  appointments[index] = { title, date, time, description };

  // Atualizar a lista de compromissos
  displayAppointments();
}

// Função para excluir um compromisso existente
function deleteAppointment(index) {
  // Remover o compromisso do array
  appointments.splice(index, 1);

  // Atualizar a lista de compromissos
  displayAppointments();
}

// Exibir a lista de compromissos inicial
displayAppointments();

