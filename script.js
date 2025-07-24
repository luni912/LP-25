  const today = new Date();
  const chatStart = new Date("2025-03-26");
  const firstMeet = new Date("2025-04-19");
  const loveStart = new Date("2025-05-05");

  function getDaysDiff(fromDate) {
    const diff = today - fromDate;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  document.getElementById("chat-days").textContent = getDaysDiff(chatStart);
  document.getElementById("meet-days").textContent = getDaysDiff(firstMeet);
  document.getElementById("love-days").textContent = getDaysDiff(loveStart);
function countUp(id, target) {
  let current = 0;
  const span = document.getElementById(id);
  const interval = setInterval(() => {
    current++;
    span.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 20);
}

countUp("chat-days", getDaysDiff(chatStart));
countUp("meet-days", getDaysDiff(firstMeet));
countUp("love-days", getDaysDiff(loveStart));

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === "3") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "./home.html"; // 登入成功跳主頁
  } else {
    alert("密碼錯誤！");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "./login.html"; // 如果沒登入，回去輸密碼頁
  }
});