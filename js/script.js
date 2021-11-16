const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  let usersRequest = await fetch("https://randomuser.me/api/?results=5");
  let data = await usersRequest.json();
  let userResults = data["results"];
  // console.log(userResults);
  // console.log(displayUsers(userResults));
  displayUsers(userResults);
};

const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";
  for (let user of userResults) {
    let country = user["location"]["country"];
    let name = user["name"]["first"];
    let imageURL = user["picture"]["medium"];
    // console.log(country, name, imageURL);
    let userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageURL} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
  }
};

getData();
