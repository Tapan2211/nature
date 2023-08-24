function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      // Populate data into the card
      console.log(data)

      data.map(userName => {
        const divElement = document.createElement('div');
        divElement.innerText = userName.name;
        const body = document.body;
        body.append(divElement);
      })

      // data.forEach(userName =>{
      //   // const cardContainer = document.getElementById('card');
      //   document.querySelector('.card-title').textContent = userName.name;
      //   document.querySelector('.card-description').textContent = userName.email;
      // })

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

// Call the fetchData function when the page loads
// fetchData();

async function addCards(data) {
  const section = document.querySelector(".userList");
  data.map(items => {
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
    <div class="card">
    <div class="card-content">
        <h4 class="card-title">${items.name}</h4>
        <p class="card-description">${items.email}</p>
    </div>
</div>`;
    section.append(cardDiv)
  })

}



function fetchFromData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      // Populate data into the card
      console.log(data)
      addCards(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

fetchFromData();

