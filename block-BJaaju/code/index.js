//8k0FlL49lpvKpFgZ01KoDbPpvkiF5zVQH1f1MVyABc0
//https://api.unsplash.com/search/photos
let images = document.querySelector('div');
let input = document.querySelector('.search');

function inputHandle() {
  if (event.keyCode === 13) {
    images.innerHTML = '';
    let xhr = new XMLHttpRequest();
    let url = `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=8k0FlL49lpvKpFgZ01KoDbPpvkiF5zVQH1f1MVyABc0`;
    xhr.open('GET', url);
    xhr.onload = function () {
      let dataImg = JSON.parse(xhr.response);
      for (let i = 0; i < dataImg.results.length; i++) {
        images.innerHTML += `<img src='${dataImg.results[i].urls.small}'/>`;
      }
    };
    xhr.send();
    input.value = '';
  }
}

input.addEventListener('keyup', inputHandle);
