let dataUser = JSON.parse(localStorage.getItem('curentUser'));
const bodyTable = document.querySelector('#body-Table');

dataUser.event.forEach(elem => {
    bodyTable.innerHTML += `
    <tr>
    <td>${elem.nameEvent}</td>
    <td class="run">${elem.mileage}</td>
    <td>${elem.date}</td>
    <td class="cash">${elem.price}</td>
    </tr>
    `
});

const cash = document.querySelector('#sort-cash');
const run = document.querySelector('#sort-run');


cash.addEventListener('click', () => {
    if (cash.classList.contains('flag')) {
        let tBody = document.querySelector('#body-Table');
        let tr = tBody.querySelectorAll('tr');
        let arr = (Array.from(tr).sort((a, b) => +a.children[3].textContent - b.children[3].textContent));
        tBody.append(...arr);
        cash.classList.remove('flag')
    } else {
        let tBody = document.querySelector('#body-Table');
        let tr = tBody.querySelectorAll('tr');
        let arr = (Array.from(tr).sort((a, b) => +b.children[3].textContent - a.children[3].textContent));
        tBody.append(...arr);
        cash.classList.add('flag')
    }
});

run.addEventListener('click', () => {
    if (run.classList.contains('flag')) {
        let tBody = document.querySelector('#body-Table');
        let tr = tBody.querySelectorAll('tr');
        let arr = (Array.from(tr).sort((a, b) => +a.children[1].textContent - b.children[1].textContent));
        tBody.append(...arr);
        run.classList.remove('flag')
    } else {
        let tBody = document.querySelector('#body-Table');
        let tr = tBody.querySelectorAll('tr');
        let arr = (Array.from(tr).sort((a, b) => +b.children[1].textContent - a.children[1].textContent));
        tBody.append(...arr);
        run.classList.add('flag')
    }
});


