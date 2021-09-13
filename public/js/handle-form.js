(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



const handleFormSubmit = async (event) => {
    event.preventDefault;

    if ($('#contact-form').hasClass('was-validated')) {
        $('#form-submit').append(`<span id="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`);

        const nameEL = document.querySelector('#name');
        const emailEL = document.querySelector('#email');
        const messageEL = document.querySelector('#message');
    
        const name = nameEL.value.trim();
        const email = emailEL.value.trim();
        const message = messageEL.value.trim();
    
        const body = { name, email, message };
    
        const request = await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
          });
    
        if (request.ok) {
            console.log('email sent successfully');
            $('.toast').toast('show');
        }
        else {
            console.error(request);
        };
    
        nameEL.value = '';
        emailEL.value = '';
        messageEL.value = '';
    
        $('#spinner').remove();
    }
    else {
        return;
    };    

};

document
    .querySelector('#contact-form')
    .addEventListener('submit', handleFormSubmit);