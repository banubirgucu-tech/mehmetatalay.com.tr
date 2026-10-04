const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position='absolute'; nav.style.top='64px'; nav.style.left='0'; nav.style.right='0';
    nav.style.background='#fff'; nav.style.padding='20px'; nav.style.flexDirection='column';
  }
});
