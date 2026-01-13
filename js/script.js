const priceForm = document.getElementById('price-form');

const nameAndSurname = document.getElementById('nomecognome');

console.log(nameAndSurname);

const kmDaPercorrere = document.getElementById('sceltakm');

const etàScelta = document.getElementById('selectetà');

const buttonGenera = document.getElementById('generabtn');

const ticketPreviewContainer = document.getElementById('ticket-preview');

//Prezzo per Km
const priceForKm = 0.21;

//Calcolo
const priceTicket = kmDaPercorrere * priceForKm;

//Dati value campi
const nameAndSurnameCompiled = nameAndSurname.value;

const kilometriCompiled = kmDaPercorrere.value;

const etàSelected = etàScelta.value;

priceForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Evento avvenuto pagina non ricaricata');
});
