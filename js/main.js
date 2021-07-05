const totalCountries = document.querySelector('#total')
const countriesGrid = document.querySelector('.countries-grid')

for (const country of countries) {
  const countryDiv = document.createElement('div')
  countryDiv.setAttribute('class', 'country')
  countryDiv.textContent = country
  countriesGrid.appendChild(countryDiv)
}

totalCountries.textContent = countries.length