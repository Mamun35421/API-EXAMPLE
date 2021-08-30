const loadcountroes = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayeCountries(data))
}

loadcountroes()

const displayeCountries = counties =>{
    const countriesDiv = document.getElementById('countris');
    counties.forEach(country => {
    
    console.log(country)
       const div = document.createElement('div')
       div.classList.add('country')

       div.innerHTML = `
       <h3>${country.name}</h3>
       <p>${country.capital}</p>
       <button onclick="loadCountryByName('${country.name}')">Details</button>`;
    //    const h3 = document.createElement('h3')
    //    h3.innerText = country.name;
    //    div.appendChild(h3);
    //    const p = document.createElement('p');
    //    p.innerText = country.capital;
    //    div.appendChild(p);
       countriesDiv.appendChild(div)
   });
   
   }
   const loadCountryByName = name => {
    let url = `https://restcountries.com/v3/name/${name}`;

fetch(url)
.then(res => res.json())
.then(data => displayCountryDetails(data[0]));

}
const displayCountryDetails = country =>{
    console.log(country)
}