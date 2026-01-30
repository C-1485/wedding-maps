const PARTICLE_COUNT = 40;
const colors = ['wasabigreen', 'groundginger'];

const particlesContainer = document.querySelector('.particles');

for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle', colors[Math.floor(Math.random() * colors.length)]);

    const size = Math.random() * 20 + 5; // 4–10px
    const left = Math.random() * 100;   // %
    const duration = Math.random() * 15 + 10; // 20–40s
    const delay = Math.random() * 10;   // stagger start

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${left}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
}
