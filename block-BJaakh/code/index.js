let input = document.querySelector('.todos');
let items_left = document.querySelector('.items_left');
let clearBtn = document.querySelector('.clearBtn');
let ul = document.querySelector('.displays');
let array = [];

let url = `https://sleepy-falls-37563.herokuapp.com/api/todo`;

function main() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function handalkey(event) {
  if (event.keyCode === 13 && event.target.value) {
    let data = {
      todo: {
        title: event.target.value,
        isCompleted: true,
      },
    };
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(() => main());
    event.target.value = '';
  }
}
function handelClick(event) {
  let id = event.target.dataset.id;
  fetch(url + `/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => main());
  items_left.innerText = `${arrayTodos.length} items left`;
}
