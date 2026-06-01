/* =========================================================
   Morning Core Lab · 모닝 코어 랩 — 1차 정적 프로토타입
   순수 HTML/CSS/JS · 외부 API 없음 · 무료 원칙
   나중에 Google Sheets+Apps Script 연결 시 아래 배열을 교체
========================================================= */

/* ===== DATA: references ===== */
const REFERENCES = [
  { id:'r1', title_en:'NotebookLM for Research', title_kr:'리서치용 노트북LM', url:'#', source:'Google', type:'AI Tool', core:'Morning News Core', idea_fit:88, follow_potential:'High', status:'Saved', why:'뉴스/인터뷰 자료를 카드뉴스로 정리하기 좋음.' },
  { id:'r2', title_en:'Google Vids for Onboarding', title_kr:'팀 온보딩용 구글 비즈', url:'#', source:'Google', type:'Video Tool', core:'Production', idea_fit:76, follow_potential:'Mid', status:'Discussing', why:'외국인 직원용 설명 영상 제작에 참고 가능.' },
  { id:'r3', title_en:'Pomelli for Brand Campaigns', title_kr:'브랜드 캠페인용 포멜리', url:'#', source:'Web', type:'Brand Tool', core:'Poster Core', idea_fit:91, follow_potential:'High', status:'Saved', why:'SMCC 브랜드 감성 포스터와 배너 제작에 참고 가능.' },
  { id:'r4', title_en:'Stitch for App Prototype', title_kr:'앱 프로토타입용 Stitch', url:'#', source:'Web', type:'Design Tool', core:'UI Reference', idea_fit:95, follow_potential:'Mid', status:'Approved', why:'말로 설명한 화면을 빠르게 시각화할 때 참고 가능.' },
  { id:'r5', title_en:'Morning Routine Trend', title_kr:'아침 루틴 트렌드', url:'#', source:'Google News RSS', type:'News', core:'Morning Drop', idea_fit:82, follow_potential:'High', status:'New', why:'SMCC 웰니스 카드뉴스 소재로 적합.' },
  { id:'r6', title_en:'Coffee Culture Update', title_kr:'커피 문화 업데이트', url:'#', source:'Blog RSS', type:'News', core:'Coffee Core', idea_fit:84, follow_potential:'Mid', status:'New', why:'커피챗과 모닝 레이브 콘텐츠로 연결 가능.' },
  { id:'r7', title_en:'Seoul Morning Event', title_kr:'서울 아침 이벤트', url:'#', source:'Local Feed', type:'Local', core:'Event', idea_fit:89, follow_potential:'High', status:'New', why:'서울 로컬 아침 커뮤니티 콘텐츠로 전환 가능.' },
  { id:'r8', title_en:'Introvert Morning Meme', title_kr:'내향인 아침 밈', url:'#', source:'Public Feed', type:'Funny', core:'Funny Core', idea_fit:87, follow_potential:'High', status:'New', why:'내향인도 편하게 올 수 있는 SMCC 메시지와 잘 맞음.' },
];

/* ===== DATA: emotional core ===== */
const EMOTIONAL = [
  { id:'e1', title_en:'Morning Light over Seoul', title_kr:'서울 위의 아침 빛', source:'Mood', type:'Emotional', core:'Morning Light', idea_fit:90, status:'Saved', why:'영화 스틸 같은 톤. 시적인 카피와 결합하기 좋음.' },
  { id:'e2', title_en:'Slow Coffee Mood', title_kr:'느린 커피 무드', source:'Mood', type:'Emotional', core:'Coffee Mood', idea_fit:86, status:'Saved', why:'커피챗의 따뜻함을 감성 릴스로 옮기기 좋음.' },
  { id:'e3', title_en:'Seoul Street at 7AM', title_kr:'7시의 서울 거리', source:'Mood', type:'Emotional', core:'Seoul Street', idea_fit:88, status:'Saved', why:'서울 로컬 감성 + 아침 무드보드.' },
  { id:'e4', title_en:'Book Club Cinema Still', title_kr:'북클럽 시네마 스틸', source:'Mood', type:'Emotional', core:'Cinema · Book Club', idea_fit:83, status:'Saved', why:'북클럽/시네마 모임 홍보용 감성 포스터에 적합.' },
];

/* ===== DATA: funny core ===== */
const FUNNY = [
  { id:'f1', title_en:'Introvert at Morning Rave', title_kr:'모닝 레이브 간 내향인', source:'Meme', type:'Funny', core:'Introvert · Morning Rave', idea_fit:89, status:'Saved', why:'모닝 레이브 반전 유머. 친구 태그 유도에 강함.' },
  { id:'f2', title_en:'Office Morning Coffee Addiction', title_kr:'출근길 커피 중독', source:'Meme', type:'Funny', core:'Office Morning · Coffee', idea_fit:85, status:'Saved', why:'직장인 아침 공감. 저장+공유 유도.' },
  { id:'f3', title_en:'Cute Chaos Before Work', title_kr:'출근 전 귀여운 대혼란', source:'Meme', type:'Funny', core:'Cute Chaos', idea_fit:84, status:'Saved', why:'귀여운 밈 톤으로 내향인 친화 메시지 전달.' },
  { id:'f4', title_en:'Tag Your Sleepy Friend', title_kr:'잠 많은 친구 소환', source:'Meme', type:'Funny', core:'Friend Tag · Relatable', idea_fit:86, status:'Saved', why:'친구 태그 → 도달/팔로우 전환 유도.' },
];

/* ===== DATA: production board ===== */
const PRODUCTION = [
  { id:'p1', title_en:'Seoul Morning Event Carousel', title_kr:'서울 아침 이벤트 카드뉴스', owner:'Mina', status:'Approved', due:'06/05' },
  { id:'p2', title_en:'Introvert Morning Meme Reel', title_kr:'내향인 아침 밈 릴스', owner:'Jun', status:'Script Needed', due:'06/07' },
  { id:'p3', title_en:'Coffee Mood Aesthetic Reel', title_kr:'커피 무드 감성 릴스', owner:'Sora', status:'Shooting', due:'06/08' },
  { id:'p4', title_en:'Wellness Routine Carousel', title_kr:'웰니스 루틴 카드뉴스', owner:'Alex', status:'Editing', due:'06/06' },
  { id:'p5', title_en:'Morning Rave Recap', title_kr:'모닝 레이브 리캡', owner:'Mina', status:'Posted', due:'05/30' },
  { id:'p6', title_en:'Sober Curious Story', title_kr:'소버 큐리어스 스토리', owner:'Jun', status:'Saved', due:'06/10' },
];
const STATUS_KR = {
  'Saved':'저장됨','Discussing':'논의 중','Approved':'승인됨','Script Needed':'대본 필요',
  'Shooting':'촬영 중','Editing':'편집 중','Posted':'업로드 완료','Analyzed':'분석 완료',
  'New':'신규','Skipped':'건너뜀','Added':'회의 추가됨'
};

/* ===== DATA: copy bank ===== */
const COPY_BANK = [
  { id:'c1', cat:'Follow CTA', en:'Follow for more Seoul morning culture.', kr:'서울의 아침 문화를 더 보고 싶다면 팔로우해요.' },
  { id:'c2', cat:'Event CTA', en:'Join the next morning coffee moment.', kr:'다음 아침 커피 모먼트에 함께해요.' },
  { id:'c3', cat:'Emotional Hook', en:'7AM is the new 2AM.', kr:'이제 새벽 2시보다 아침 7시.' },
  { id:'c4', cat:'Funny Hook', en:'POV: you said you would skip the morning rave.', kr:'POV: 모닝 레이브 안 간다고 했던 나.' },
  { id:'c5', cat:'Save CTA', en:'Save this for your slow morning.', kr:'느긋한 아침을 위해 저장해두세요.' },
  { id:'c6', cat:'First-timer CTA', en:'No name card needed — just bring yourself.', kr:'명함은 필요 없어요. 그냥 오세요.' },
  { id:'c7', cat:'Comment CTA', en:'Comment your 7AM order.', kr:'당신의 아침 7시 주문을 댓글로 남겨요.' },
  { id:'c8', cat:'Morning Rave Copy', en:'A club that ends before work.', kr:'출근 전에 끝나는 클럽.' },
];

/* ===== DATA: vote buttons ===== */
const VOTES = [
  { key:'brew', emoji:'☕', en:'Brew It', kr:'제작하자' },
  { key:'love', emoji:'💘', en:'Love This', kr:'좋아요' },
  { key:'funny', emoji:'😂', en:'Funny', kr:'유머 가능' },
  { key:'aes', emoji:'🎞️', en:'Aesthetic', kr:'감성 가능' },
  { key:'follow', emoji:'🚀', en:'Follow Potential', kr:'팔로우 가능성' },
  { key:'not', emoji:'💤', en:'Not Now', kr:'지금은 보류' },
];

/* ===== Screen meta ===== */
const SCREEN_META = {
  home:{en:'Home',kr:'홈'}, drop:{en:'Morning Drop',kr:'오늘의 새 레퍼런스'},
  room:{en:'Reference Room',kr:'레퍼런스 공유룸'}, emotional:{en:'Emotional Core',kr:'감성 코어'},
  funny:{en:'Funny Core',kr:'유머 코어'}, meeting:{en:'Meeting Mode',kr:'회의 모드'},
  insta:{en:'Instagram Core',kr:'팔로우 전환율 분석'}, production:{en:'Production Board',kr:'제작 보드'},
  copy:{en:'Copy Bank',kr:'카피 뱅크'},
};

/* ===== Helpers ===== */
const $ = (s, el=document)=>el.querySelector(s);
const $$ = (s, el=document)=>[...el.querySelectorAll(s)];
const allRefs = ()=>[...REFERENCES, ...EMOTIONAL, ...FUNNY];

function statusClass(s){
  const map={'New':'s-new','Saved':'s-saved','Skipped':'s-skipped','Discussing':'s-discussing','Approved':'s-approved'};
  return map[s]||'s-default';
}
function statusBadge(s){
  return `<span class="status-badge ${statusClass(s)}">${s} · ${STATUS_KR[s]||''}</span>`;
}
let toastTimer;
function toast(msg){
  const t=$('#toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>t.classList.remove('show'),1900);
}
function copyLink(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(()=>toast('Link copied · 링크 복사됨 📋'))
      .catch(()=>toast('Copy this · 링크: '+text));
  } else { toast('Copy this · 링크: '+text); }
}

/* ===== Card builders ===== */
function refActions(id, extra=''){
  return `<div class="card-actions">
    <button class="btn btn-mint" data-act="save" data-id="${id}">Save · 저장</button>
    <button class="btn btn-pink" data-act="meeting" data-id="${id}">Add Meeting · 회의</button>
    <button class="btn" data-act="copy" data-id="${id}">Copy Link · 링크</button>
    <button class="btn" data-act="open" data-id="${id}">Open · 열기</button>
    ${extra}
  </div>`;
}
function referenceCard(r, opts={}){
  return `<article class="card" data-detail="${r.id}">
    <span class="type-label">${r.type} · ${r.core}</span>
    <h4>${r.title_en}</h4>
    <p class="c-kr">${r.title_kr}</p>
    <p class="c-source">Source · ${r.source}</p>
    <div class="fit-row">
      <span class="fit-badge">Idea Fit ${r.idea_fit}%</span>
      <span class="fit-kr">아이디어 적합도</span>
    </div>
    <p class="why"><b>Why it fits SMCC</b><br>${r.why}</p>
    ${opts.status?statusBadge(r.status):''}
    ${refActions(r.id, opts.extra||'')}
  </article>`;
}

/* ===== SCREENS ===== */
const screens = {
  home(){
    const newDrop = REFERENCES.filter(r=>r.status==='New').length;
    const saved = REFERENCES.filter(r=>['Saved','Approved'].includes(r.status)).length;
    return `
      <div class="lead">
        <p class="l-en">Good morning, SMCC team ☕</p>
        <p class="l-kr">오늘도 팔로우 전환될 아이디어를 찾아볼까요?</p>
      </div>
      <div class="section-head"><div class="sh-en">Today's Creative Pulse</div><div class="sh-kr">오늘의 콘텐츠 감도</div></div>
      <div class="stat-grid">
        <div class="stat kpi-big"><div class="s-label">Follow Conversion <small>이번 주 평균 팔로우 전환율</small></div><div class="s-value">7.4%</div></div>
        <div class="stat"><div class="s-label">Morning Drop <small>새로 들어온 레퍼런스</small></div><div class="s-value">${newDrop}</div></div>
        <div class="stat"><div class="s-label">Saved References <small>저장된 레퍼런스</small></div><div class="s-value">${saved}</div></div>
        <div class="stat"><div class="s-label">Best Core <small>이번 주 최고 코어</small></div><div class="s-value" style="font-size:20px">Funny 😂</div></div>
      </div>
      <div class="section-head"><div class="sh-en">Quick Start</div><div class="sh-kr">빠른 진입</div></div>
      <div class="quick-row">
        <button class="quick" data-screen="drop">🌅 Morning Drop<small>새 레퍼런스 보기</small></button>
        <button class="quick" data-screen="room">🗂️ Reference Room<small>공유룸 가기</small></button>
        <button class="quick" data-screen="insta">📈 Instagram Core<small>전환율 분석</small></button>
      </div>`;
  },
  drop(){
    const list = REFERENCES.filter(r=>['r5','r6','r7','r8'].includes(r.id));
    return `
      <div class="lead">
        <p class="l-en">Fresh references from selected free sources.</p>
        <p class="l-kr">무료 공개 소스에서 새로 들어온 레퍼런스 후보예요. Save what fits SMCC · SMCC에 맞는 것만 저장하세요.</p>
        <p class="l-kr" style="margin-top:6px;color:#b3a395">Updated 3×/day · 오전 7시 / 오후 12시 / 오후 5시 (프로토타입: 더미 데이터)</p>
      </div>
      <div class="grid">
        ${list.map(r=>referenceCard(r,{status:true, extra:`<button class="btn" data-act="skip" data-id="${r.id}">Skip · 건너뛰기</button>`})).join('')}
      </div>`;
  },
  room(){
    const filters = ['All','Emotional','Funny','News','AI Tools','Poster','Copy','High Follow Potential'];
    return `
      <div class="lead">
        <p class="l-en">Saved references shared by the team.</p>
        <p class="l-kr">팀원이 저장한 레퍼런스 공유룸이에요.</p>
      </div>
      <div class="filter-row" id="roomFilter">
        ${filters.map((f,i)=>`<button class="chip ${i===0?'active':''}" data-filter="${f}">${f}</button>`).join('')}
      </div>
      <div class="grid" id="roomGrid">
        ${REFERENCES.map(r=>referenceCard(r,{status:true})).join('')}
      </div>`;
  },
  emotional(){
    return `
      <div class="lead">
        <p class="l-en">Aesthetic, save-worthy, cinematic references.</p>
        <p class="l-kr">예술적이고 저장하고 싶은 영화 스틸·포스터·시적인 카피 톤의 감성 레퍼런스.</p>
      </div>
      <div class="grid">${EMOTIONAL.map(r=>referenceCard(r,{status:true})).join('')}</div>`;
  },
  funny(){
    return `
      <div class="lead">
        <p class="l-en">Cute, relatable, tag-your-friend humor.</p>
        <p class="l-kr">귀엽고 공감 가는 밈 · 친구 태그 유도 · 내향인/직장인 아침 공감 · 모닝 레이브 반전 유머.</p>
      </div>
      <div class="grid">${FUNNY.map(r=>referenceCard(r,{status:true})).join('')}</div>`;
  },
  meeting(){
    const r = REFERENCES.find(x=>x.id==='r7');
    return `
      <div class="lead">
        <p class="l-en">Decide together with votes & comments.</p>
        <p class="l-kr">팀원 투표·댓글로 함께 결정하는 회의 모드예요. (Presentation Mode는 추후 추가)</p>
      </div>
      <div class="meeting-big" data-meeting="${r.id}">
        <span class="type-label">${r.type} · ${r.core}</span>
        <h2>${r.title_en}</h2>
        <p class="m-kr">${r.title_kr}</p>
        <div class="fit-row"><span class="fit-badge">Idea Fit ${r.idea_fit}%</span><span class="fit-kr">아이디어 적합도</span></div>
        <p class="why" style="margin-top:12px"><b>Why it fits SMCC</b><br>${r.why}</p>
        <div class="section-head" style="margin-bottom:8px"><div class="sh-en">Team Vote · 팀 투표</div></div>
        <div class="vote-row" id="meetingVotes">
          ${VOTES.map(v=>`<button class="vote" data-vote="${v.key}">${v.emoji} ${v.en} · ${v.kr}<span class="vc">0</span></button>`).join('')}
        </div>
        <div class="comment-box">
          <div class="cm"><b>Mina</b> · 아침 이벤트 카드뉴스로 바로 가능할 듯! 🚀</div>
          <div class="cm"><b>Jun</b> · 마지막 장에 Follow CTA 꼭 넣자.</div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-butter btn-block" data-act="toProduction" data-id="${r.id}">Move to Production · 제작으로 이동</button>
          <button class="btn btn-block" data-act="copy" data-id="${r.id}">Copy Link · 링크 복사</button>
        </div>
      </div>`;
  },
  insta(){
    return `
      <div class="lead">
        <p class="l-en">Top KPI · Follow Conversion Rate.</p>
        <p class="l-kr">가장 중요한 지표는 <b>팔로우 전환율</b>이에요. Reach / Profile Visits / New Followers를 입력하면 계산돼요.</p>
      </div>
      <div class="calc">
        <div class="calc-fields">
          <div class="field"><label>Reach <small>도달</small></label><input type="number" id="inReach" placeholder="e.g. 12000" value="12000"></div>
          <div class="field"><label>Profile Visits <small>프로필 방문</small></label><input type="number" id="inVisits" placeholder="e.g. 900" value="900"></div>
          <div class="field"><label>New Followers <small>신규 팔로워</small></label><input type="number" id="inFollow" placeholder="e.g. 70" value="70"></div>
        </div>
        <button class="btn btn-butter btn-block" id="calcBtn">Calculate · 계산하기</button>
        <div class="calc-result">
          <div class="result-box"><div class="r-label">Profile Visit Rate<br>프로필 방문율</div><div class="r-value" id="outVisitRate">–</div></div>
          <div class="result-box main"><div class="r-label">Follow Conversion Rate<br>팔로우 전환율</div><div class="r-value" id="outConv">–</div></div>
          <div class="result-box"><div class="r-label">Reach to Follow Rate<br>도달 대비 팔로우</div><div class="r-value" id="outR2F">–</div></div>
        </div>
        <div class="advice" id="advice">Enter your numbers and tap Calculate · 숫자를 입력하고 계산하기를 눌러주세요.</div>
      </div>`;
  },
  production(){
    const cols = ['Saved','Discussing','Approved','Script Needed','Shooting','Editing','Posted','Analyzed'];
    return `
      <div class="lead">
        <p class="l-en">Turn references into real content.</p>
        <p class="l-kr">레퍼런스를 실제 콘텐츠 제작으로 넘기는 제작 보드예요.</p>
      </div>
      <div class="board">
        ${cols.map(col=>`
          <div class="board-col">
            <h4>${col} <small>· ${STATUS_KR[col]||''}</small></h4>
            ${PRODUCTION.filter(p=>p.status===col).map(p=>`
              <div class="card" style="margin-bottom:10px">
                ${statusBadge(p.status)}
                <h4>${p.title_en}</h4>
                <p class="c-kr">${p.title_kr}</p>
                <p class="c-source">Owner · ${p.owner} &nbsp;|&nbsp; Due · ${p.due}</p>
                <div class="card-actions"><button class="btn" data-act="copy" data-id="${p.id}">Copy · 링크</button></div>
              </div>`).join('') || `<p class="c-source">—</p>`}
          </div>`).join('')}
      </div>`;
  },
  copy(){
    return `
      <div class="lead">
        <p class="l-en">Copy that grows your follow conversion.</p>
        <p class="l-kr">팔로우 전환율을 높이는 문구 저장소예요.</p>
      </div>
      <div class="grid">
        ${COPY_BANK.map(c=>`
          <div class="copy-card">
            <span class="cat">${c.cat}</span>
            <p class="ce">${c.en}</p>
            <p class="ck">${c.kr}</p>
            <div class="card-actions">
              <button class="btn btn-mint" data-act="copytext" data-id="${c.id}">Copy · 복사</button>
            </div>
          </div>`).join('')}
      </div>`;
  },
};

/* ===== Render a screen ===== */
function showScreen(name){
  if(name==='more'){ openMore(); return; }
  const screen = screens[name];
  if(!screen) return;
  $('#screenWrap').innerHTML = screen();
  const meta = SCREEN_META[name];
  if(meta){ $('#screenTitleEn').textContent = meta.en; $('#screenTitleKr').textContent = meta.kr; }

  $$('.nav-item').forEach(b=>b.classList.toggle('active', b.dataset.screen===name));

  $$('.tab').forEach(b=>b.classList.toggle('active', b.dataset.screen===name));
  $('#screenWrap').scrollTop = 0;
  if(name==='insta') runCalc();
}

/* ===== Detail panel ===== */
function showDetail(id){
  const r = allRefs().find(x=>x.id===id);
  const panel = $('#detailPanel');
  if(!r || !panel) return;
  panel.innerHTML = `
    <div class="detail-card">
      <span class="type-label">${r.type} · ${r.core}</span>
      <h3 style="margin-top:8px">${r.title_en}</h3>
      <p class="d-kr">${r.title_kr}</p>
      <p class="detail-meta">Source · ${r.source}</p>
      <p class="detail-meta">Idea Fit · 아이디어 적합도 <b>${r.idea_fit}%</b></p>
      <div class="detail-why"><span>Why it fits SMCC · 왜 SMCC랑 맞는지</span>${r.why}</div>
      <div class="section-head" style="margin:8px 0"><div class="sh-en">Team Vote · 팀 투표</div></div>
      <div class="vote-row" id="detailVotes">
        ${VOTES.map(v=>`<button class="vote" data-vote="${v.key}">${v.emoji} ${v.en}<span class="vc">0</span></button>`).join('')}
      </div>
      <div class="detail-actions">
        <button class="btn btn-mint" data-act="save" data-id="${r.id}">Save · 저장</button>
        <button class="btn btn-pink" data-act="meeting" data-id="${r.id}">Add Meeting · 회의</button>
        <button class="btn" data-act="copy" data-id="${r.id}">Copy Link · 링크</button>
        <button class="btn" data-act="open" data-id="${r.id}">Open · 열기</button>
      </div>
    </div>`;
}

/* ===== Instagram calculator ===== */
function runCalc(){
  const reach = parseFloat($('#inReach')?.value)||0;
  const visits = parseFloat($('#inVisits')?.value)||0;
  const followers = parseFloat($('#inFollow')?.value)||0;
  const visitRate = reach>0 ? (visits/reach*100) : 0;
  const convRate = visits>0 ? (followers/visits*100) : 0;
  const r2f = reach>0 ? (followers/reach*100) : 0;
  $('#outVisitRate').textContent = visitRate.toFixed(1)+'%';
  $('#outConv').textContent = convRate.toFixed(1)+'%';
  $('#outR2F').textContent = r2f.toFixed(1)+'%';

  let advice = '';
  if(visitRate < 5 && reach>0){
    advice = '<b>Case A · 조회수 높음 + 프로필 방문 낮음.</b><br>첫 3초에 SMCC가 누구인지 더 명확히 보여주세요.';
  } else if(convRate < 5 && visits>0){
    advice = '<b>Case B/C · 프로필 방문은 있지만 팔로우가 낮음.</b><br>바이오, 고정 게시물, 마지막 CTA를 점검하고 마지막 장에 팔로우 CTA를 추가하세요.';
  } else if(convRate >= 5){
    advice = '<b>Nice! · 좋아요.</b><br>팔로우 전환율이 건강해요. 이 콘텐츠 포맷을 더 밀어보세요. 🚀';
  } else {
    advice = '숫자를 입력하고 계산하기를 눌러주세요.';
  }
  $('#advice').innerHTML = advice;
}

/* ===== Mobile "More" sheet ===== */
function openMore(){ $('#moreSheet').classList.add('show'); }
function closeMore(){ $('#moreSheet').classList.remove('show'); }

/* ===== Global click handling ===== */
document.addEventListener('click', (e)=>{
  // menu navigation
  const navBtn = e.target.closest('[data-screen]');
  if(navBtn){ showScreen(navBtn.dataset.screen); if(!navBtn.classList.contains('nav-item')) closeMore(); return; }

  // vote buttons
  const voteBtn = e.target.closest('.vote');
  if(voteBtn){
    const c = voteBtn.querySelector('.vc');
    c.textContent = (parseInt(c.textContent)||0)+1;
    voteBtn.style.transform='scale(1.08)';
    setTimeout(()=>voteBtn.style.transform='',150);
    return;
  }

  // calculator
  if(e.target.id==='calcBtn'){ runCalc(); return; }

  // room filters
  const chip = e.target.closest('.chip');
  if(chip){

    $$('#roomFilter .chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    filterRoom(chip.dataset.filter);
    return;
  }

  // more sheet close
  if(e.target.id==='moreClose' || e.target.id==='moreSheet'){ closeMore(); return; }

  // card actions
  const actBtn = e.target.closest('[data-act]');
  if(actBtn){
    e.stopPropagation();
    handleAction(actBtn.dataset.act, actBtn.dataset.id);
    return;
  }

  // open detail panel by clicking a card
  const card = e.target.closest('[data-detail]');
  if(card){ showDetail(card.dataset.detail); }
});

/* ===== Actions ===== */
function handleAction(act, id){
  const ref = allRefs().find(x=>x.id===id);
  const title = ref ? ref.title_en : id;
  switch(act){
    case 'save':       toast('Saved · 저장됨: '+title+' ✅'); break;
    case 'meeting':    toast('Added to Meeting · 회의에 추가됨 🪑'); break;
    case 'copy':       copyLink('https://morning-core-lab.example/ref/'+id); break;
    case 'open':       toast('Open source · 출처 열기 (프로토타입) 🔗'); break;
    case 'skip':       toast('Skipped · 건너뜀 💤'); break;
    case 'toProduction': toast('Moved to Production · 제작 보드로 이동됨 🎬'); break;
    case 'copytext': {
      const c = COPY_BANK.find(x=>x.id===id);
      if(c) copyLink(c.en+' / '+c.kr);
      break;
    }
  }
}

/* ===== Room filter ===== */
function filterRoom(filter){
  const map = {
    'Emotional':r=>r.type==='Emotional'||r.core.includes('Emotional'),
    'Funny':r=>r.type==='Funny'||r.core.includes('Funny'),
    'News':r=>r.type==='News',
    'AI Tools':r=>r.type==='AI Tool',
    'Poster':r=>r.core.includes('Poster'),
    'Copy':r=>r.type==='Copy',
    'High Follow Potential':r=>r.follow_potential==='High',
  };
  let list = REFERENCES;
  if(filter!=='All' && map[filter]) list = REFERENCES.filter(map[filter]);
  $('#roomGrid').innerHTML = list.length
    ? list.map(r=>referenceCard(r,{status:true})).join('')
    : `<p class="c-source">No references yet · 아직 없어요</p>`;
}

/* ===== Live calc on input ===== */
document.addEventListener('input',(e)=>{
  if(['inReach','inVisits','inFollow'].includes(e.target.id)) runCalc();
});

/* ===== Start ===== */
showScreen('home');
