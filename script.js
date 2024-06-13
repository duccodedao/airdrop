document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy số lần truy cập từ Local Storage
    let visitCount = localStorage.getItem('visitCount');

    // Nếu chưa có giá trị thì đặt là 0
    if (visitCount === null) {
        visitCount = 0;
    }

    // Tăng số lần truy cập lên 1
    visitCount++;

    // Cập nhật giá trị trong Local Storage
    localStorage.setItem('visitCount', visitCount);

    // Hiển thị số lần truy cập trên trang
    document.getElementById('visitCount').innerText = visitCount;
});



document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.cards-container');
  let currentIndex = 0;

  container.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      currentIndex = (currentIndex + 1) % container.children.length;
    } else {
      currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
    }

    const offset = -currentIndex * container.children[0].clientWidth;
    container.style.transform = `translateX(${offset}px)`;
  });

  // Countdown Timer
  const countdown = () => {
    const countDownDate = new Date("Jul 14, 2024 17:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerText = "EXPIRED";
    }
  };

  const x = setInterval(countdown, 1000);
});
