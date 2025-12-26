function openFolder(name) {
  const passwordRequiredFolders = {
    "admin": "0417",
    "experiments": "1007" // Example password if you want experiments locked
  };

  // Redirect folder if it exists and unlocked
  const folderUrls = {
    "logs": "logs.html",
    "admin": "admin.html",
    "experiments": "experiments.html",
    "maintenance": "maintenance.html",
    "employee_handbook": "employee_handbook.html",
    "personal_notes": "personal_notes.html"
  };

  if (!folderUrls[name]) {
    alert("Folder does not exist.");
    return;
  }

  // Check if folder is password protected
  if (passwordRequiredFolders[name]) {
    const unlocked = localStorage.getItem(name + "Unlocked");
    if (!unlocked) {
      const pass = prompt("PASSWORD REQUIRED FOR " + name.toUpperCase());
      if (pass === passwordRequiredFolders[name]) {
        localStorage.setItem(name + "Unlocked", "true");
      } else {
        alert("ACCESS DENIED");
        return;
      }
    }
  }

  // Redirect to folder page
  window.location.href = folderUrls[name];
}
>>>>>>> 40b9b6b (Update)
