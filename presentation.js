(()=>{
 'use strict';
 const slides=[...document.querySelectorAll('.slide')];
 const prev=document.getElementById('previous'),next=document.getElementById('next');
 const counter=document.getElementById('counter'),status=document.getElementById('status');
 const modal=document.getElementById('index'),toggle=document.getElementById('index-toggle');
 const list=document.getElementById('index-list');
 let current=0;
 slides.forEach((slide,i)=>{const li=document.createElement('li');const a=document.createElement('a');a.href='#'+slide.id;const n=document.createElement('span');n.textContent=String(i+1).padStart(2,'0');a.append(n,document.createTextNode(slide.dataset.title));a.addEventListener('click',()=>modal.close());li.append(a);list.append(li);});
 const render=(i)=>{current=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,n)=>{s.classList.toggle('active',n===current);s.setAttribute('aria-hidden',String(n!==current));s.inert=n!==current;});counter.textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');prev.disabled=current===0;next.disabled=current===slides.length-1;status.textContent='Slide '+(current+1)+' di '+slides.length+'. '+slides[current].dataset.title;list.querySelectorAll('a').forEach((a,n)=>{if(n===current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});window.scrollTo({top:0,behavior:'instant'});document.querySelector('.stage').scrollTo({top:0,behavior:'instant'});};
 const readHash=()=>{const i=slides.findIndex(s=>s.id===decodeURIComponent(location.hash.slice(1)));render(i<0?0:i);};
 const move=(step)=>{const target=current+step;if(target>=0&&target<slides.length)location.hash=slides[target].id;};
 prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
 toggle.addEventListener('click',()=>{modal.showModal();toggle.setAttribute('aria-expanded','true');});
 document.getElementById('close-index').addEventListener('click',()=>modal.close());
 modal.addEventListener('close',()=>toggle.setAttribute('aria-expanded','false'));
 const fullscreen=()=>{if(document.fullscreenElement)document.exitFullscreen?.();else document.documentElement.requestFullscreen?.();};
 document.getElementById('fullscreen').addEventListener('click',fullscreen);
 const glassSelector='.manifesto-base p,.timeline li,.solution-list a,.open-services article,.product-features article,.banking-grid article,.chain-topics article,.public-band>div,.payment-steps li,.nexio-list p,.network-names>a,.choice-options article,.core-name,.contact-block,.accounts-input>div,.account-engine,.choice-core,.manifesto-graphic,.ob-graphic,.nexio-module,.choice-console,.iso-panel,.assurance-list article,.core-capabilities p,.account-output article,.account-live';
 document.querySelectorAll(glassSelector).forEach(el=>el.classList.add('glass-surface'));
 const copySelector='.slide h1,.slide h2,.slide h3,.slide .intro,.slide .manifesto-copy,.slide .public-copy,.slide .eyebrow,.slide .product-heading>p:last-child,.slide .role-band,.slide .product-tag,.slide .account-caption,.slide .closing-claim';
 document.querySelectorAll(copySelector).forEach(el=>el.classList.add('interactive-copy'));
 document.querySelector('.stage').addEventListener('pointermove',event=>{
   const active=event.target.closest('.slide.active');
   if(active){
     const slideRect=active.getBoundingClientRect();
     active.style.setProperty('--sx',`${event.clientX-slideRect.left}px`);
     active.style.setProperty('--sy',`${event.clientY-slideRect.top}px`);
   }
   const surface=event.target.closest('.glass-surface');
   if(!surface)return;
   const rect=surface.getBoundingClientRect();
   surface.style.setProperty('--gx',`${event.clientX-rect.left}px`);
   surface.style.setProperty('--gy',`${event.clientY-rect.top}px`);
 });
 document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||modal.open||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();move(1);}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();move(-1);}if(e.key==='Home'){e.preventDefault();location.hash=slides[0].id;}if(e.key==='End'){e.preventDefault();location.hash=slides.at(-1).id;}if(e.key.toLowerCase()==='f')fullscreen();if(e.key.toLowerCase()==='i'){modal.showModal();toggle.setAttribute('aria-expanded','true');}});
 window.addEventListener('hashchange',readHash);readHash();
})();
