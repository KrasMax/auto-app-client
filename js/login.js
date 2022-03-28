let dateNow = new Date();
let year = dateNow.getFullYear();
let month = dateNow.getMonth() + 1;
let date = dateNow.getDate();
let hours = dateNow.getHours();
let min = dateNow.getMinutes();

let dateWrite = date + "." + month + "." + year + "." + hours + "." + min;

let dataAllUser = '';


const URL_DATA_USER = 'https://history-auto.herokuapp.com/api/dataUser'

const getDataAllUser = () => {
    fetch(URL_DATA_USER).then(
        response => {
            return response.json();
        }
    )
        .then(
            data => {
                dataAllUser = data;
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
};
getDataAllUser();

//  Login Form
let login = document.querySelector('#login-user');
let logEror = document.querySelector('#log-eror');

let curentUserData = {};

// checLogin
const checLogin = () => {

    let subArr = [];
    for (let i = 0; i < dataAllUser.length; i++) {
        subArr.push(dataAllUser[i].login);
    };

    let loginCurent = "";
    for (let i = 0; i < subArr.length; i++) {
        if (subArr[i] == login.value) {
            loginCurent = subArr[i]
        }
    }

    for (let i = 0; i < subArr.length; i++) {
        if (login.value.trim() == "") {
            logEror.style.display = 'block'
            login.focus()
            return true;
        } else if (login.value.trim() !== loginCurent) {
            logEror.style.display = 'block'
            login.focus()
            return true;
        } else if (login.value.trim() == loginCurent) {
            logEror.style.display = 'none'
        } else return false
    }

    dataAllUser.forEach(elem => {
        if (elem.login == loginCurent) {
            curentUserData = elem;
        }
    });
}

login.addEventListener('input', checLogin);

let passUser = document.querySelector('#pass-user');
let passEror = document.querySelector('#pass-eror');

const checPassUser = () => {

    if (passUser.value !== curentUserData.password) {
        passEror.style.display = 'block'
        passUser.focus()
        return true
    } else if (passUser.value.trim() == "") {
        passEror.style.display = 'block'
        passUser.focus()
        return true
    } else if (passUser.value === curentUserData.password) {
        passEror.style.display = 'none'
    }
    return false
}
passUser.addEventListener('input', checPassUser);

let withoutTheCar = document.querySelector('#without-the-car');
let carMileageEror = document.querySelector('#car-mileage-eror');

const checCarMileageEror = () => {
    let arrMileage = curentUserData.mileageHistory;

    arrMileage.sort((a, b) => {
        return a - b;
    });

    if (Number(withoutTheCar.value) < arrMileage[arrMileage.length - 1]) {
        carMileageEror.style.display = 'block'
        withoutTheCar.focus()
        return true
    } else if (Number(withoutTheCar.value) >= arrMileage[arrMileage.length - 1]) {
        carMileageEror.style.display = 'none'
    }
    return false
}
withoutTheCar.addEventListener('input', checCarMileageEror);


let startProgram = document.querySelector('#in-form');

startProgram.addEventListener('submit', (event) => {

    if (checLogin()) {
        event.preventDefault();
        return false;
    }

    if (checPassUser()) {
        event.preventDefault();
        return false;
    }

    if (checCarMileageEror()) {
        event.preventDefault();
        return false;
    }

    let withoutTheCar = Number(document.querySelector('#without-the-car').value);

    curentUserData.mileageHistory.push(withoutTheCar);

    localStorage.setItem('curentUser', JSON.stringify(curentUserData));

    setTimeout(() => { window.location.replace("main.html") }, 1000);
    event.preventDefault();

});


