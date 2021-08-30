const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoute(data));
}

const displayQoute = mute =>{
    console.log(mute.quote);
    const quoteElement = document.getElementById('quote');
  quoteElement.innerText = mute.quote;
}
