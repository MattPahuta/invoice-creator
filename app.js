const invoiceForm = document.querySelector('.invoice-form');
const taskList = document.querySelector('.task-list');
const serviceBtns = document.querySelectorAll('.service-btn');
const removeBtns = document.querySelectorAll('.remove-btn');
// array to hold the state
let selectedTasks = [];

// const wash = document.getElementById('wash');
// const mow = document.getElementById('mow');
// const weed = document.getElementById('weed');

const services = document.querySelector('.services-container');


function displayTask() {
  const html = selectedTasks.map(service => {
    return `<li class="task-item grid">
              <span class="task-item-name">
              ${service.name}
              <button  class="remove-btn">Remove</button>
              </span>
              <span class="task-item-cost">$${service.cost}</span>
            </li>
      `
  }).join('');

  taskList.innerHTML = html;
  const removeBtns = document.querySelectorAll('.remove-btn');
  addRemoveBtnListener(removeBtns);
}

function addRemoveBtnListener(removeBtns) {
    removeBtns.forEach(btn => {
    btn.addEventListener('click', removeTask);
  })
}

function removeTask(e) {
  console.log('task removed!');
}

function calculateTotal() {

}


function addService(e) {
  console.log(e.target);
  // build the service object
  const service = {
    name: e.target.name,
    cost: e.target.value,
    id: e.target.id
  }
  // check for services already added
  for (let item of selectedTasks) {
    if (item.id === service.id) {
      alert(`You've already selected the ${service.name} service.`)
      return;
    }
  }
  // push selected service to selectedTasks array
  selectedTasks.push(service); // use this to calculate total
  displayTask(); // call displayTask to add to DOM
  console.log(selectedTasks);
}

// add event listener to service buttons
serviceBtns.forEach(btn => {
  btn.addEventListener('click', addService);
})
// removeBtns.forEach(btn => {
//   btn.addEventListener('click', removeTask);
// })

invoiceForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Invoice submitted!');
  
})

