document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('checkbox');
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');

  // Handle sidebar toggle
  checkbox.addEventListener('change', function () {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (checkbox.checked) {
        sidebar.classList.add('active');
      } else {
        sidebar.classList.remove('active');
      }
      sidebar.classList.remove('collapsed');
      mainContent.classList.remove('expanded');
    } else {
      if (checkbox.checked) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('expanded');
      } else {
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('expanded');
      }
      sidebar.classList.remove('active');
    }
  });

  // Auto-reset on window resize
  window.addEventListener('resize', function () {
    checkbox.checked = false;
    sidebar.classList.remove('active');
    sidebar.classList.remove('collapsed');
    mainContent.classList.remove('expanded');
  });

  // Close sidebar on outside click (mobile)
  document.addEventListener('click', function (e) {
    const isMobile = window.innerWidth <= 768;
    if (
      isMobile &&
      sidebar.classList.contains('active') &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      checkbox.checked = false;
      sidebar.classList.remove('active');
    }
  });

  // Submenu toggle with localStorage memory
  const submenuToggles = document.querySelectorAll('.submenu-toggle');

  submenuToggles.forEach((toggle, index) => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      const isOpen = submenu.classList.contains('open');

      // Close all other submenus
      document.querySelectorAll('.submenu').forEach((menu) => {
        menu.classList.remove('open');
        const otherArrow = menu.previousElementSibling?.querySelector('.arrow');
        if (otherArrow) otherArrow.classList.remove('rotated');
      });

      // Toggle current submenu
      if (!isOpen) {
        submenu.classList.add('open');
        localStorage.setItem('openSubmenuIndex', index);
      } else {
        submenu.classList.remove('open');
        localStorage.removeItem('openSubmenuIndex');
      }

      // Rotate arrow
      const arrow = this.querySelector('.arrow');
      if (arrow) arrow.classList.toggle('rotated', !isOpen);
    });
  });

  // Restore previously opened submenu on load
  const openIndex = localStorage.getItem('openSubmenuIndex');
  if (openIndex !== null) {
    const toggle = submenuToggles[openIndex];
    const submenu = toggle?.nextElementSibling;
    if (submenu) {
      submenu.classList.add('open');
      const arrow = toggle.querySelector('.arrow');
      if (arrow) arrow.classList.add('rotated');
    }
  }
});
