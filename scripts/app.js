let startTime = null;
let currentActivity = '';
let activityData = JSON.parse(localStorage.getItem("activityData")) || {};

const timerDisplay = document.getElementById('timer-display');
let intervalId;

function startTracking(activity) {
  stopTracking(); // stop previous activity
  currentActivity = activity;
  startTime = new Date();
  intervalId = setInterval(updateTimer, 1000);
}

function stopTracking() {
  if (startTime && currentActivity) {
    const elapsed = Math.floor((new Date() - startTime) / 1000); // in seconds
    activityData[currentActivity] = (activityData[currentActivity] || 0) + elapsed;
    localStorage.setItem("activityData", JSON.stringify(activityData));
    renderChart();
  }
  clearInterval(intervalId);
  timerDisplay.textContent = '00:00:00';
  startTime = null;
  currentActivity = '';
}

function updateTimer() {
  const now = new Date();
  const elapsed = Math.floor((now - startTime) / 1000);
  timerDisplay.textContent = formatTime(elapsed);
}

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function renderChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  const labels = Object.keys(activityData);
  const data = Object.values(activityData).map(sec => +(sec / 60).toFixed(2)); // minutes

  if (window.myChart) window.myChart.destroy();

  window.myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels,
      datasets: [{
        label: 'Time in minutes',
        data,
        backgroundColor: ['#0077cc', '#00b894', '#fdcb6e', '#e17055', '#6c5ce7']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

window.onload = renderChart;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('live-clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Start the clock
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to display immediately