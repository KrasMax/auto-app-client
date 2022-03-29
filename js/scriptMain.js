let dateNow = new Date();
let year = dateNow.getFullYear();
let month = dateNow.getMonth() + 1;
let date = dateNow.getDate();
let hours = dateNow.getHours();
let min = dateNow.getMinutes();

let dateWrite = date + "." + month + "." + year + ".   " + hours + "." + min;

let mainContent = document.querySelector('#main-content');

let dataUser = JSON.parse(localStorage.getItem('curentUser'));

let mileageHistory = dataUser.mileageHistory.sort((a, b) => a - b);

let logo = document.querySelector('#logo');
logo.firstElementChild.src = '' + dataUser.logoCar + '';

let nameUser = document.querySelector('#user-name');
nameUser.firstElementChild.innerHTML = dataUser.login;

let curentWithout = document.querySelector('#curent-without');
curentWithout.lastElementChild.textContent = `${mileageHistory[mileageHistory.length - 1]} километров`;

let ratesUSD = Number(document.querySelector('.block_purchase_USD').textContent);
let priceEvent = 0;
dataUser.event.forEach(e => {
    priceEvent += e.price;
});

const sumPriceEvent = (Number(dataUser.priceAuto) * ratesUSD) + priceEvent;

let priceAuto = document.querySelector("#price-auto");
priceAuto.lastElementChild.textContent = `${sumPriceEvent} белорусских рублей`;

let userMileage = document.querySelector('#user-mileage')
userMileage.lastElementChild.textContent = `${(mileageHistory[mileageHistory.length - 1] - dataUser.startMileage)} километров`;

let averageFuelConsumption = document.querySelector('#average-fuel-consumption');
averageFuelConsumption.lastElementChild.textContent = `${((mileageHistory[mileageHistory.length - 1] - dataUser.startMileage) * dataUser.fuelMiddle) / 100} литров топлива.`;

const runForChangOil = () => {
    let lastСhange = dataUser.changeOil.sort((a, b) => a - b);
    let boxOil = document.querySelector('#mileage-to-maintenance');
    console.log(lastСhange.length);
    if (lastСhange.length !== 0) {
        boxOil.innerHTML = `<span>После замены масла вы проехали</span>
        <span>${Math.max(...mileageHistory) - Math.max(...lastСhange)} км</span>`
    }
}

runForChangOil();

const exit = () => {

    let currenrDataUser = JSON.parse(localStorage.getItem('curentUser'));
    const URL_DATA_USER = 'https://history-auto.herokuapp.com/api/dataUser';


    const settingFetch = {
        method: 'PUT',
        body: JSON.stringify(currenrDataUser),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }

    fetch(`${URL_DATA_USER}/${dataUser.id}`, settingFetch).then(() => {
        localStorage.removeItem('curentUser');
        window.location.href = "index.html"
    });

}

let logOut = document.querySelector('#log-out');
logOut.addEventListener('click', exit)
