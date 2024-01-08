/* Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:
Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://jsonplaceholder.typicode.com/photos?_page=0&_limit=5, где GET-параметр _page — это число из первого input, а GET-параметр _limit — это введённое число второго input.
*/

const resultNode = document.querySelector('.j-result')
const btnNode = document.querySelector('.btn');
const localStoragePhotos = localStorage.getItem(`photos`);

if(localStoragePhotos){
    displayResult(JSON.parse(localStoragePhotos));
}

btnNode.addEventListener('click', async () => {
let pageNumber = document.querySelector('.input1').value;
let limitNumber = document.querySelector('.input2').value;
if(betwen(pageNumber) === false){
    resultNode.innerHTML = `Page number is not betwen 1 to 10!`;    
}if(betwen(limitNumber) === false){
    resultNode.innerHTML = `Limit number is not betwen 1 to 10!`;
}if(betwen(pageNumber) === false && betwen(limitNumber) === false){
    resultNode.innerHTML = `Page and Limit number is not betwen 1 to 10!`;
}else{
    const requestResult = await useRequest(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${limitNumber}`);
    displayResult(requestResult);
    localStorage.setItem(`photos`, JSON.stringify(requestResult));  
  }
})

function betwen(x){
    return (1 <= x && x <= 10);
  }

function useRequest(url){
  return fetch(url)
    .then((response) => {
      console.log('response', response);
      return response.json();
    })
    .then((json) => { return json; })
    .catch(() => { console.log('error') });
}

function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.url}"
          class="card-image"
        />
      </div>
    `;
    cards = cards + cardBlock;
  });
  resultNode.innerHTML = cards;
}
