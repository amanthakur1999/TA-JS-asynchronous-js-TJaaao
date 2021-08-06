let images = document.querySelector('div');
let input = document.querySelector('.search');

function fetch() {
  return new Promise((resolve, reject) => {});
}

function inputHandle() {
  if (event.keyCode === 13) {
    function fetch(url) {
      let xhr = new XMLHttpRequest();
      //let url = `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=8k0FlL49lpvKpFgZ01KoDbPpvkiF5zVQH1f1MVyABc0`;

      return new Promise((resolve, reject) => {
        images.innerHTML = '';
        xhr.open('GET', url);

        xhr.onload = function () {
          // let dataImg = JSON.parse(xhr.response);

          setTimeout(() => {
            resolve(JSON.parse(xhr.response));
            console.log('Successfully data fetch');
          }, 3000);
        };

        xhr.onerror = function () {
          setTimeout(() => {
            reject('something is wrong');
          }, 3000);
        };
        xhr.send();
        input.value = '';
      });
    }

    fetch(
      `https://api.unsplash.com/search/photos/?query=${event.target.value}&client_id=8k0FlL49lpvKpFgZ01KoDbPpvkiF5zVQH1f1MVyABc0`
    )
      .then((dataImg) => {
        for (let i = 0; i < dataImg.results.length; i++) {
          images.innerHTML += `<img src='${dataImg.results[i].urls.small}'/>`;
        }
      })
      .catch((error) => {
        error('check your data connection');
      });
  }
}

input.addEventListener('keyup', inputHandle);
