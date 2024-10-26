// Hardcoded array of user objects with names and profile pictures
const users = [
  { name: "Alice", image: "https://via.placeholder.com/100" },
  { name: "Bob", image: "https://via.placeholder.com/100" },
  { name: "Charlie", image: "https://via.placeholder.com/100" },
  { name: "David", image: "https://via.placeholder.com/100" },
  { name: "Eve", image: "https://via.placeholder.com/100" }
];

// Function to render users to the DOM
function renderUsers(userArray) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Clear existing users
  userArray.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${user.image}" alt="${user.name}">
      <p>${user.name}</p>
    `;
    userList.appendChild(li);
  });
}

// Initial render of users
renderUsers(users);

// Function to shuffle the array of users
function shuffleUsers() {
  const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
  renderUsers(shuffledUsers);
}

// Event listener for shuffle button
document.getElementById('shuffle-btn').addEventListener('click', () => {
  shuffleUsers();
});
