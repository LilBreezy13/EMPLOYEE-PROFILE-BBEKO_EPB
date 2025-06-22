document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const key = document.getElementById("adminKey").value;
  if (key === "bbekoadmin2025") {
    window.location.href = 'admin-dashboard.html';
  } else {
    alert("Invalid admin key");
  }
});
