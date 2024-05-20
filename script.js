const btnEle = document.getElementById('btn');
const quoteEle = document.getElementById('quote');
const authorEle = document.getElementById('author');

const apiURL = "https://api.quotable.io/random";

async function getRandomQuote(){

    try {
        btnEle.innerText = "Loading...";
        btnEle.disabled = true;

        
        // quoteAuthor.innerText = "Updating...";
        // quoteContent.innerText = "Updating...";

        const response = await fetch(apiURL);
        const data = await response.json();
        // console.log(data);
    
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        
        quoteEle.innerHTML = quoteContent;
        authorEle.innerHTML = "~ " + quoteAuthor;

        btnEle.innerText = "Get a quote";
        btnEle.disabled = false;
    
    } catch (error) {
        quoteEle.innerHTML = "Something went wrong";
        authorEle.innerHTML = "404";
    }
}


getRandomQuote(0);

btnEle.addEventListener('click', getRandomQuote);