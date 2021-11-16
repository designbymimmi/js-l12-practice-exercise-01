const randomFolks = document.querySelector(".random-peeps");
const dropDownList = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("#users");

dropDownList.classList.remove("hide"); // display drop down list

// get data from API
const getData = async function (numUsers) {
  let usersRequest = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
  let data = await usersRequest.json();
  let userResults = data["results"];
  // console.log(userResults);
  // console.log(displayUsers(userResults));
  displayUsers(userResults);
};

// display relevant user data
const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";

  for (let user of userResults) {
    let country = user.location.country;
    let name = user.name.first;
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

getData(1);

// change users displayed depending on drop down box
selectUserNumber.addEventListener("change", function (e) {
  let numUsers = e.target.value;

  getData(numUsers);
});
