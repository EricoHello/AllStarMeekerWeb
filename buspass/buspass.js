const students = [
    { name: "JANELA", password: "367652", busroute: "" },
    { name: "SOPHIAA", password: "371835", busroute: "" },
    { name: "EMMANUELA", password: "387008", program: "Sports", busroute: "SE 223RD ST& 110TH AV SE" },
    { name: "SKYEA", password: "371972", busroute: "" },
    { name: "VIKTORA", password: "373964", busroute: "" },
    { name: "LESLYC", password: "386676", program: "Music Prod.", busroute: "SE 256TH ST& 109TH AV SE" },
    { name: "KAYLYNP", password: "366874",program: "Sports", busroute: "SE 216TH ST& 104TH PL SE" },
    { name: "FIDELJ", password: "375236",program: "Sports", busroute: "108TH AV& SE 212TH ST" },
    { name: "NAVEAHJ", password: "405819",program: "Sports", busroute: "SE 224TH ST& 104TH PL SE" },
    { name: "ALEXAR", password: "password3", program: "Sports", busroute: "Route 3" },
    { name: "ALEXAR", password: "password3", program: "Sports", busroute: "Route 3" },
    { name: "ALEXAR", password: "password3", program: "Sports", busroute: "Route 3" },
    { name: "ALEXAR", password: "password3", program: "Sports", busroute: "Route 3" },
    { name: "ALEXAR", password: "password3", program: "Sports", busroute: "Route 3" },

    { name: "a", password: "1", busroute: "r3" }
  ];
  
  function showBusPass() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const student = students.find(s => s.name === name && s.password === password);
    const fullscreenButton = document.createElement("button");
    fullscreenButton.innerText = "Fullscreen";
    fullscreenButton.onclick = toggleFullscreen;

    if (student) {
      const buspass = document.getElementById("buspass");
      buspass.innerHTML = `
      <div class="bus-pass">
        <div class="title">AFTER-SCHOOL ALL-STARS</div>
        <div class="student">STUDENT: ${student.name}</div>
        <div class="leader">LEADER:</div>
        <div class="program">PROGRAM: ${student.program || ''}</div>
        <div class="bus-stop">BUS STOP: ${student.busroute || ''}</div>
      </div>
    `;
      buspass.appendChild(fullscreenButton);
      buspass.style.display = "block";
    } else {
      alert("Invalid name or password.");
    }
    
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        buspass.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }
  