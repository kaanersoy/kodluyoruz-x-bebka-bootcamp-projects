const loader = document.getElementById('loader');
const quoteContainer = document.querySelector('.quote');
const quoteEl = quoteContainer.querySelector('p');
const authorEl = quoteContainer.querySelector('small');

async function getRandomQuote() {
  const uri = `https://goquotes-api.herokuapp.com/api/v1/random?count=1`;
  loader.classList.add('active');
  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      const { text, author } = data.quotes[0];
      loader.classList.remove('active');
      quoteEl.innerText = text;
      authorEl.innerText = author;
    });
}

window.addEventListener('load', getRandomQuote());
