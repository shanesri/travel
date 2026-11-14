// tap Chinese names to copy (paste into Didi / Apple Maps)
(function(){
  const toast=document.createElement('div');toast.className='toast';document.body.appendChild(toast);
  function show(t){toast.textContent=t;toast.classList.add('on');clearTimeout(show.t);show.t=setTimeout(()=>toast.classList.remove('on'),1400)}
  document.querySelectorAll('span.zh').forEach(el=>{
    el.classList.add('copy');el.title='แตะเพื่อก๊อป';
    el.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();
      const t=el.textContent.split('·')[0].trim();
      (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>show('ก๊อปแล้ว: '+t)).catch(()=>show(t));});
  });
  const exp=document.getElementById('expand');
  if(exp)exp.addEventListener('click',()=>{const d=[...document.querySelectorAll('details.day')];const open=!d.every(x=>x.open);d.forEach(x=>x.open=open);exp.textContent=open?'ย่อทุกวัน':'ขยายทุกวัน'});
  const f=document.getElementById('field');
  if(f){let on=false;try{on=localStorage.getItem('field')==='1'}catch(e){}
    const set=v=>{document.body.classList.toggle('field',v);f.setAttribute('aria-pressed',v);try{localStorage.setItem('field',v?'1':'0')}catch(e){}};
    set(on);f.addEventListener('click',()=>set(f.getAttribute('aria-pressed')!=='true'));}
  // countdown
  document.querySelectorAll('[data-countdown]').forEach(el=>{
    const d=Math.ceil((new Date(el.dataset.countdown+'T00:00:00+07:00')-Date.now())/864e5);
    el.textContent=d>1?'อีก '+d+' วัน':d===1?'พรุ่งนี้!':d>=-10?'กำลังเที่ยว':'';
  });
})();
