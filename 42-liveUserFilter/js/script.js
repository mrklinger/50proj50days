// uses Random User API - gets random info for users

const result = document.getElementById("result"); // ul with user results
const filter = document.getElementById("filter"); // search input
const listItems = []; // initialize empty array to put data we fetch

getData();

// event listener for the Search input
filter.addEventListener("input", (e) => filterData(e.target.value));

// gets 50 results from Random User API
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  // focus on Results object within data - use destructuring
  const { results } = await res.json();

  // Clear result (gets rid of Loading...)
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

    result.appendChild(li);
  });
}

// loop through array of users, for each item check if search input matches the user info
// Adds and removes hide class to show users
function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
