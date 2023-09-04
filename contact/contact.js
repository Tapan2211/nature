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

// fetchFromData();


async function fetchUserList(baseURL) {
  const response = await fetch(baseURL);
  const data = await response.json()
  const finaldata = data.photos;

  let datas = userList(finaldata);
  return datas;
}

function userList(finaldata) {
  const userContainer = document.getElementById("users");
  finaldata.forEach((element) => {
    const { url } = element;

    const userCard = document.createElement('div');
    userCard.className = "col-6 col-lg-3 mb-4 position-relative flex-wrap";
    userCard.innerHTML = `
    
    <img class="testimonial-image"
                        src=${url}
                        alt="p1">
    `

    userContainer.appendChild(userCard);
  });
}

document.getElementById('submit').addEventListener('click', function () {

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let comment = document.getElementById('comment').value;

  //Javascript reGex for Email Validation.
  var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  if (name === "") {
    alert("Enter username");
  } else if (name.length < 5) {
    alert("Minimun username less then 5");
  } else if (email === "") {
    alert("Enter email");
  } else if (!regEmail.test(email)) {
    alert("Please enter a valid e-mail address.");
  } else if (comment === "") {
    alert("Enter commnet");
  } else{
    const data = {
      name: name,
      email: email,
      comment: comment
    };
    console.log(data);
  }

});

const baseURL = "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=4";
fetchUserList(baseURL);

