document.addEventListener("DOMContentLoaded", function () {
  const tips = [
    "Справжній смак кави розкривається в тиші.",
    "Не поспішай — насолода в кожному ковтку.",
    "Темна обсмажка — улюблений вибір нашого шефа.",
    "У кави є запах дому, навіть якщо ти гуль.",
    "Кава — єдине, що поєднує людей і гулів.",
    "Найкраща розмова починається з кави.",
  ];

  const tipElement = document.getElementById("dailyTip");
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipElement.textContent = "☕ Порада дня: " + tips[randomIndex];
});

document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  const coffeeCountEl = document.getElementById('coffeeCount');

  function increaseCount() {
    count += Math.floor(Math.random() * 3) + 1; // додаємо від 1 до 3 чашок
    coffeeCountEl.textContent = count;
  }

  increaseCount(); // Початкове збільшення при завантаженні
  setInterval(increaseCount, 10000); // Кожні 10 секунд оновлюємо
});
