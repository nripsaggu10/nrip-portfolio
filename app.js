'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const header = document.querySelector('.site-header');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!header.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 25); }
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a[href^="#"]').forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => navObserver.observe(section));
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.about-grid, .experience-grid, .featured-project, .achievement, .toolbox').forEach(el => {
      el.classList.add('reveal-ready');
      revealObserver.observe(el);
    });
  }
}

const projects = {
  querywear: {
    title: 'QueryWear',
    period: 'SEPTEMBER 2024 — JANUARY 2025',
    intro: 'A natural language to SQL system designed to let people query a database using everyday language.',
    details: [
      'Built a natural language interface with Google PaLM and LangChain to translate questions into database queries.',
      'Improved query accuracy by 89% using Hugging Face models and ChromaDB for similarity search.',
      'Used few-shot learning to improve SQL translation accuracy by 55% and database efficiency by 20%.'
    ],
    tech: ['Google PaLM', 'LangChain', 'Streamlit', 'Hugging Face', 'ChromaDB', 'MySQL'],
    url: 'https://github.com/nripsaggu10/querywear'
  },
  healthfirst: {
    title: 'HealthFirst',
    period: 'MARCH 2023 — OCTOBER 2023',
    intro: 'A healthcare platform developed as a team capstone project, with my work focused on backend engineering and machine learning integration.',
    details: [
      'Expanded APIs to streamline patient data retrieval and improve system efficiency by 40%.',
      'Optimized a disease prediction chatbot using Random Forest and Decision Trees, improving diagnostic accuracy by 18%.',
      'Integrated the backend and database with indexing and caching to improve data retrieval speed by 40%.'
    ],
    tech: ['Python', 'C++', 'React.js', 'MySQL', 'Random Forest', 'Decision Trees'],
    url: 'https://github.com/nripsaggu10/Healthfirst'
  }
};
const dialog = document.querySelector('#project-dialog');
let lastProjectTrigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    lastProjectTrigger = button;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-period').textContent = project.period;
    document.querySelector('#dialog-intro').textContent = project.intro;
    const details = document.querySelector('#dialog-details');
    const tech = document.querySelector('#dialog-tech');
    details.replaceChildren(...project.details.map(text => {
      const li = document.createElement('li'); li.textContent = text; return li;
    }));
    tech.replaceChildren(...project.tech.map(text => {
      const li = document.createElement('li'); li.textContent = text; return li;
    }));
    document.querySelector('#dialog-source').href = project.url;
    dialog.showModal();
    document.body.classList.add('modal-open');
    document.querySelector('.dialog-close').focus();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastProjectTrigger?.focus();
});

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
document.querySelector('#copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('nripdevsaggu316@gmail.com');
    showToast('Email address copied');
  } catch {
    showToast('Select the email address to copy it.');
  }
});
