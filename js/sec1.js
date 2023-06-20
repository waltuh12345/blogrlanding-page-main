const sec1 = document.querySelector('#sec1');
const sec1Elements = {
  ul: sec1.querySelector('.box1'),
};

let sec1HTML = '';

fetch('./js/sec1.json')
.then(res => res.json())
.then(data => {
  const {ul} = sec1Elements
  const title = data.title;
  const article = data.article; 

  article.forEach(obj => {
    const {title,p} = obj

    sec1HTML += `
    <li>
      <h3>${title}</h3>
      <p>${p}</p>
    </li>
    `
  })

  ul.innerHTML = sec1HTML;

  
})