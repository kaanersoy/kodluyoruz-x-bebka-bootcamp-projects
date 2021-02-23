const loader = document.getElementById('loader');
const quoteContainer = document.querySelector('.quote');
const quoteEl = quoteContainer.querySelector('p');
const authorEl = quoteContainer.querySelector('small');
const tweetButton = document.getElementById('tweet');

async function getRandomQuote() {
  const uri = `https://goquotes-api.herokuapp.com/api/v1/random?count=1`;
  loader.classList.add('active');
  fetch(uri)
    .then((res) => res.json())
    .then((data) => {
      const { text, author } = data.quotes[0];
      const documentTitle = document.title;
      const tweetString = `https://twitter.com/intent/tweet?text=${text} %0a%0aby "${author}" %0a%0agenerated by -> ${documentTitle}`;
      tweetButton.href = tweetString;
      loader.classList.remove('active');
      quoteEl.innerText = text;
      authorEl.innerText = author;
    });
}

window.addEventListener('load', getRandomQuote());
