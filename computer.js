function openFolder(name) {
  if (name === "logs") {
    window.location.href = "logs.html";
    return;
  }

  if (name === "admin") {
    if (localStorage.getItem("adminUnlocked") === "true") {
      window.location.href = "admin.html";
      return;
    }

    const pass = prompt("PASSWORD REQUIRED");

    if (pass === "0417") {
      localStorage.setItem("adminUnlocked", "true");
      window.location.href = "admin.html";
    } else {
      alert("ACCESS DENIED");
    }
  }
}
