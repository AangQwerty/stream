const downloadBtn = document.getElementById('downloadBtn');
const countdownText = document.getElementById('countdown');

// Ganti link download di sini
const downloadLink = 'https://www.mediafire.com/file/mmn6h6mrbzx93ul/Stark_x_Fern.mp4/file';

let timer = 5; // Waktu tunggu 5 detik

// Hitung mundur
const countdownInterval = setInterval(() => {
  countdownText.innerText = `Tunggu ${timer} detik...`;
  timer--;

  if (timer < 0) {
    clearInterval(countdownInterval);
    countdownText.innerText = 'Siap untuk download!';
    downloadBtn.classList.add('active');
    downloadBtn.disabled = false; // Aktifkan tombol download
  }
}, 1000);

// Event saat tombol ditekan
downloadBtn.addEventListener('click', () => {
  window.location.href = downloadLink;
});
