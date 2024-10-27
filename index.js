// Hardcoded array of user objects with names and profile pictures
const users = [
    { name: "Alice", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Bob", image: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Charlie", image: "https://randomuser.me/api/portraits/men/25.jpg" },
    { name: "David", image: "https://randomuser.me/api/portraits/men/33.jpg" },
    { name: "Eve", image: "https://randomuser.me/api/portraits/women/44.jpg" }
  ];
  
// Function to render users to the DOM with animations
function renderUsers(userArray = []) {
    const userList = document.getElementById('user-list');
    if (!userList) return;
  
    userList.innerHTML = ''; // Clear existing users
  
    userArray.forEach(({ image, name }, index) => {
      if (!image || !name) return;
  
      const li = document.createElement('li');
      li.classList.add('user-item');
      li.innerHTML = `
        <img src="${image}" alt="${name}" loading="lazy">
        <p>${name}</p>
      `;
      userList.appendChild(li);
  
      // Add a delay to each item for staggered animation
      setTimeout(() => li.classList.add('show'), index * 100);
    });
  }
  
  // Shuffle function remains the same
  function shuffleUsers() {
    const shuffledUsers = users.slice().sort(() => Math.random() - 0.5);
    renderUsers(shuffledUsers);
  }
  
  // Event listener for shuffle button
  document.getElementById('shuffle-btn')?.addEventListener('click', shuffleUsers);
  
  // Initial render of users
  renderUsers(users);