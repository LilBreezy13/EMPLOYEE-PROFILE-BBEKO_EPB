document.getElementById("staffLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("staffEmail").value;
  const password = document.getElementById("staffPassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = 'employee-dashboard.html';
    })
    .catch((error) => {
      alert("Login Failed: " + error.message);
    });
});
