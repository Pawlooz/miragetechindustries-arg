const input = document.getElementById("command");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.toLowerCase();
    input.value = "";

    if (cmd === "help") {
      output.textContent += "\nAVAILABLE COMMANDS: STATUS, CAMERAS";
    }
    else if (cmd === "status") {
      output.textContent += "\nSYSTEM STATUS: PARTIALLY ONLINE";
    }
    else if (cmd === "cameras") {
      output.textContent += "\nACCESS GRANTED";
      localStorage.setItem("camsUnlocked", "true");
    }
    else {
      output.textContent += "\nUNKNOWN COMMAND";
    }
  }
});
console.log("WHY ARE YOU LOOKING HERE?");
console.log("CAM 04 IS NOT SAFE.");