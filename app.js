/**
 * Accord Youth Assembly - Interactive Controller
 * Implements specifications from DESIGN.md
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initMusicPlayer();
  initCommitteeFilters();
  initModals();
  initMobileMenu();
});

/* ==========================================================================
   1. Live Countdown Timer (Target: Nov 21, 2026)
   ========================================================================== */
function initCountdown() {
  const targetDate = new Date('November 21, 2026 09:00:00 GMT+0530').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = pad(days);
    if (hoursEl) hoursEl.innerText = pad(hours);
    if (minutesEl) minutesEl.innerText = pad(minutes);
    if (secondsEl) secondsEl.innerText = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   2. Interactive Nanku Music Player Widget
   ========================================================================== */
const nankuPlaylist = [
  { title: "Kaafizyada", duration: "3:18", streams: "24M+" },
  { title: "Faasle", duration: "2:54", streams: "16M+" },
  { title: "Karun Main Kya", duration: "3:42", streams: "12M+" },
  { title: "Prarthana", duration: "3:10", streams: "9M+" },
  { title: "Kya Baat Hai", duration: "2:45", streams: "7M+" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let playbackProgress = 35;
let playInterval = null;

function initMusicPlayer() {
  const playBtn = document.getElementById('playPauseBtn');
  const prevBtn = document.getElementById('prevTrackBtn');
  const nextBtn = document.getElementById('nextTrackBtn');
  const trackTitle = document.getElementById('currentTrackTitle');
  const progressBar = document.getElementById('progressActive');
  const waves = document.querySelectorAll('.audio-bar');
  const currentTimeEl = document.getElementById('currentTime');

  function loadTrack(index) {
    currentTrackIndex = index;
    const track = nankuPlaylist[currentTrackIndex];
    if (trackTitle) trackTitle.innerText = track.title;
    playbackProgress = 0;
    if (progressBar) progressBar.style.width = '0%';
    if (currentTimeEl) currentTimeEl.innerText = '0:00';
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      if (playBtn) playBtn.innerHTML = '❚❚';
      waves.forEach(bar => bar.style.animationPlayState = 'running');
      playInterval = setInterval(() => {
        playbackProgress += 1;
        if (playbackProgress > 100) {
          playbackProgress = 0;
          nextTrack();
        }
        if (progressBar) progressBar.style.width = `${playbackProgress}%`;
        const totalSec = Math.floor((playbackProgress / 100) * 198);
        const mins = Math.floor(totalSec / 60);
        const secs = String(totalSec % 60).padStart(2, '0');
        if (currentTimeEl) currentTimeEl.innerText = `${mins}:${secs}`;
      }, 500);
    } else {
      if (playBtn) playBtn.innerHTML = '▶';
      waves.forEach(bar => bar.style.animationPlayState = 'paused');
      clearInterval(playInterval);
    }
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % nankuPlaylist.length;
    loadTrack(currentTrackIndex);
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + nankuPlaylist.length) % nankuPlaylist.length;
    loadTrack(currentTrackIndex);
  }

  if (playBtn) playBtn.addEventListener('click', togglePlay);
  if (nextBtn) nextBtn.addEventListener('click', nextTrack);
  if (prevBtn) prevBtn.addEventListener('click', prevTrack);

  // Initial state paused
  waves.forEach(bar => bar.style.animationPlayState = 'paused');
}

/* ==========================================================================
   3. Committee Filter Tabs
   ========================================================================== */
function initCommitteeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.committee-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   4. Modals: Agendas and Ticket Registration
   ========================================================================== */
const committeeAgendas = {
  unsc: {
    title: "United Nations Security Council (UNSC)",
    theme: "Global Peace & Asymmetric Warfare",
    agenda: "Addressing the resurgence of regional state-sponsored conflicts and establishing cyber-treaties in digital warfare zones."
  },
  ncw: {
    title: "National Commission for Women (NCW)",
    theme: "Gender Equity & Workplace Safety",
    agenda: "Legislative reform for digital harassment protections and evaluating economic safety nets for women in informal sectors."
  },
  loksabha: {
    title: "Lok Sabha (Indian Youth Parliament)",
    theme: "National Youth Policy 2026",
    agenda: "Deliberation on youth entrepreneurship subsidies, AI regulation in education, and student mental health mandates."
  },
  aiim: {
    title: "All India Influencers Meet (AIIM)",
    theme: "Creator Economy & Digital Ethics",
    agenda: "Monetization frameworks, brand disclosure laws, algorithmic bias, and community building in Gen Z media."
  },
  ip: {
    title: "International Press (IP)",
    theme: "Photojournalism & Investigative Reporting",
    agenda: "Real-time summit coverage, holding delegates accountable through press conferences, editorials, and visual storytelling."
  },
  rmc: {
    title: "Raipur Municipal Corporation (RMC)",
    theme: "Smart Sustainable Urban Development",
    agenda: "Comprehensive infrastructure planning for Raipur: sustainable green belts, waste management, and civic transit systems."
  }
};

function initModals() {
  const agendaModal = document.getElementById('agendaModal');
  const registerModal = document.getElementById('registerModal');
  const agendaCloseBtn = document.getElementById('closeAgendaBtn');
  const registerCloseBtn = document.getElementById('closeRegisterBtn');

  // Open Agenda Modal
  document.querySelectorAll('.agenda-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const committeeKey = btn.getAttribute('data-committee');
      const data = committeeAgendas[committeeKey];
      if (data && agendaModal) {
        document.getElementById('modalCommitteeTitle').innerText = data.title;
        document.getElementById('modalCommitteeTheme').innerText = data.theme;
        document.getElementById('modalCommitteeAgenda').innerText = data.agenda;
        agendaModal.classList.add('active');
      }
    });
  });

  // Open Register Modal
  document.querySelectorAll('.trigger-register-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const passType = btn.getAttribute('data-pass') || 'All-Access Pass';
      const passSelect = document.getElementById('regPassType');
      if (passSelect) passSelect.value = passType;
      if (registerModal) registerModal.classList.add('active');
    });
  });

  // Close modals
  if (agendaCloseBtn) agendaCloseBtn.addEventListener('click', () => agendaModal.classList.remove('active'));
  if (registerCloseBtn) registerCloseBtn.addEventListener('click', () => registerModal.classList.remove('active'));

  window.addEventListener('click', (e) => {
    if (e.target === agendaModal) agendaModal.classList.remove('active');
    if (e.target === registerModal) registerModal.classList.remove('active');
  });

  // Handle Register Form Submission
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value;
      const pass = document.getElementById('regPassType').value;
      alert(`🎉 Welcome aboard, ${name}!\nYour spot for [${pass}] at Accord Youth Assembly 2026 has been reserved. Check your email for booking pass details!`);
      registerModal.classList.remove('active');
      regForm.reset();
    });
  }
}

/* ==========================================================================
   5. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.width = '100%';
      navLinks.style.background = '#0B1026';
      navLinks.style.padding = '2rem';
      navLinks.style.borderBottom = '4px solid #FFFFFF';
    });
  }
}
