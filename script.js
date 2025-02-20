const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    logo.classList.add('popup');
    setTimeout(() => logo.classList.remove('popup'), 500); // Remove the class after animation
});

document.getElementById('username-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username-input').value.trim();
    if (username) {
      window.location.href = `User .html?username=${encodeURIComponent(username)}`;
    } else {
      alert('Please enter a valid username.');
    }
  });