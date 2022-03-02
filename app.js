const invoiceForm = document.querySelector('.invoice-form');
const taskList = document.querySelector('.task-list');
// array to hold the state
let selectedTasks = [];

const wash = document.getElementById('wash');
const mow = document.getElementById('mow');
const weed = document.getElementById('weed');

const services = document.querySelector('.services-container');

const availableServices = [
  {
    name: 'Wash Car',
    cost: 10,
    id: 1
  },
  {
    name: 'Mow Lawn',
    cost: 20,
    id: 2
  },
  {
    name: 'Pull Weeds',
    cost: 30,
    id: 3
  }
];


function addService(serviceName, serviceCost) {


  console.log(`${task} is added to selectedTasks.`);
}

services.addEventListener('click', function(e) {
  // const serviceName = e.target.name;
  // const serviceCost = e.target.value;
  const serviceId = parseInt(e.target.id);



  console.log(serviceId);
  for (let service of availableServices) {
    if (service.id === serviceId) {
      selectedTasks.push(service)
    }
  }

  console.log(selectedTasks);
})

invoiceForm.addEventListener('submit', function(e) {
  e.preventDefault();
})