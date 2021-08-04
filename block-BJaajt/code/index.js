let input = document.querySelector('.input');
let img = document.querySelector('img');
let name = document.querySelector('h2');
let companyName = document.querySelector('p');
let followers = document.querySelector('.followers');
let following = document.querySelector('.following');
let randomImg = document.querySelector('.img1');
let btn = document.querySelector('.btn');

function displayUI(data) {
  img.src = data.avatar_url;
  name.innerText = data.name;
  companyName.innerText = `@${data.login}`;
  followers.innerText = `Followers : ${data.followers}`;
  following.innerText = `Following :${data.following}`;
}

function handleChange(event) {
  //   console.log(event.keyCode);
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.send();
    event.target.value = '';
  }
}

input.addEventListener('keyup', handleChange);

function randomImgs(event) {
  let xhr1 = new XMLHttpRequest();
  xhr1.open(
    'GET',
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`
  );
  xhr1.onload = function () {
    let imgData = JSON.parse(xhr1.response);
    console.log(imgData[0].url);
    randomImg.src = imgData[0].url;
  };
  xhr1.send();
}

btn.addEventListener('click', randomImgs);
