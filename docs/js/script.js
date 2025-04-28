document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn  = document.getElementById('darkModeToggle');
    const githubIcon = document.getElementById('githubIcon');

    function updateGithubIcon() {
        if (document.body.classList.contains('dark-mode')) {
            githubIcon.src = 'assets/github-mark-white.svg';
        } else {
            githubIcon.src = 'assets/github-mark-dark.svg';
        }
    }

    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || !saved) {
        document.body.classList.add('dark-mode');
    }

    toggleBtn?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateGithubIcon();
    });

    updateGithubIcon();
});