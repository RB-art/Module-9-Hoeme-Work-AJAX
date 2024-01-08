/*
Задание 3
Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://jsonplaceholder.typicode.com/photos?_limit=5, где get-параметр limit — это введённое число.
*/
const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => {      
  let num = document.querySelector('.input').value;
  if(1 <= num && num <= 10){
  useRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${num}`, displayResult);
    }else{
    resultNode.innerHTML = `The number is not between 1 to 10 !`;
  }
})

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };  
  xhr.send();
};

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