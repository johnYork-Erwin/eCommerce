orderedProducts = JSON.parse(localStorage.getItem('orderedProducts'));

//materialize initialization for 'select'
$(document).ready(function() {
  $('select').material_select();
});

//dynamically generates the Checkout

console.log(products);
console.log(orderedProducts);
const cartButton = $('#cart');
cartButton.text(cartSize + 'more text')



const inputNames = ['firstNameShip', 'lastNameShip', 'companyShip', 'addressShip', 'aptShip', 'cityShip', 'zipShip']

//this copies the shipping info into billing info
const checkbox = $('#filled-in-box');

checkbox.on('click', (event) => {

  const state = $('select[name="stateShip"]');
  const stateValue = state.val();

//cycles through list of input field names
  for (const inputName of inputNames) {

    const value = $(`input[name=${inputName}]`).val();

    const newName = inputName.replace('Ship', 'Bill');


    if (event.target.checked) {
      //copies shipping info to billing
      $(`input[name=${newName}]`).val(value);
      $('select[name="stateBill"]').val(stateValue);
    } else {
      //empty billing information
      $(`input[name=${newName}]`).val('');
      $('select[name="stateBill"]').val('');
    }
  }

});


//form validation
$('form').on('submit', (event) => {
  event.preventDefault();

  let validity = true;
  let zipValid = true;
  let ccValid = true;

//basic validation checking for presence
  const inputsThatNeedPresence = $('.validate');
  console.log(inputsThatNeedPresence);
  console.log(inputsThatNeedPresence[0]);

  for (let i = 0; i < inputsThatNeedPresence.length; i++) {
    console.log(inputsThatNeedPresence.eq(i).val());
    if (inputsThatNeedPresence.eq(i).val().length > 0) {
      inputsThatNeedPresence[i].style.background = 'white';
    } else {
      inputsThatNeedPresence[i].style.background = '#ffdddd';
      validity = false;
    }
  }

//validates zip codes
  const zipCodes = $('.zip');

  for (let i = 0; i < zipCodes.length; i++) {
    const value = zipCodes.eq(i).val();
    console.log(isNaN(parseFloat(value)));
    if (isNaN(parseFloat(value)) === false && 5 <= value.length && value.length <= 9) {
      zipCodes[i].style.background = 'white';
    } else {
      zipCodes[i].style.background = '#ffdddd';
      validity = false;
      zipValid = false;
    }
  }

//validates cc number
  const ccNumber = $('input[name="cc"]');
  console.log(ccNumber);
  if (isNaN(parseFloat(ccNumber.val())) === false && ccNumber.val().length >= 16) {
    ccNumber[0].style.background = 'white';
  } else {
    ccNumber[0].style.background = '#ffdddd';
    validity = false;
    ccValid = false;
  }

//validates dropdown selections
  const selectInputs = $('select');
  console.log(selectInputs);
  for (let i = 0; i < selectInputs.length; i++) {
    const value = selectInputs.eq(i).val();
    console.log(value);
    if (value) {
      selectInputs[i].style.background = 'white';
    } else {
      selectInputs[i].style.background = '#ffdddd';
      validity = false;
    }
  }

//creates toasts
  if (validity) {
    Materialize.toast('Thank you for your order!', 4000);
  } else {
    Materialize.toast('Not valid! Please enter required fields', 4000);
  }

  if (zipValid === false) {
    Materialize.toast('Enter a proper zip code!', 4000);
  }

  if (ccValid === false) {
    Materialize.toast('Enter a proper credit card number!', 4000);
  }
});


//dynamically adds states
const states = ['CA', 'ID', 'MT', 'OR', 'WA'];
const selectStateShip = $('select[name="stateShip"]');
console.log(selectStateShip);
const selectStateBill = $('select[name="stateBill"]');
//create an option tag, add state from array as text,
//add a value that increases each time, then append each option tag to both select fields
let optionValue = 0;
states.forEach((stateName) => {
  optionValue++;
  const optionShip = $('<option>');
  optionShip.text(stateName).attr('value', optionValue);
  const optionBill = optionShip.clone()
  selectStateShip.append(optionShip);
  selectStateBill.append(optionBill);
});
