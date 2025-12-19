const API = "https://bus-timetable-backend.onrender.com";

function sendOTP() {
  fetch(`${API}/admin/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value })
  })
  .then(r => r.json())
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
  .then(r => r.json())
  .then(d => resetMsg.innerText = d.message);
}
