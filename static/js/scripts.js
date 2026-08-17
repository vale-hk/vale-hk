document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const navLinks = document.querySelectorAll('.nav-link');

    function openMenu() {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Trigger reflow to ensure animation runs
        void backdrop.offsetWidth;
        backdrop.style.opacity = '1';
    }

    function closeMenu() {
        sidebar.classList.add('-translate-x-full');
        backdrop.style.opacity = '0';
        document.body.style.overflow = '';

        setTimeout(() => {
            backdrop.classList.add('hidden');
        }, 300);
    }

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                closeMenu();
            }
        });
    });
});