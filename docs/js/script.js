document.addEventListener('DOMContentLoaded', async () => {
  const root = document.documentElement;
  try {
    const navbarHTML = await (await fetch('/navbar.html')).text();
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
  }
  catch (e) {
    console.error('Navbar load failed', e);
  }

  const toggleBtn  = document.getElementById('darkModeToggle');
  const githubIcon = document.getElementById('githubIcon');

  if (localStorage.getItem('theme') === 'light') {
    root.classList.add('light-mode');
  }

  const updateGithubIcon = () => {
    githubIcon?.setAttribute(
      'src',
      root.classList.contains('light-mode')
        ? '/assets/github-mark-dark.svg'
        : '/assets/github-mark-white.svg'
    );
  };

  toggleBtn?.addEventListener('click', () => {
    const isLight = root.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateGithubIcon();
  });

  updateGithubIcon();

  const statusBar = document.getElementById('status-bar');
  if (statusBar) {
    ['mouseover', 'focusin'].forEach(evt =>
      document.addEventListener(evt, e => {
        const card = e.target.closest('.card[data-desc]');
        statusBar.textContent = card?.dataset.desc ?? '';
      })
    );
  }

  const isExternal = (url) => {
    return url.startsWith('http') && !url.includes(location.hostname);
  };
  
  document.querySelectorAll('.stackedit__right a[href]').forEach(link => {
    if (!link.hasAttribute('target') && isExternal(link.href)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});