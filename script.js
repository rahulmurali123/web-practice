// List of quotes
const quotes = [
    "If You Dont Find A Way To Make To Make Money While You Sleep... You Will Work Until You Die",
    "If You Arent Willing To Own A Stock For 10 Years, Dont Even Think About Owning It For 10 Minutes",
    "Never Depend On A Single Income... Make An Investment To Create Second Source Of Income",
    // Add more quotes here
];

const quoteTextElement = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote-button");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayNewQuote() {
    const newQuote = getRandomQuote();
    quoteTextElement.textContent = newQuote;
}

// Initial quote display
displayNewQuote();

newQuoteButton.addEventListener("click", displayNewQuote);
