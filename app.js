function generateMessage() {
  const name = document.getElementById("name").value.trim();
  const start = document.getElementById("startDate").value;
  const end = document.getElementById("endDate").value;
  const reason = document.getElementById("reason").value.trim() || "out of the office";
  const backup = document.getElementById("backup").value.trim();
  const errorDiv = document.getElementById("error");

  // Reset error
  errorDiv.style.display = "none";
  errorDiv.textContent = "";

  // Validation
  if (!name) return showError("Please enter your name.");
  if (!start) return showError("Please select your out-of-office start date.");
  if (!end) return showError("Please select your return date.");
  if (new Date(end) < new Date(start))
    return showError("Return date cannot be before the start date.");
  if (!backup) return showError("Please provide a backup contact.");

  // Generate message
  const message = `
Hi,

Thanks for your message. I’ll be ${reason} from ${start} through ${end} and will have limited access to email.

For urgent matters, please contact ${backup}.

I’ll respond as soon as I’m back.

Best,
${name}
`.trim();

  document.getElementById("output").value = message;
}

function showError(msg) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = msg;
  errorDiv.style.display = "block";
}

function copyMessage() {
  const output = document.getElementById("output");

  if (!output.value) {
    alert("Please generate a message first.");
    return;
  }

  output.select();
  document.execCommand("copy");
  alert("Message copied to clipboard!");
}