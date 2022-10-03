const updateBtn = document.querySelector('#update-button');
const deleteBtn = document.querySelector('#delete-button');
const messageDiv = document.querySelector('#message');

updateBtn.addEventListener('click', (_) => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader',
      quote: 'I find your lack of faith disturbing',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((res) => {
      widnow.location.reload(true);
    });
});

deleteBtn.addEventListener('click', (_) => {
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Darth Vader',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    //display no more quotes to delete msg
    .then((res) => {
      if (res === 'no more Vader quotes to delete') {
        messageDiv.textContent = 'No Darth Vader quote to delete';
      } else {
        widnow.location.reload(true);
      }
    })
    .catch((error) => console.error(error));
});
