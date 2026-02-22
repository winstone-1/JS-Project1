// DOM
let form = document.getElementById('userForm');
let resultsection = document.getElementById('resultSection')

// Local storage
let savedUser = JSON.parse(localStorage.getItem("user"));
if (savedUser) {
  showContent(savedUser.name, savedUser.age);
}

