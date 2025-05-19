// root URL
const APIURL = "https://api.github.com/users/";

// creating variables for elements in HTML based on ID
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// getting user data and then repos data APIURL/username
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

// getting repo information  APIURL/username/repos
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created"); // sorts by most recent repos

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";

  // creating user card HTML using data from User object in API
  const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  // looping through repos and creating repo elements
  // gets first 5 repos with slice method
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank"; // opens in new window
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl); // insert elements into DOM
  });
}

// prevent default behavior (submit to a file)
// get user data using search input
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    // clear search input value after getting user
    search.value = "";
  }
});
