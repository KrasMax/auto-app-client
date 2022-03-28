let tablDetails = document.querySelector('#body-Table');

let dataUser = JSON.parse(localStorage.getItem('curentUser'));

dataUser.event.forEach(elem => {

    for (let i = 0; i < elem.installedParts.length; i++) {

        if (elem.installedParts[i].nameDetail != '' && elem.installedParts[i].nameDetail != '-') {
            tablDetails.innerHTML += `
        <tr>
            <td>${elem.installedParts[i].nameDetail}</td>
            <td>${elem.installedParts[i].brandDetails}</td>
            <td>${elem.installedParts[i].detailNumber}</td>
            <td>${elem.mileage} км </td>
         </tr>
        `
        }


    }
});
