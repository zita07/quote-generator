const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//Pick a random quote from localQuotes array
function newQuote() {
  complete();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "غير معروف";
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
}
loading();
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
newQuote();




























































//////////////////////////////////////////////////
//the code below if you want to use an api
/*let apiQuotes = [];
//Show New Quote
function newQuote(){
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
}
// Get Quotes 
async function getQuotes(){
    const quotesUrl = './quotes/quotes.json'
    try {
        const response = await fetch(quotesUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        //Catch Error Here
        alert(error)
    }

}
//On Load
getQuotes()
*/
