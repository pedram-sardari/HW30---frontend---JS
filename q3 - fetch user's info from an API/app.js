const cardDeckElem = document.getElementById('card-deck')

fetch('https://dummyjson.com/users?limit=10')
    .then(response => response.json())
    .then(data => fillCardDeck(data.users))

function fillCardDeck(users) {
    console.log(users)
    for (let user of users) {
        console.log(user)
        let card = createCard(user)
        cardDeckElem.innerHTML += card
    }
}

function createCard(user) {
    return `
    <div class="col">
        <div class="card m-2" >
            <img id="profile-img" src="${user.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="full-name" class="card-title text-center">${user.firstName} ${user.lastName}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li id="age" class="list-group-item">Age: ${user.age}</li>
                <li id="gender" class="list-group-item">Gender: ${user.gender}</li>
                <li id="email" class="list-group-item">Email: ${user.email}</li>
                <li id="phone" class="list-group-item">phone: ${user.phone}</li>
            </ul>
        </div>
    </div>
    `
}