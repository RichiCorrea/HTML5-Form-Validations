const payment_form = document.querySelector("#payment_form");

payment_form.addEventListener('submit', function (event) {
  event.preventDefault();
  //alert("hola!");


  validateCard();
  validateTypeCard();
  validateCVC();
  validateFirstName();
  validateLastName();
  validateCity();
  validateAmount();
  validateState();
  validatePostalCode();
});

function validateCard() {
  let number_card = document.querySelector("#number_card");
  let regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  if (!regex.test(number_card.value.trim())) {
    alert("Error, el numero de tarjeta no coincide con el formato");
  } else if (number_card.value.trim() === '') {
    alert("Error, el numero de tarjeta está vacio");
  }
}