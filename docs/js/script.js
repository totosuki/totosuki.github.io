document.addEventListener('DOMContentLoaded', () => {
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            const toggleBtn  = document.getElementById('darkModeToggle');
            const githubIcon = document.getElementById('githubIcon');
        
            function updateGithubIcon() {
                if (document.body.classList.contains('dark-mode')) {
                    githubIcon.src = '/assets/github-mark-white.svg';
                } else {
                    githubIcon.src = '/assets/github-mark-dark.svg';
                }
            }
        
            const saved = localStorage.getItem('theme');
            if (saved === 'dark' || !saved) {
                document.body.classList.add('dark-mode');
            }

            updateGithubIcon();
        
            toggleBtn?.addEventListener('click', () => {
                const isDark = document.body.classList.toggle('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateGithubIcon();
            });
        });
    
    const statusBar = document.getElementById('status-bar');
    if (statusBar) {
        document.querySelectorAll('.card[data-desc]').forEach(card => {
            const desc = card.dataset.desc;
            card.addEventListener('mouseenter', () => { statusBar.textContent = desc; });
            card.addEventListener('focus',      () => { statusBar.textContent = desc; });
            card.addEventListener('mouseleave', () => { statusBar.textContent = '';   });
            card.addEventListener('blur',       () => { statusBar.textContent = '';   });
        });
    }
});