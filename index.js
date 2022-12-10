const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const qBtn = document.getElementById('qBtn');
const tweetMe = document.getElementById('tweetMe');
let realData = "";
let quotesData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`
    window.open(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 1643);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`
    quotesData.author == null
        ? (author.innerText = `By UnKnown`)
        : (author.innerText = `By ${quotesData.author}`)
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        getNewQuotes();
    } catch (error) {

    }
};
tweetMe.addEventListener('click', tweetNow)
qBtn.addEventListener('click', getNewQuotes)
getQuotes();