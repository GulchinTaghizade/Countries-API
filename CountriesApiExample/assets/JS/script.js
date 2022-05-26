
async function getCountries() {
    try {
        let res = await fetch("https://restcountries.com/v3.1/all");
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderCountries() {
    let countries = await getCountries();
    let html = '';
    countries.forEach(country => {
        let htmlSegment = `<div class="country">
                            <img src="${country.flags.png}" >
                            <h4> ${country.name.official} </h4>
                            <p>Capital: ${country.capital} </p>
                            <p>Population:${country.population} </p>
                            <p>Area:${country.area}&#13218</p>
                            <p>Continent: ${country.continents} </p>
                        </div>`;

        html += htmlSegment;
    });

    let cards = document.querySelector('#cards');
    cards.innerHTML = html;
}

renderCountries();




