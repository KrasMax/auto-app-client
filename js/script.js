const allUsers = [];
const userInfo = {};
let btnIn = document.querySelector('#btn-in');
let btnReg = document.querySelector('#btn-reg');
let preview = document.querySelector('.preview');
let form = document.querySelector('#reg-form');

let modalReg = document.querySelector('#modal2');

let allLoginUsers = [];

const URL_DATA_USER = 'https://history-auto.herokuapp.com/api/dataUser'

const getDataAllUser = () => {
  fetch(URL_DATA_USER).then(
    response => {
      return response.json();
    }
  )
    .then(
      data => {
        data.forEach(element => {
          allLoginUsers.push(element.login);
        });
      }
    )
    .catch(
      err => {
        console.log(err);
      }
    )
};
getDataAllUser();

let userLogin = document.querySelector('#login-for-reg');
let messRegLogin = document.querySelector('#log-eror-reg');

let userPass = document.querySelector('#pass-for-reg');
let messErorePass = document.querySelector('#pass-eror-reg');

let passConfirm = document.querySelector('#pass-confirm');
let passConfEror = document.querySelector('#pass-eror-conf');

let logoCar = document.querySelector('#logo-car');
let messErorLogo = document.querySelector('#eror-logo-car');

let startMileage = document.querySelector('#start-mileage');
let erorStartRun = document.querySelector('#eror-start-run-car');

let curentRunCar = document.querySelector('#curent-run-car');
let erorCurentRun = document.querySelector('#eror-curent-run-car');

let averageMileage = document.querySelector('#average-mileage');
let erorAverageMileage = document.querySelector('#eror-average-mileage');

let fuelType = document.querySelector('#tepe-fuel');
let erorTepeFuel = document.querySelector('#eror-tepe-fuel');

let averageFuel = document.querySelector('#average-fuel');
let erorAverageFuel = document.querySelector('#eror-average-fuel');

let priceCar = document.querySelector('#price-car');
let erorPriceCar = document.querySelector('#eror-price-car');


btnIn.addEventListener('click', () => {
  window.location.href = "login.html"
});

btnReg.addEventListener('click', () => {
  preview.classList.add('preview_close');
  modalReg.classList.add('modal2_open');
});


const checLoignUser = () => {
  if (userLogin.value.trim() == "") {
    messRegLogin.style.display = 'block'
    userLogin.focus()
    return true
  } else if (allLoginUsers.includes(userLogin.value.trim())) {
    userLogin.nextElementSibling.style.display = 'block'
    userLogin.focus()
    return true
  } else {
    userLogin.nextElementSibling.style.display = 'none'
    messRegLogin.style.display = 'none'
  }
  return false
}
userLogin.addEventListener('input', checLoignUser);

const checPass = () => {
  if (userPass.value.trim() == "") {
    messErorePass.style.display = 'block'
    userPass.focus()
    return true
  } else if (userPass.value.trim().length <= 3) {
    messErorePass.style.display = 'block'
    userPass.focus()
    return true
  }
  else if (userPass.value.trim().length >= 4) {
    messErorePass.style.display = 'none'
  }
  return false
}
userPass.addEventListener('input', checPass);

const checPassConfirm = () => {
  if (passConfirm.value !== userPass.value) {
    passConfEror.style.display = 'block'
    passConfirm.focus()
    return true
  } else if (passConfirm.value === userPass.value) {
    passConfEror.style.display = 'none'
  }
  return false
}
passConfirm.addEventListener('input', checPassConfirm);

const checLogoCar = () => {
  if (logoCar.value == "") {
    messErorLogo.style.display = 'block'
    logoCar.focus()
    return true
  } else if (logoCar.value !== "") {
    messErorLogo.style.display = 'none'
  }
  return false
}
logoCar.addEventListener('input', checLogoCar);

const checStartRun = () => {
  if (startMileage.value == "") {
    erorStartRun.style.display = 'block'
    startMileage.focus()
    return true
  } else if (startMileage.value !== "") {
    erorStartRun.style.display = 'none'
  }
  return false
}
startMileage.addEventListener('input', checStartRun);

const checCurentRunCar = () => {
  if (Number(curentRunCar.value) < Number(startMileage.value)) {
    erorCurentRun.style.display = 'block'
    curentRunCar.focus()
    return true
  } else if (Number(curentRunCar.value) > Number(startMileage.value)) {
    erorCurentRun.style.display = 'none'
  }
  return false
}
curentRunCar.addEventListener('input', checCurentRunCar);

const checAverageMileage = () => {
  if (averageMileage.value == "" || Number(averageMileage.value) == 0) {
    erorAverageMileage.style.display = 'block'
    averageMileage.focus()
    return true
  } else if (averageMileage.value != "") {
    erorAverageMileage.style.display = 'none'
  }
  return false
}
averageMileage.addEventListener('input', checAverageMileage);

const checFuelType = () => {
  if (fuelType.value == "") {
    erorTepeFuel.style.display = 'block'
    fuelType.focus()
    return true
  } else if (fuelType.value !== "") {
    erorTepeFuel.style.display = 'none'
  }
  return false
}
fuelType.addEventListener('input', checFuelType);

const checAverageFuel = () => {
  if (averageFuel.value == "") {
    erorAverageFuel.style.display = 'block'
    averageFuel.focus()
    return true
  } else if (averageFuel.value !== "") {
    erorAverageFuel.style.display = 'none'
  }
  return false
}
averageFuel.addEventListener('input', checAverageFuel);

const checPriceCar = () => {
  if (priceCar.value == "") {
    erorPriceCar.style.display = 'block'
    priceCar.focus()
    return true
  } else if (priceCar.value !== "") {
    erorPriceCar.style.display = 'none'
  }
  return false
}
priceCar.addEventListener('input', checPriceCar);

form.addEventListener('submit', (event) => {

  event.preventDefault();
  if (checLoignUser()) {
    event.preventDefault();
    return false;
  }

  if (checPass()) {
    event.preventDefault();
    return false;
  }

  if (checPassConfirm()) {
    event.preventDefault();
    return false;
  }

  if (checLogoCar()) {
    event.preventDefault();
    return false;
  }

  if (checStartRun()) {
    event.preventDefault();
    return false;
  }

  if (checCurentRunCar()) {
    event.preventDefault();
    return false;
  }

  if (checAverageMileage()) {
    event.preventDefault();
    return false;
  }

  if (checFuelType()) {
    event.preventDefault();
    return false;
  }

  if (checAverageFuel()) {
    event.preventDefault();
    return false;
  }

  if (checPriceCar()) {
    event.preventDefault();
    return false;
  }

  userInfo.login = userLogin.value;
  userInfo.password = userPass.value;
  userInfo.logoCar = logoCar.value;
  userInfo.startMileage = Number(startMileage.value);
  userInfo.curentWithout = Number(curentRunCar.value);
  userInfo.middleMileage = Number(averageMileage.value);
  userInfo.fuelType = fuelType.value;
  userInfo.fuelMiddle = Number(averageFuel.value);
  userInfo.priceAuto = Number(priceCar.value);
  userInfo.mileageHistory = [Number(curentRunCar.value)];
  userInfo.event = [];
  userInfo.changeOil = [];
  allUsers.push(userInfo);

  fetch(URL_DATA_USER, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      "Content-type": "application/json; charset=utf-8"
    }
  }).then(
    () => {
      window.location.replace("login.html")
    }
  )
  event.preventDefault();
});
