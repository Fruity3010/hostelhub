const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const checkboxInput = document.getElementById("Checkbox");
  const user = {
    name,
    email,
    password,
    checkbox: checkboxInput.checked 
  };

  let users = JSON.parse(localStorage.getItem('users')) || []; 


if (!name || !email || !password) {
  alert('Please fill all the required fields');
  return;
}
else{
  // User exist
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    alert('User already exists!');
    return; 
  }

  users.push(user); // Add the new user

  localStorage.setItem('users', JSON.stringify(users)); 

  alert('User created successfully!, Proceed to login');
console.log(localStorage);
console.log(users);
  form.reset(); }
});

function logpop() {
    document.getElementById("signup").style.display = "none"
    document.getElementById("login").style.display = "block"
}
function loggin() {
    const users = JSON.parse(localStorage.getItem('users'));
    let names = document.getElementById("logname").value;
    let passwords = document.getElementById("logpassword").value;
    
if (!names||!passwords) {
    alert('Please fill all the required fields');
    return;
  }
  else{
    const nameexist = users.some((u) => u.name === names && u.password === passwords);
  if (nameexist) {
    localStorage.setItem('currentUserName', names);
    window.location.href = 'pre-register.html'; 
  }
  else{
    alert("incorrect email or password")
  }
  }
}

