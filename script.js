// Nav + mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger?.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Counters
const counters = document.querySelectorAll('[data-count]');
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, target = +el.dataset.count; let cur = 0;
  const t = setInterval(() => { cur += 1; el.textContent = cur; if (cur >= target) clearInterval(t); }, 60);
  cio.unobserve(el);
}), { threshold: .6 });
counters.forEach(c => cio.observe(c));

// Carousel
const slides = [...document.querySelectorAll('#slides .slide')];
const dotsWrap = document.getElementById('dots');
let idx = 0, timer;
slides.forEach((_, i) => {
  const d = document.createElement('i');
  if (i === 0) d.classList.add('on');
  d.onclick = () => go(i);
  dotsWrap.appendChild(d);
});
function go(i) {
  idx = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle('active', k === idx));
  dotsWrap.querySelectorAll('i').forEach((d, k) => d.classList.toggle('on', k === idx));
  restart();
}
function restart() { clearInterval(timer); timer = setInterval(() => go(idx + 1), 5000); }
document.getElementById('prevBtn').onclick = () => go(idx - 1);
document.getElementById('nextBtn').onclick = () => go(idx + 1);
restart();

// Academy CTA prefill
document.querySelectorAll('[data-academy]').forEach(b => b.addEventListener('click', () => {
  const need = document.querySelector('select[name="need"]');
  if (need) need.value = 'EdTech Ecosystems (AI-first campus)';
}));

// Lead form — opens WhatsApp with prefilled enquiry to +919505009699
document.getElementById('leadForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!f.checkValidity()) { f.reportValidity(); return; }
  const data = Object.fromEntries(new FormData(f).entries());
  const note = document.getElementById('formNote');
  note.textContent = 'Deploying your vision…';
  const msg =
`Hello BEYONDX, I have a project vision:
--------------------------
Name: ${data.name}
Organization: ${data.org || '-'}
Budget Tier: ${data.budget}
Tech Need: ${data.need}

Vision / Brief:
${data.vision}`;
  const url = `https://wa.me/919505009699?text=${encodeURIComponent(msg)}`;
  setTimeout(() => {
    window.open(url, '_blank');
    note.textContent = '✓ Opening WhatsApp — press send to deliver your vision. We reply within 24h.';
    f.reset();
  }, 600);
});
