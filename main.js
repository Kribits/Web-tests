let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/swedbank-2x.png') {
        myImage.setAttribute('src', 'images/citadele_logo_ilgas_pantone.png');
    } else {
        myImage.setAttribute('src', 'images/swedbank-2x.png');
    }
}

let changeBank = document.querySelector('bank');

changeBank.onclick = function () {
    let myBank = changeBank.getAttribute('src');
    if (myBank === 'images/citadele_logo_ilgas_pantone.png') {
        changeBank.setAttribute('bank', 'alt');
    }
}

