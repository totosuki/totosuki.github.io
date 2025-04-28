document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn  = document.getElementById('darkModeToggle');

    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || !saved) {
        document.body.classList.add('dark-mode');
    }

    toggleBtn?.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});