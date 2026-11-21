// fill trip facts from trips.js (single source of truth: days / budget / dates / peak)
(function(){
  const slug=document.body.dataset.slug;if(!slug)return;
  const t=(window.TRIPS||[]).find(x=>x.slug===slug)||(window.SOMEDAY||[]).find(x=>x.slug===slug);if(!t)return;
  const M=['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
  const n=x=>Number(x).toLocaleString('en-US');
  const F={
    days:()=>typeof t.days==='number'?t.days+' วัน':t.days,
    k:()=>'~'+Math.round(t.cost/1000)+'k',
    whenY:()=>{let w=String(t.when).replace(/\s*\(.*\)\s*$/,'');return /\d{4}/.test(w)?w:w+' '+t.year},
    startLbl:()=>{const d=new Date(t.start+'T00:00:00+07:00');return 'เริ่ม '+(String(t.when).startsWith('~')?'~':'')+d.getDate()+' '+M[d.getMonth()]},
    price:()=>String(t.price).replace(/\s*฿.*$/,''),
    peak:()=>t.peak,
    costFull:()=>'~'+n(t.cost)+' ฿',
    pp2:()=>'~'+n(Math.round(t.cost/2)),
    total:()=>'~'+n(t.budgetMin)+' – '+n(t.budgetMax)+' ฿',
    pp:()=>'ตกคนละ ~'+n(Math.floor(t.budgetMin/2))+' – '+n(Math.floor(t.budgetMax/2))+' บาท',
  };
  document.querySelectorAll('[data-t]').forEach(el=>{const k=el.dataset.t;
    if(k==='start'){el.dataset.countdown=t.start;return}
    if(F[k]){const v=F[k]();if(v!=null&&!/undefined|NaN/.test(v))el.textContent=v}});
})();
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
