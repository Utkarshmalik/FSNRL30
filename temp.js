

const newDiv = document.createElement('div');
const newPara = document.createElement('p');
newPara.innerHTML =  'Hi , This is some random text';

newDiv.appendChild(newPara);
document.body.prepend(newDiv);