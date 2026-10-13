const slides = [
  { title: 'BUILDING<br><span>YOUR VISION.</span>', copy: 'From bold ideas to lasting landmarks, we bring precision, purpose and craftsmanship to every project.' },
  { title: 'CRAFTING<br><span>WHAT LASTS.</span>', copy: 'Thoughtful planning, trusted people and exceptional workmanship — from foundation to finish.' },
  { title: 'MADE FOR<br><span>THE FUTURE.</span>', copy: 'We create places and infrastructure that make a difference for generations to come.' }
];
let currentSlide = 0;
const heroTitle = document.querySelector('#hero-title');
const heroCopy = document.querySelector('#hero-copy');
const slideNumber = document.querySelector('#slide-number');
const bgOne = document.querySelector('.hero-bg-one');
const bgTwo = document.querySelector('.hero-bg-two');
function setSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  heroTitle.innerHTML = slides[currentSlide].title;
  heroCopy.textContent = slides[currentSlide].copy;
  slideNumber.textContent = String(currentSlide + 1).padStart(2, '0');
  bgOne.style.opacity = currentSlide === 0 ? '1' : '0';
  bgTwo.style.opacity = currentSlide === 0 ? '0' : '1';
}
document.querySelector('#prev-slide').addEventListener('click', () => setSlide(currentSlide - 1));
document.querySelector('#next-slide').addEventListener('click', () => setSlide(currentSlide + 1));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === button));
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const testimonials = [
  { text: 'The team made the whole process easy from the planning stage to the final handover. They listened, brought great ideas and delivered exactly what we needed.', name: 'Richard Dowson', role: 'Property Owner', initials: 'RD' },
  { text: 'Every week the team came to the table with a positive attitude and a solution-focused mindset. The build was organised, professional and genuinely enjoyable.', name: 'Lisa Jordan', role: 'Commercial Client', initials: 'LJ' },
  { text: 'Their project managers and site teams were outstanding partners. The quality of work and communication was better than any contractor we have worked with.', name: 'Michael Anderson', role: 'Development Director', initials: 'MA' }
];
let testimonialIndex = 0;
function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  const t = testimonials[testimonialIndex];
  document.querySelector('#testimonial-text').textContent = t.text;
  document.querySelector('#testimonial-name').textContent = t.name;
  document.querySelector('#testimonial-role').textContent = t.role;
  document.querySelector('.avatar').textContent = t.initials;
  document.querySelector('#testimonial-count').textContent = `${String(testimonialIndex + 1).padStart(2, '0')} / 03`;
}
document.querySelector('#testimonial-prev').addEventListener('click', () => showTestimonial(testimonialIndex - 1));
document.querySelector('#testimonial-next').addEventListener('click', () => showTestimonial(testimonialIndex + 1));

document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.querySelector('#form-status').textContent = 'Thank you! Your request has been prepared. Connect this form to your email or backend to receive submissions.';
  form.reset();
});
