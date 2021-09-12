const handleFormSubmit = async (event) => {
    event.preventDefault;

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
    }
    else {
        console.error(request);
    };

    nameEL.value = '';
    emailEL.value = '';
    messageEL.value = '';

};

document
    .querySelector('#contact-form')
    .addEventListener('submit', handleFormSubmit);