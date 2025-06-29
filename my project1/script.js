// Ami ekhane kichu optional effect rakhlam
// Parle tumi use korte paro show/hide password, validation etc.

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form reload
  alert("Login button clicked!");
});
