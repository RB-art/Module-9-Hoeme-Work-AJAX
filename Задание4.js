/*
Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.
При клике на кнопку происходит следующее:
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL  https://dummyimage.com/100x300/, где первое число — ширина картинки, второе — высота.
*/
const resultNode = document.querySelector('.j-result')
const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => {      
let numWidth = document.querySelector('.input1').value;
let numHeight = document.querySelector('.input2').value;
if(100 <= numWidth && numWidth <= 300 && 100 <= numHeight && numHeight <= 300){
    fetch(`https://dummyimage.com/${numWidth}x${numHeight}/`)
    .then((response) => {
        resultNode.innerHTML = `<img src="${response.url}" class= "card-image"/>`
    })   
    .catch(() => { console.log('error') });
}else{
     resultNode.innerHTML = `The number is not from 100 to 300!`
  }
})