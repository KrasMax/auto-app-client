
const btnAddEvent = document.querySelector('#btn-add-event');

const addCurrentEvent = (e) => {
    e.preventDefault();
    let addCurrentEvent = {};
    let typeWorkCurr = document.querySelector('#type-work-curr').value;
    let whoDid = document.querySelector('#who-did').value;
    let mileage = Number(document.querySelector('#mileage').value);
    let nameEvent = document.querySelector('#name-event').value;
    let nameDetail = document.querySelector('#name-Detail').value;
    let brandDetails = document.querySelector('#brand-details').value;
    let numberDetails = document.querySelector('#number-details').value;
    let costOfWork = Number(document.querySelector('#cost-of-work').value);
    let dateOfWork = document.querySelector('#date-of-work').value;

    let subDate = dateOfWork.split("-").reverse();
    dateOfWork = `${subDate[0]}.${subDate[1]}.${subDate[2]}`

    addCurrentEvent.date = dateOfWork;
    addCurrentEvent.mileage = mileage;
    addCurrentEvent.nameEvent = nameEvent;
    addCurrentEvent.price = costOfWork;
    addCurrentEvent.typeEvent = typeWorkCurr;
    addCurrentEvent.whoSpent = whoDid;
    addCurrentEvent.installedParts = [];

    let details = {};
    details.brandDetails = brandDetails;
    details.detailNumber = numberDetails;
    details.nameDetail = nameDetail;

    addCurrentEvent.installedParts.push(details);

    dataUser.event.push(addCurrentEvent);

    let messEror = document.querySelector('#mess-error')

    if (whoDid != '' && mileage != '' && nameEvent != '' && nameDetail != '' && brandDetails != '' && numberDetails != '' && dateOfWork != '' && subDate != '') {

        localStorage.setItem('curentUser', JSON.stringify(dataUser));

        document.querySelector('#who-did').value = '';
        document.querySelector('#mileage').value = '';
        document.querySelector('#name-event').value = '';
        document.querySelector('#name-Detail').value = '';
        document.querySelector('#brand-details').value = '';
        document.querySelector('#number-details').value = '';
        document.querySelector('#cost-of-work').value = '';
        document.querySelector('#date-of-work').value = '';

        messEror.classList.remove('mess_eror_block');
        messEror.classList.add('mess_eror')
    } else {
        messEror.classList.remove('mess_eror');
        messEror.classList.add('mess_eror_block')
    }

};

btnAddEvent.addEventListener('click', addCurrentEvent);