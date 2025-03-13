const downloadBtn = document.getElementById('downloadBtn');
const countdownText = document.getElementById('countdown');
const downloadLink = 'https://example.com/file.zip'; // Ganti link download lo di sini

let timer = 5; // Waktu tunggu 5 detik

const countdownInterval = setInterval(() => {
  countdownText.innerText = `Tunggu ${timer} detik...`;
  timer--;

  if (timer < 0) {
    clearInterval(countdownInterval);
    countdownText.innerText = 'Siap untuk download!';
    downloadBtn.classList.add('active');
    downloadBtn.disabled = false;

    downloadBtn.addEventListener('click', () => {
      window.location.href = downloadLink;
    });
  }
}, 1000);
