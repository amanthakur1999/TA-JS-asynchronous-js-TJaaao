let container = document.querySelector('.container');
let ul = document.querySelector('ul');
let characterBox = document.querySelector('.box');
let allbox = document.querySelector('.boxs');
let url = `https://www.anapioficeandfire.com/api/books`;
fetch(url)
  .then((res) => res.json())
  .then((books) => {
    console.log(books);
    createUI(books);
  })
  .catch((error) => error);

function createUI(data) {
  data.forEach((elm) => {
    let list = document.createElement('li');
    list.classList.add('list');

    let name = document.createElement('h2');
    name.classList.add('name');
    name.innerText = elm.name;

    let aurthor = document.createElement('h3');
    aurthor.classList.add('aurthor');
    aurthor.innerText = elm.aurthors;

    let noOfPage = document.createElement('p');
    noOfPage.classList.aurthor('noOfPage');
    noOfPage.innerHTML = `Number of Pages:${elm.numberOfPages}`;

    let publisher = document.createElement('p');
    publisher.classList.add('publisher');
    publisher.innerText = `Publisher:${elm.publisher}`;

    let released = document.createElement('p');
    released.classList.add('released');
    released.innerHTML = `Releas date:${elm.released}`;

    let showCharectors = document.createElement('button');
    showCharectors.classList.add('btn');
    showCharectors.innerHTML = 'Show Charectors';
    let url = 'https://www.anapioficeandfire.com/api/characters';
    showCharectors.addEventListener('click', fetchingData);
    function fetchingData() {
      fetch(url)
        .then((res) => res.json())
        .then((char) => {
          console.log(char);
          displayUI(char);
        });
    }

    list.append(name, aurthor, publisher, released, noOfPage, showCharectors);
    ul.append(list);
    // container.append(ul);
  });
}

function displayUI(charData) {
  charData.forEach((element) => {
    let charDiv = document.createElement('li');
    charDiv.classList.add(charDiv);

    let cross = document.createElement('p');
    cross.innerText = '❌';
    cross.classList.add('cross');
    cross.style.cursor = 'pointer';
    cross.addEventListener('click', () => {
      characterBox.innerHTML = '';
    });

    let CharName = document.createElement('p');
    CharName.classList.add('charName');
    CharName.innerHTML = element.name;

    let charGender = document.createElement('p');
    charGender.classList.add('charGender');
    charGender.innerHTML = element.gender;

    let charAlias = document.createElement('p');
    charAlias.classList.add('charAlias');
    charAlias.innerHTML = element.aliases;
    console.log(aliases);

    let charSeries = document.createElement('p');
    charSeries.classList.add('charSeries');
    charSeries.innerHTML = element.tvSeries;
    characterBox.append(charDiv);
    characterBox.append(cross);

    charDiv.append(CharName, charGender, charAlias, charSeries);
  });
}
