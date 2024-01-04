const resultNode = document.querySelector('.j-result')
const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', async () => {
let pageNumber = document.querySelector('.input1').value;
let limitNumber = document.querySelector('.input2').value;
if(betwen(pageNumber) === false){
    resultNode.innerHTML = `Page number is not betwen 1 to 10!`    
}if(betwen(limitNumber) === false){
    resultNode.innerHTML = `Limit number is not betwen 1 to 10!`
}if(betwen(pageNumber) === false && betwen(limitNumber) === false){
    resultNode.innerHTML = `Page and Limit number is not betwen 1 to 10!`
}else{
    const requestResult = await useRequest(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${limitNumber}`);
    displayResult(requestResult);

   localStorage.setItem(`photos`, JSON.stringify(displayResult(requestResult)))

}
})

document.addEventListener(document.location.reload, () => {
  localStorage.getItem(`photos`, JSON.parse)
});


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
