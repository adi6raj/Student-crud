const API_URL = 'http://localhost:5000/api/students';

document.addEventListener('DOMContentLoaded', loadStudents);
document.getElementById('studentForm').addEventListener('submit', createStudent);

async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();
  
  const tbody = document.getElementById('studentTableBody');
  tbody.innerHTML = '';

  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.rollNo}</td>
      <td>${student.course}</td>
      <td>${student.batch}</td>
      <td class="actions">
        <button class="edit" onclick="editStudent('${student._id}', '${student.name}', '${student.rollNo}', '${student.course}', '${student.batch}')">Edit</button>
        <button class="delete" onclick="deleteStudent('${student._id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function createStudent(e) {
  e.preventDefault();

  const student = {
    name: document.getElementById('name').value,
    rollNo: document.getElementById('rollNo').value,
    course: document.getElementById('course').value,
    batch: document.getElementById('batch').value
  };

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });

  e.target.reset();
  loadStudents();
}

async function deleteStudent(id) {
  if (confirm('Are you sure you want to delete this student?')) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadStudents();
  }
}

function editStudent(id, name, rollNo, course, batch) {
  document.getElementById('name').value = name;
  document.getElementById('rollNo').value = rollNo;
  document.getElementById('course').value = course;
  document.getElementById('batch').value = batch;

  const form = document.getElementById('studentForm');
  form.removeEventListener('submit', createStudent);

  form.addEventListener('submit', function updateStudent(e) {
    e.preventDefault();
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        rollNo: document.getElementById('rollNo').value,
        course: document.getElementById('course').value,
        batch: document.getElementById('batch').value
      })
    }).then(() => {
      form.reset();
      loadStudents();
      form.removeEventListener('submit', updateStudent);
      form.addEventListener('submit', createStudent);
    });
  });
}
