

const API = "https://bus-timetable-backend.onrender.com";

function sendOTP() {
  fetch(`${API}/admin/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value })
  })
  .then(res => {
    if (!res.ok) throw new Error("Request failed");
    return res.json();
  })
  .then(d => otpMsg.innerText = d.message)
  .catch(() => {
    otpMsg.innerText = "❌ Server error. Try again.";
  });
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
  .then(res => {
    if (!res.ok) throw new Error("Reset failed");
    return res.json();
  })
  .then(d => resetMsg.innerText = d.message)
  .catch(() => {
    resetMsg.innerText = "❌ Server error. Try again.";
  });
}
