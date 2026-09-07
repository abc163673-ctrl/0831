const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');

menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const savedTheme = localStorage.getItem('profile-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

const updateThemeButton = () => {
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', isDark ? '라이트 모드 전환' : '다크 모드 전환');
};

updateThemeButton();
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('profile-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  updateThemeButton();
});
