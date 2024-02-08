
// // BOJA DUGMETA
let dugme = prompt('Unesi boju dugmeta').toLowerCase();
let btn = document.querySelector('#dugme');

if (dugme == 'plava') {
    btn.style.backgroundColor = 'blue';
} else if (dugme == 'crvena') {
    btn.style.backgroundColor = 'red';
} else {
    btn.style.backgroundColor = 'green';
};

// BOJA TEKSTA
let bojaTeksta = prompt('Unesi boju teksta').toLowerCase();

if (bojaTeksta == 'plava') {
    btn.style.color = 'blue';
} else if(bojaTeksta == 'crvena') {
    btn.style.color = 'red';
};

// VISINA DUGMETA
let visina = prompt('Unesite visinu dugmeta');
if(visina >= 50 ) {
    btn.style.height = visina + 'px';
} else {
    alert('Uneli ste pogresne mere')
}

// SIRINA DUGMETA
let sirina = prompt('Unesite sirinu dugmeta');
if(sirina >= 50 ) {
    btn.style.width = sirina + 'px';
} else{
    alert('Uneli ste pogresne mere')
}