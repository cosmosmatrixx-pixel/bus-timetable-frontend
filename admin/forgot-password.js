function sendOTP() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter email");
    return;
  }

  fetch("http://localhost:3000/admin/forgot-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("otpMsg").innerText = data.message;
  });
}

function resetPassword() {
  const email = document.getElementById("email").value;
  const otp = document.getElementById("otp").value;
  const newPassword = document.getElementById("newPassword").value;

  if (!email || !otp || !newPassword) {
    alert("Please fill all fields");
    return;
  }

  fetch("http://localhost:3000/admin/reset-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      otp,
      newPassword
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("resetMsg").innerText = data.message;
  });
}
