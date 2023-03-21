const students = [
    { name: "John Doe", password: "password1", busroute: "Route 1" },
    { name: "Jane Smith", password: "password2", busroute: "Route 2" },
    { name: "Bob Johnson", password: "password3", busroute: "Route 3" },
    { name: "a", password: "1", busroute: "r3" }
  ];
  
  function showBusPass() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const student = students.find(s => s.name === name && s.password === password);
    if (student) {
      document.getElementById("fullname").textContent = student.name;
      document.getElementById("busroute").textContent = student.busroute;
      document.getElementById("buspass").style.display = "block";
    } else {
      alert("Invalid name or password.");
    }
  }