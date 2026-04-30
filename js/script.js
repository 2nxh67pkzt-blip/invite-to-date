const yesBtn = document.getElementById('yes-button');
const yesBtn2 = document.getElementById('yes-button2');
const yesBtn3 = document.getElementById ('yes-button3')
const noBtn = document.getElementById('no-button');
const wrapper = document.querySelector('.main__wrapper')

if (noBtn) {
  noBtn.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
}

if (yesBtn) {
  yesBtn.addEventListener('click', () => {
    location.href = './html/page2.html';
  });
}

if (yesBtn2) {
  yesBtn2.addEventListener('click', () => {
    location.href = '../html/page3.html';
  });
}

if (yesBtn3) {
  yesBtn3.addEventListener('click', () => {
    location.href = '../html/lastPage.html';
  });
}