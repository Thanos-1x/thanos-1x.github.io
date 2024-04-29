let hours = parseInt(localStorage.getItem('hours')) || 0;
let minutes = parseInt(localStorage.getItem('minutes')) || 30;
let seconds = parseInt(localStorage.getItem('seconds')) || 0;

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateTimer() {
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    if (hours === 0 && minutes === 0 && seconds === 0) {
        document.getElementById('banner').style.color = '#000000';
        document.getElementById('banner').textContent = 'انتهى التأخير!';
    } else {
        setTimeout(updateTimer, 1000);
        decrementTime();
    }
}

function decrementTime() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    }

    // حفظ العداد في localStorage
    localStorage.setItem('hours', hours);
    localStorage.setItem('minutes', minutes);
    localStorage.setItem('seconds', seconds);
}

// تحديث العداد عند تحميل الصفحة
updateTimer();
