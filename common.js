(function(){
const css=`:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);--bg:#fff1c9;--ink:#1d2a44}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#2b2a52}}
:root[data-theme="dark"]{--bg:#2b2a52}
html{scroll-padding-top:env(safe-area-inset-top,0px);height:100%;background:var(--bg)}
body{margin:0;height:100%;overflow:hidden;background:var(--bg);touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;font-family:ui-rounded,"Nunito","Trebuchet MS",sans-serif;color:var(--ink)}
#app{position:relative;height:100%}
.stage{position:absolute;inset:0;overflow:hidden}
.lv{height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;gap:3vmin;flex-wrap:wrap;padding:88px 4vmin 4vmin}
.lb{width:min(36vmin,260px);aspect-ratio:1;border-radius:36px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 6px 0 rgba(0,0,0,.14);color:var(--ink)}
.lb:active{transform:translateY(4px);box-shadow:0 2px 0 rgba(0,0,0,.14)}
.lb b{font-size:min(16vmin,110px);line-height:1;font-weight:400}
.lb span{font-size:clamp(14px,3.2vmin,26px);font-weight:800;margin-top:1vmin;text-align:center;padding:0 1vmin}
#home{position:fixed;z-index:9;left:12px;top:calc(env(safe-area-inset-top,0px) + 12px);width:60px;height:60px;border-radius:50%;border:0;background:rgba(255,255,255,.85);font-size:30px;padding:0;transition:transform .5s,background .5s}
#home.hold{transform:scale(1.3);background:#ffd21f}
.grid{position:absolute;inset:0;box-sizing:border-box;padding:88px 3vmin 3vmin;overflow:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(30vmin,200px),1fr));gap:2.5vmin;align-content:start;touch-action:pan-y}
.c{aspect-ratio:1;border-radius:28px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 5px 0 rgba(0,0,0,.12);text-align:center}
.c b{font-size:clamp(56px,13vmin,130px);font-weight:800;line-height:1}
.c i{font-size:clamp(14px,3.4vmin,34px);font-style:normal;font-weight:800;margin-top:.5vmin;padding:0 1vmin}
.pg{position:absolute;inset:0;box-sizing:border-box;padding:88px 3vmin 3vmin;display:flex;flex-direction:column;justify-content:space-around}
.row{display:flex;justify-content:space-around;align-items:center;gap:2vmin}
.cell{font-size:min(17vmin,140px);line-height:1;padding:2vmin;border-radius:28px;background:rgba(255,255,255,.7);box-shadow:0 5px 0 rgba(0,0,0,.1);text-align:center}
.cell small{display:block;font-size:.17em;font-weight:800;margin-top:.2em}
.ok{background:#c9f0d3;animation:bop .5s}
.bop{animation:bop .5s}
.go{animation:go .8s}
@keyframes bop{30%{transform:scale(1.22) rotate(-6deg)}60%{transform:scale(.94) rotate(5deg)}}
@keyframes go{40%{transform:translateX(30%) rotate(-4deg)}}
@keyframes mv{0%{transform:translateX(-20vmin) scale(.8);opacity:.3}60%{transform:none;opacity:1}100%{transform:none}}
.drg{position:relative;z-index:5}
.cnt{display:flex;flex-wrap:wrap;gap:2vmin;justify-content:center;align-content:center;flex:1}
.cnt .cell{font-size:min(13vmin,100px)}
.slot{border:3px dashed #9aa6c0;background:rgba(255,255,255,.4);box-shadow:none;display:flex;align-items:center;justify-content:center;min-width:26vmin;min-height:26vmin}
.ov{position:absolute;inset:0;z-index:6;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:4vmin}
.card{background:#fff;color:#1d2a44;border-radius:32px;padding:3vmin;text-align:center;max-width:760px;max-height:100%;overflow:auto}
.sc{display:flex;justify-content:center;align-items:center;gap:2vmin;font-size:min(16vmin,110px)}
.sc .m{animation:mv 2.2s ease-in-out infinite}
.ar{font-size:clamp(30px,6vmin,56px);line-height:1.9;direction:rtl}
.card p{font-size:clamp(16px,2.8vmin,26px);font-weight:700;margin:1vmin 0}
.card small{font-size:clamp(13px,2.3vmin,21px);display:block}
.gb{position:relative;flex:1;display:flex;justify-content:space-between;align-items:center;padding:0 8vmin}
.gcol{display:flex;flex-direction:column;gap:3vmin}
.gl{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.pz{position:absolute;inset:0;box-sizing:border-box;padding:88px 3vmin 3vmin;display:flex;flex-wrap:wrap;gap:4vmin;align-items:center;justify-content:center;align-content:center}
.pzb{position:relative;width:min(46vmin,360px);height:min(46vmin,360px);display:grid;border-radius:16px;overflow:hidden;background:#fff}
.pzb img.g{position:absolute;inset:0;width:100%;height:100%;opacity:.2}
.pzb .tg{border:2px dashed #b7c0d8;position:relative;box-sizing:border-box}
.pzb .tg img,.tray .pc img{width:100%;height:100%;display:block;pointer-events:none}
.tray{width:min(46vmin,360px);display:flex;flex-wrap:wrap;gap:1.5vmin;justify-content:center}
.tray .pc{border-radius:10px;overflow:hidden;box-shadow:0 3px 0 rgba(0,0,0,.2)}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

const $=(c,t)=>{const e=document.createElement(t||'div');e.className=c||'';return e};
const shuf=a=>a.slice().sort(()=>Math.random()-.5);
const C=window.C={$,shuf};

/* ---- suara ---- */
let KA=null,primed=false,VO=null;const WC={};
function unlock(){
  try{
    if(!KA){KA=new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');KA.loop=true}
    if(KA.paused)KA.play().catch(()=>{});
    if(!primed){primed=true;speechSynthesis.speak(new SpeechSynthesisUtterance(''))}
  }catch(e){}
}
['pointerdown','touchend','click'].forEach(v=>addEventListener(v,unlock,true));
function pick(){try{const v=speechSynthesis.getVoices();VO=v.find(x=>/^id/i.test(x.lang)&&/female|damayanti|gadis/i.test(x.name))||v.find(x=>/^id/i.test(x.lang))||null}catch(e){}}
try{speechSynthesis.onvoiceschanged=pick;pick()}catch(e){}
const say=C.say=t=>{try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='id-ID';if(VO)u.voice=VO;u.rate=.9;u.pitch=1;setTimeout(()=>speechSynthesis.speak(u),60)}catch(e){}};
function wav(f,d,tri,v){
  const sr=22050,n=Math.floor(sr*d),b=new DataView(new ArrayBuffer(44+n*2));
  const w=(o,s)=>{for(let i=0;i<s.length;i++)b.setUint8(o+i,s.charCodeAt(i))};
  w(0,'RIFF');b.setUint32(4,36+n*2,true);w(8,'WAVE');w(12,'fmt ');b.setUint32(16,16,true);b.setUint16(20,1,true);b.setUint16(22,1,true);b.setUint32(24,sr,true);b.setUint32(28,sr*2,true);b.setUint16(32,2,true);b.setUint16(34,16,true);w(36,'data');b.setUint32(40,n*2,true);
  for(let i=0;i<n;i++){const t=i/sr,e=Math.min(1,i/(sr*.01))*Math.pow(1-i/n,2),x=tri?(2/Math.PI)*Math.asin(Math.sin(2*Math.PI*f*t)):Math.sin(2*Math.PI*f*t);b.setInt16(44+i*2,Math.max(-1,Math.min(1,x*e*v))*32767,true)}
  const u=new Uint8Array(b.buffer);let s='';
  for(let i=0;i<u.length;i++)s+=String.fromCharCode(u[i]);
  return 'data:audio/wav;base64,'+btoa(s);
}
const tone=C.tone=(f,d,tri,v)=>{const k=f+'_'+d+'_'+tri;if(!WC[k]){WC[k]=new Audio(wav(f,d||.4,tri,v||.35));WC[k].preload='auto'}const a=WC[k];try{a.currentTime=0}catch(e){}const p=a.play();if(p&&p.catch)p.catch(()=>{})};
const ok=C.ok=()=>tone(784,.4,0);
const bad=C.bad=()=>tone(196,.25,1,.3);
const win=C.win=()=>{tone(523.25,.3,0);setTimeout(()=>tone(783.99,.5,0),200)};
C.NT=[523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5];

/* ---- seret dan lepas ---- */
C.drag=(el,onDrop)=>{
  let sx=0,sy=0;el.style.touchAction='none';
  el.onpointerdown=e=>{e.preventDefault();el.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;el.classList.add('drg');el.style.transition='none'};
  el.onpointermove=e=>{if(el.classList.contains('drg'))el.style.transform='translate('+(e.clientX-sx)+'px,'+(e.clientY-sy)+'px) scale(1.15)'};
  el.onpointerup=el.onpointercancel=e=>{
    if(!el.classList.contains('drg'))return;
    el.classList.remove('drg');el.style.pointerEvents='none';
    const t=document.elementFromPoint(e.clientX,e.clientY);el.style.pointerEvents='';
    if(!onDrop(t&&t.closest('.tg'),el)){el.style.transition='transform .25s';el.style.transform=''}
  };
};

/* ---- cocokkan: gen() -> {targets:[{k,h,l,bg,fs}],drags:[{k,h,say}],multi} ---- */
C.match=(s,gen)=>{
  const w=$('pg');s.appendChild(w);
  const round=()=>{
    w.innerHTML='';
    const R=gen(),a=$('row'),b=$('row');w.append(a,b);
    let left=R.drags.length;
    R.targets.forEach(t=>{
      const e=$('tg cell');e.dataset.k=t.k;
      e.innerHTML='<span>'+t.h+'</span>'+(t.l?'<small>'+t.l+'</small>':'');
      if(t.bg)e.style.background=t.bg;
      if(t.fs){e.firstChild.style.fontSize=t.fs;e.style.maxWidth='38vmin'}
      a.appendChild(e);
    });
    shuf(R.drags).forEach(d=>{
      const e=$('cell');e.innerHTML=d.h;
      C.drag(e,(t,el)=>{
        if(!t)return false;
        if(t.dataset.k===d.k&&(R.multi||!t.classList.contains('ok'))){
          t.classList.add('ok');
          if(!R.multi)t.firstChild.insertAdjacentHTML('beforeend','<span style="font-size:.5em">'+d.h+'</span>');
          el.style.visibility='hidden';ok();say(d.say);
          if(--left===0){setTimeout(win,900);setTimeout(round,2600)}
          return true;
        }
        bad();t.classList.remove('bop');void t.offsetWidth;t.classList.add('bop');
        return false;
      });
      b.appendChild(e);
    });
  };
  round();
};

/* ---- kartu sentuh ---- */
C.grid=(s,items,anim)=>{
  const g=$('grid');
  items.forEach(o=>{
    const c=$('c');c.style.background=o.bg;if(o.bd)c.style.border='4px solid #cfd6e4';
    c.innerHTML='<b>'+o.big+'</b>'+(o.sm?'<i>'+o.sm+'</i>':'');
    c.onpointerdown=()=>{if(o.fn)o.fn();if(o.say)say(o.say);c.classList.remove('bop','go');void c.offsetWidth;c.classList.add(anim||'bop')};
    g.appendChild(c);
  });
  s.appendChild(g);
};
C.P=['#ffd6e0','#ffe9a8','#c9f0d3','#cfe6ff','#e3d4ff','#ffd9b8'];

/* ---- tebak: pool [{h,n}] ---- */
C.quiz=(s,pool,ask)=>{
  const w=$('pg');s.appendChild(w);
  const round=()=>{
    w.innerHTML='';
    const ch=shuf(pool).slice(0,3),t=ch[Math.floor(Math.random()*3)];
    const q=$('row'),r=$('row'),sp=$('cell');
    sp.textContent='🔊';sp.onpointerdown=()=>say(ask(t.n));q.appendChild(sp);
    ch.forEach(c=>{
      const d=$('cell');d.innerHTML=c.h;
      d.onpointerdown=()=>{
        if(d.dataset.x)return;
        if(c===t){ok();say('Benar!');d.classList.add('ok');r.querySelectorAll('.cell').forEach(e=>e.dataset.x=1);setTimeout(round,1700)}
        else{bad();say('Coba lagi');d.classList.remove('bop');void d.offsetWidth;d.classList.add('bop')}
      };
      r.appendChild(d);
    });
    w.append(q,r);setTimeout(()=>say(ask(t.n)),400);
  };
  round();
};

/* ---- menu subgame dan tombol rumah ---- */
C.start=subs=>{
  const app=document.getElementById('app'),home=document.getElementById('home');
  let homeAct=null,ht=null;
  const idx=()=>{try{location.href='index.html'}catch(e){}};
  const open=x=>{app.innerHTML='';const s=$('stage');app.appendChild(s);homeAct=subs.length>1?menu:idx;x[3](s)};
  const menu=()=>{
    try{speechSynthesis.cancel()}catch(e){}
    app.innerHTML='';homeAct=idx;
    const w=$('lv');
    subs.forEach(x=>{
      const b=$('lb');b.style.background=x[2];b.innerHTML='<b>'+x[0]+'</b><span>'+x[1]+'</span>';
      b.onclick=()=>{say(x[1]);open(x)};w.appendChild(b);
    });
    app.appendChild(w);
  };
  home.onpointerdown=()=>{home.classList.add('hold');ht=setTimeout(()=>{home.classList.remove('hold');homeAct&&homeAct()},500)};
  ['pointerup','pointerleave','pointercancel'].forEach(v=>home.addEventListener(v,()=>{clearTimeout(ht);home.classList.remove('hold')}));
  ['gesturestart','gesturechange','dblclick','contextmenu'].forEach(v=>document.addEventListener(v,e=>e.preventDefault()));
  subs.length>1?menu():open(subs[0]);
};
})();
