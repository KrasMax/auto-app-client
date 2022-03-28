let modal = document.getElementById('myModal');
let btnAddChangeOil = document.querySelector('.change_oil');
let clos = document.querySelector('#clos');
let writeChangeOil = document.querySelector('#write-change-oil')


btnAddChangeOil.addEventListener('click', () => {
    modal.style.display = 'block';
})

clos.addEventListener('click', () => {
    modal.style.display = 'none';
})


window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

const changeOil = () => {
    let changeOil = Number(document.querySelector('#change-oil').value);
    if (changeOil != Number && changeOil != 0) {
        dataUser.changeOil.push(changeOil);
        localStorage.setItem('curentUser', JSON.stringify(dataUser));
        document.querySelector('#change-oil').value = '';
    }
}

writeChangeOil.addEventListener('click', () => {
    changeOil();
    modal.style.display = 'none';
    runForChangOil();
})