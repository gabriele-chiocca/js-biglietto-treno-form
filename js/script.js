const priceForm = document.getElementById('price-form');

const nameAndSurname = document.getElementById('nomecognome');

console.log(nameAndSurname);

const kmDaPercorrere = document.getElementById('sceltakm');

const etàScelta = document.getElementById('selectetà');

const buttonGenera = document.getElementById('generabtn');

const ticketPreviewContainer = document.getElementById('ticket-preview');

//Preview
const namePreview = document.getElementById('nameinsert');

const pricePreview = document.getElementById('pricecalc');

//Prezzo per Km
const priceForKm = 0.21;

//Function

priceForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameAndSurnameCompiled = nameAndSurname.value;

  const kilometriCompiled = kmDaPercorrere.value;

  const etàSelected = etàScelta.value;

  //Prende il nome e cognome inserito dall'utente
  namePreview.innerText = nameAndSurnameCompiled;

  let outputPrezzo;

  if (etàSelected == 'Maggiorenne') {
    ticketPreviewContainer.classList.remove('d-none');

    const priceTicket = kilometriCompiled * priceForKm;

    outputPrezzo = priceTicket - priceTicket * 0.4;

    pricePreview.innerText = outputPrezzo.toFixed(2);
  } else if (etàSelected == 'Minorenne') {
    ticketPreviewContainer.classList.remove('d-none');

    const priceTicket = kilometriCompiled * priceForKm;

    outputPrezzo = priceTicket - priceTicket * 0.2;

    pricePreview.innerText = outputPrezzo.toFixed(2);
  } else {
    console.error('Ricontrolla input inseriti');
    ticketPreviewContainer.classList.add('d-none');
    return;
  }
});
