function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      const submitbtn = document.getElementsByClassName('btn btn-primary mt-3')
      submitbtn[0].addEventListener('click',createEmployee)
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.addEventListener('click',deleteEmployee)
    
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
}

// TODO
// add event listener to submit button

// TODO
// add event listener to delete button

// TODO
function createEmployee (){
  // get data from input field
  // send data to BE
  // call fetchEmployees
  const name=document.getElementById('name').value
  const id=document.getElementById('id').value
  if(name!=''&&id!='')
  {
fetch('http://localhost:3000/api/v1/employee', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    idadd: id,
    nameadd: name,
  }),
})
.then(response => response.json())
.then(fetchEmployees)
.catch((error) => {
  console.error('Error:', error);
});
  }

}

// TODO
function deleteEmployee (e){
  // get id
  id=e.target.parentNode.parentNode.firstChild.innerHTML
  fetch('http://localhost:3000/api/v1/employee/'+id,{method:'DELETE'})
   .then(response => response.json())
  .then(data => {
    window.location.reload();
    fetchEmployees();
  })
  // send id to BE
  // call fetchEmployees
}

fetchEmployees()
