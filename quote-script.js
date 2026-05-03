// ================================
// QUOTE GENERATOR 🔥
// ================================

// Array of motivational quotes
const quotes = [
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Every expert was once a beginner.",
        author: "Helen Hayes"
    },
    {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Do it for the people who want to see you win.",
        author: "Unknown"
    },
    {
        text: "A man who has never made a mistake has never tried anything new.",
        authoer: "Albert Einstein"
    }
];

// Grab elements from the page
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Track last quote index to avoid repeats
let lastIndex = -1;

// Function to get a random quote
function getRandomQuote() {
    let randomIndex;

    // Keep picking until we get a different quote
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    return quotes[randomIndex];
}

// Function to display a quote with fade effect
function displayQuote() {
    // Fade out
    quoteText.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    // Wait 300ms then swap quote and fade back in
    setTimeout(function() {
        const quote = getRandomQuote();
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;

        // Fade in
        quoteText.style.opacity = "1";
        quoteAuthor.style.opacity = "1";
    }, 300);
}

// Listen for button click
newQuoteBtn.addEventListener("click", displayQuote);

// Show a quote automatically when page loads
displayQuote();