/*
Задание 1.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.
*/
const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector(`list`);
const output = {};
const arr = [];
const map = new Map();

xmlDOM.querySelectorAll(`student`).forEach(listNode => {
const firstNode = listNode.querySelector(`first`);
const secondNode = listNode.querySelector(`second`);
const ageNode = listNode.querySelector(`age`);
const profNode = listNode.querySelector(`prof`);
const nameNode = listNode.querySelector(`name`);
const langAttr = nameNode.getAttribute('lang')
  
  map.set(`name:`, firstNode.textContent + " " + secondNode.textContent);
  map.set(`age:`, ageNode.textContent);
  map.set(`prof:`, profNode.textContent);
  map.set(`lang:`, langAttr);
  
  let obj = Object.fromEntries(map)
  arr.push(obj)
})

console.log(`list` , arr)