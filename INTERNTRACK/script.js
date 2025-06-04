// Charts
const deptCtx = document.getElementById('deptChart').getContext('2d');
new Chart(deptCtx, {
  type: 'bar',
  data: {
    labels: ['IS', 'Radar', 'Antenna', 'Embedded', 'Mechanical'],
    datasets: [{
      label: 'Present Today',
      data: [20, 18, 15, 22, 25],
      backgroundColor: '#697565'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const trendCtx = document.getElementById('trendChart').getContext('2d');
new Chart(trendCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Total Present',
      data: [95, 102, 97, 105, 100],
      borderColor: '#697565',
      backgroundColor: 'transparent',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Sidebar collapse toggle
document.getElementById('toggleSidebar').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
  document.querySelector('.main-content').style.marginLeft = sidebar.classList.contains('collapsed') ? '60px' : '240px';
});

// FullCalendar
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 'auto',
    events: [
      { title: 'Cybersecurity Basics', date: '2025-06-06' },
      { title: 'RF Systems Workshop', date: '2025-06-08' },
      { title: 'Ethics in Engineering', date: '2025-06-10' },
      { title: 'Report Deadline', date: '2025-06-15' }
    ]
  });
  calendar.render();
});
