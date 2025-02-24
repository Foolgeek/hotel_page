const scriptURL = 'https://script.google.com/macros/s/AKfycby436bDFlC8bBDIvUg_i5IYU1c_0WOo5b2yOeN8i24fSJMrO-24PYTC9iNjIY-_isL9GA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("your reservation is completeed please contact the hotel for the confirmation" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})