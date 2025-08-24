(function(){
  // mobile menu
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(menu){
        menu.style.display = expanded ? 'none' : 'flex';
        menu.style.flexDirection = 'column';
        menu.style.gap = '12px';
        menu.style.background = '#0f1220';
        menu.style.position = 'absolute';
        menu.style.right = '20px';
        menu.style.top = '60px';
        menu.style.padding = '14px';
        menu.style.border = '1px solid #23263b';
        menu.style.borderRadius = '12px';
      }
    });
  }
  // year
  const y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }
})();