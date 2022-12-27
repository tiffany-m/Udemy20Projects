const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')
const more = document.getElementById('more')

const apiURL = 'https://api.lyrics.ovh'

// Search by song or artist
async function searchSongs(term) {
  // fetch(`${apiURL}/suggest/${term}`)
  //   .then((res) => res.json()) // formatted promise with json
  //   .then((data) => console.log(data)); // promise gives us actual data

  const res = await fetch(`${apiURL}/suggest/${term}`); // awaiting response from fetch() call
  const data = await res.json()

  showData(data)
}

// Show song and artist in DOM
function showData(data) {
  
}

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
})