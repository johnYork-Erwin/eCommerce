//materialize initialization for 'select'
$(document).ready(function() {
    $('select').material_select();
  });







const inputNames = ['firstNameShip', 'lastNameShip', 'companyShip', 'addressShip', 'aptShip', 'cityShip', 'stateShip', 'zipShip']


//form validation


//this copies the shipping info into billing info
    const checkbox = $('#filled-in-box');

    checkbox.on('click', (event) => {
      console.log('i clicked', event.target.checked);

      if (event.target.checked) {

        for (const inputName of inputNames) {

          const value = $(`input[name=${inputName}]`).val();
          console.log(inputName, value);

          const newName = inputName.replace('Ship', 'Bill');
          console.log(newName)
          $(`input[name=${newName}]`).val(value);
        }
      }
    })


    $('form').on('submit', (event) => {
      event.preventDefault();
      console.log('submitting!')

      Materialize.toast('Thank you for submitting!', 4000);

      const firstNameShip = $('input[name="firstNameShip"]').val();
      console.log(firstNameShip);
      const lastNameShip = $('input[name="lastNameShip"]').val();
      const companyShip = $('input[name="companyShip"]').val();
      const addressShip = $('input[name="addressShip"]').val();
      const aptShip = $('input[name="aptShip"]').val();
      const cityShip = $('input[name="cityShip"]').val();
      const stateShip = $('input[name="stateShip"]').val();
      const zipShip = $('input[name="zipShip"]').val();

      const firstNameBill = $('input[name="firstNameBill"]').val();
      const lastNameBill = $('input[name="lastNameBill"]').val();
      const companyBill = $('input[name="companyBill"]').val();
      const addressBill = $('input[name="addressBill"]').val();
      const aptBill = $('input[name="aptBill"]').val();
      const cityBill = $('input[name="cityBill"]').val();
      const stateBill = $('input[name="stateBill"]').val();
      const zipBill = $('input[name="zipBill"]').val();

      const validationArray = $('input[class="validate"]').val();
      console.log(validationArray);
      for (const inputField of validationArray) {
        if (inputField.val() === '') {
          console.log(inputField[name]);
        }
      }
      // if (email !== emailConfirm) {
      //     alert('ohhhhh you better match those emails');
      // }
    });
