const API = "https://bus-timetable-backend.onrender.com";

function sendOTP() {
  const email = document.getElementById("email").value;

  fetch(`${API}/admin/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(d => otpMsg.innerText = d.message);
}

function resetPassword() {
  fetch(`${API}/admin/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      otp: otp.value,
      newPassword: newPassword.value
    })
  })
  .then(res => res.json())
  .then(d => resetMsg.innerText = d.message);
}
