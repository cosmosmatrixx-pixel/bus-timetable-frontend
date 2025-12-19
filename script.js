function searchBus() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  window.location.href = `result.html?from=${from}&to=${to}`;
}
