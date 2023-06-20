const sec3 = document.querySelector('#sec3');
const sec3Ul = sec3.querySelector('ul');
let sec3HTML = '';

fetch('./js/sec3.json')
.then(res => res.json())
.then(data => {
  console.log(data);
  data.forEach(item => {
    const {title,p} = item;
    sec3HTML += `
    <li>
      <h3>${title}</h3>
      <p>${p}</p>
    </li>
    
    `;
  })

  sec3Ul.innerHTML = sec3HTML;
})
.catch(err => {
  console.log('data not found')
})