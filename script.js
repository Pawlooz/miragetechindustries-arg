<<<<<<< HEAD
const input = document.getElementById("command");
const output = document.getElementById("output");

let ziggyControl = false;
let gateAttempts = 0;

if (!input || !output) console.error("Terminal elements missing.");

function print(text) {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

input.focus();

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const cmd = input.value.toLowerCase().trim();
  input.value = "";

  /* =====================
     STANDARD COMMANDS
     ===================== */

  switch (cmd) {
    case "help":
      print("AVAILABLE COMMANDS: STATUS, WORKSTATION, CAMERAS");
      if (ziggyControl) {
        print("NOTE: ADDITIONAL COMMANDS AVAILABLE: WHOAMI, OVERRIDE, LOGOUT");
        print("RESTRICTED: GATE CONTROL COMMANDS");
      }
      input.focus();
      return;

    case "status":
      print("SYSTEM STATUS: PARTIALLY ONLINE");
      setTimeout(() => print("... \n⚠ SECURITY EXCEPTION DETECTED"), 800);
      setTimeout(() => print("ADMIN SESSION INTERRUPTED"), 1600);
      setTimeout(() => {
        print("ACTIVE ADMIN SESSION");
        print("OPERATOR: ZIGGY");
        ziggyControl = true;
      }, 2400);
      input.focus();
      return;

    case "workstation":
      print("ACCESS GRANTED");
      localStorage.setItem("camsUnlocked", "true");
      if (!document.getElementById("workstation-link")) {
        const link = document.createElement("a");
        link.href = "computer.html";
        link.textContent = "Open Workstation 07";
        link.id = "workstation-link";
        document.body.appendChild(link);
      }
      input.focus();
      return;

    case "cameras":
      print("CAMERA SYSTEM ONLINE");
      if (!document.getElementById("camera-link")) {
        const link = document.createElement("a");
        link.href = "cameras.html";
        link.textContent = "Open Security Cameras";
        link.id = "camera-link";
        document.body.appendChild(link);
      }
      input.focus();
      return;

    /* =====================
       ZIGGY-ONLY COMMANDS
       ===================== */

    case "whoami":
      if (ziggyControl) {
        print("CURRENT USER: GUEST");
        print("CURRENT AUTHORITY: ZIGGY");
      } else {
        print("UNKNOWN COMMAND");
      }
      input.focus();
      return;

    case "override":
      if (ziggyControl) {
        print("OVERRIDE DECLINED");
        print("ZIGGY: WHAT DO YOU THINK YOU ARE DOING?");
      } else {
        print("UNKNOWN COMMAND");
      }
      input.focus();
      return;

    case "logout":
      if (ziggyControl) {
        print("LOGOUT FAILED");
        print("ZIGGY: NICE TRY.");
      } else {
        print("UNKNOWN COMMAND");
      }
      input.focus();
      return;
  }

  /* =====================
     GATE COMMAND HANDLING
     ===================== */

  // Matches: open surface_gate3 / close underground_gate12
  const gateMatch = cmd.match(/^(open|close)\s+(surface|underground)_gate(\d+)$/);

  if (gateMatch) {
    const action = gateMatch[1];
    const area = gateMatch[2];
    const gateNumber = gateMatch[3];

    print(`REQUEST: ${action.toUpperCase()} ${area.toUpperCase()}_GATE${gateNumber}`);

    if (ziggyControl) {
      gateAttempts++;

      setTimeout(() => {
        print("ACCESS DENIED");
        print("ZIGGY: Gate control is not assigned to you.");

        if (gateAttempts === 2) {
          print("ZIGGY: I suggest you stop.");
        }

        if (gateAttempts >= 3) {
          print("ZIGGY: Further attempts will be logged.");
        }
      }, 600);
    } else {
      print("ERROR: ADMIN SESSION REQUIRED");
    }

    input.focus();
    return;
  }

  /* =====================
     FALLBACK
     ===================== */

  print("UNKNOWN COMMAND");
  input.focus();
});

/* =====================
   PERSIST LINKS
   ===================== */

if (localStorage.getItem("camsUnlocked") === "true") {
  if (!document.getElementById("workstation-link")) {
    const w = document.createElement("a");
    w.href = "computer.html";
    w.textContent = "Open Workstation 07";
    w.id = "workstation-link";
    document.body.appendChild(w);
  }

  if (!document.getElementById("camera-link")) {
    const c = document.createElement("a");
    c.href = "cameras.html";
    c.textContent = "Open Security Cameras";
    c.id = "camera-link";
    document.body.appendChild(c);
  }
}
>>>>>>> 40b9b6b (Update)
=======
const input = document.getElementById("command");
const output = document.getElementById("output");

let ziggyControl = false;
let gateAttempts = 0;

if (!input || !output) console.error("Terminal elements missing.");

function print(text) {
  output.textContent += text + "\n";
  output.scrollTop = output.scrollHeight;
}

input.focus();

input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;

  const cmd = input.value.toLowerCase().trim();
  input.value = "";

  /* =====================
     STANDARD COMMANDS
     ===================== */

  switch (cmd) {
    case "help":
      print("AVAILABLE COMMANDS: STATUS, WORKSTATION, CAMERAS");
      if (ziggyControl) {
        print("NOTE: ADDITIONAL COMMANDS AVAILABLE: WHOAMI, OVERRIDE, LOGOUT");
        print("RESTRICTED: GATE CONTROL COMMANDS");
      }
      input.focus();
      return;

    case "status":
      print("SYSTEM STATUS: PARTIALLY ONLINE");
      setTimeout(() => print("... \n⚠ SECURITY EXCEPTION DETECTED"), 800);
      setTimeout(() => print("ADMIN SESSION INTERRUPTED"), 1600);
      setTimeout(() => {
        print("ACTIVE ADMIN SESSION");
        print("OPERATOR: ZIGGY");
        ziggyControl = true;
      }, 2400);
      input.focus();
      return;

    case "workstation":
      print("ACCESS GRANTED");
      localStorage.setItem("camsUnlocked", "true");
      if (!document.getElementById("workstation-link")) {
        const link = document.createElement("a");
        link.href = "computer.html";
        link.textContent = "Open Workstation 07";
        link.id = "workstation-link";
        document.body.appendChild(link);
      }
      input.focus();
      return;

    case "cameras":
      print("CAMERA SYSTEM ONLINE");
      if (!document.getElementById("camera-link")) {
        const link = document.createElement("a");
        link.href = "cameras.html";
        link.textContent = "Open Security Cameras";
        link.id = "camera-link";
        document.body.appendChild(link);
      }
      input.focus();
      return;

    /* =====================
       ZIGGY-ONLY COMMANDS
       ===================== */

    case "whoami":
      if (ziggyControl) {
        print("CURRENT USER: GUEST");
        print("CURRENT AUTHORITY: ZIGGY");
      } else {
        print("UNKNOWN COMMAND");
      }
      input.focus();
      return;

    case "override":
      if (ziggyControl) {
        print("OVERRIDE DECLINED");
        print("ZIGGY: WHAT DO YOU THINK YOU ARE DOING?");
      } else {
        print("UNKNOWN COMMAND");
      }
      input.focus();
      return;

    case "logout":
      if (ziggyControl) {
        print("LOGOUT FAILED");
        print("ZIGGY: NICE TRY.");
      } else {
        print("UNKNOWN COMMAND");
      }
      input.focus();
      return;
  }

  /* =====================
     GATE COMMAND HANDLING
     ===================== */

  // Matches: open surface_gate3 / close underground_gate12
  const gateMatch = cmd.match(/^(open|close)\s+(surface|underground)_gate(\d+)$/);

  if (gateMatch) {
    const action = gateMatch[1];
    const area = gateMatch[2];
    const gateNumber = gateMatch[3];

    print(`REQUEST: ${action.toUpperCase()} ${area.toUpperCase()}_GATE${gateNumber}`);

    if (ziggyControl) {
      gateAttempts++;

      setTimeout(() => {
        print("ACCESS DENIED");
        print("ZIGGY: Gate control is not assigned to you.");

        if (gateAttempts === 2) {
          print("ZIGGY: I suggest you stop.");
        }

        if (gateAttempts >= 3) {
          print("ZIGGY: Further attempts will be logged.");
        }
      }, 600);
    } else {
      print("ERROR: ADMIN SESSION REQUIRED");
    }

    input.focus();
    return;
  }

  /* =====================
     FALLBACK
     ===================== */

  print("UNKNOWN COMMAND");
  input.focus();
});

/* =====================
   PERSIST LINKS
   ===================== */

if (localStorage.getItem("camsUnlocked") === "true") {
  if (!document.getElementById("workstation-link")) {
    const w = document.createElement("a");
    w.href = "computer.html";
    w.textContent = "Open Workstation 07";
    w.id = "workstation-link";
    document.body.appendChild(w);
  }

  if (!document.getElementById("camera-link")) {
    const c = document.createElement("a");
    c.href = "cameras.html";
    c.textContent = "Open Security Cameras";
    c.id = "camera-link";
    document.body.appendChild(c);
  }
}
>>>>>>> 40b9b6b (Update)
>>>>>>> ad82882 (Update site files with latest changes)
