/* =========================================================
   ناب الصحراء — منطق الموقع الموحّد
   يقرأ النصوص من js/i18n.js والمحتوى من js/data.js
   ولا يحتاج أي تعديل عند إضافة محتوى جديد.
   ========================================================= */

function i18nPath(obj, path){
  return path.split('.').reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj);
}

function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

/* ---------- تطبيق اللغة على كل النصوص الثابتة ---------- */
function applyI18n(lang){
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dict.dir);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18nPath(dict, el.getAttribute('data-i18n'));
    if (val !== null) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr'); // format: "attr:path"
    const [attr, path] = spec.split(':');
    const val = i18nPath(dict, path);
    if (val !== null) el.setAttribute(attr, val);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* رسالة ترحيب واتساب تتبع لغة الزائر (تبقى الأيقونة تعمل حتى بدون JS) */
  const waHello = dict.footer && dict.footer.waHello;
  if (waHello){
    document.querySelectorAll('a[aria-label="WhatsApp"]').forEach(a => {
      const base = (a.getAttribute('href') || '').split('?')[0];
      if (base.indexOf('wa.me') > -1){
        a.setAttribute('href', base + '?text=' + encodeURIComponent(waHello));
      }
    });
  }

  const page = document.body.dataset.page || 'home';
  const brand = dict.brand.name;
  if (page === 'home'){
    document.title = brand + ' | ' + dict.home.titleLine2;
  } else if (dict[page] && dict[page].title){
    document.title = dict[page].title + ' — ' + brand;
  }

  document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang } }));
}

/* ---------- عرض صفحة الإحصاءات ---------- */
function renderStats(lang){
  if (typeof statsData === 'undefined') return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];
  const s = dict.stats; const t = statsData.totals;
  const nf = n => n.toLocaleString(lang === 'he' ? 'he-IL' : 'en-US');

  // بطاقات الأرقام البارزة
  const kpi = document.getElementById('stats-kpi');
  if (kpi){
    const cards = [
      { v:nf(t.events), l:s.kpiEvents },
      { v:nf(t.venomEvents)+' · '+t.venomPct+'%', l:s.kpiVenom },
      { v:t.topFivePct+'%', l:s.kpiTopFive },
      { v:t.coreYearsPct+'%', l:s.kpiCore }
    ];
    kpi.innerHTML = cards.map(c => `<div class="stat-kpi"><b>${escapeHtml(c.v)}</b><span>${escapeHtml(c.l)}</span></div>`).join('');
  }

  // رسم أعمدة أفقي عام
  function barRows(items, maxPct, accent){
    return items.map(it => {
      const nm = it.name[lang];
      const w = Math.max(2, (it.pct / maxPct) * 100);
      const badge = it.venom ? ` <span class="stat-vtag">${escapeHtml(s.venomTag)}</span>` : '';
      const note = it.note ? `<span class="stat-note">${escapeHtml(it.note[lang])}</span>` : '';
      return `<div class="stat-row">
        <div class="stat-label">${escapeHtml(nm)}${badge}${note}</div>
        <div class="stat-track"><div class="stat-fill" style="width:${w}%; background:${accent};"><span>${escapeHtml(nf(it.count))} · ${it.pct}%</span></div></div>
      </div>`;
    }).join('');
  }

  const topGrid = document.getElementById('stats-top');
  if (topGrid){
    const mx = Math.max(...statsData.topSpecies.map(x=>x.pct));
    topGrid.innerHTML = barRows(statsData.topSpecies, mx, 'var(--ember)');
  }
  const venomGrid = document.getElementById('stats-venom');
  if (venomGrid){
    const mx = Math.max(...statsData.venomSpecies.map(x=>x.pct));
    venomGrid.innerHTML = barRows(statsData.venomSpecies, mx, 'var(--ember-deep)');
  }

  // رسم أعمدة عمودي للأشهر
  const monthsWrap = document.getElementById('stats-months');
  if (monthsWrap){
    const mx = Math.max(...statsData.months.map(x=>x.pct));
    monthsWrap.innerHTML = statsData.months.map(m => {
      const h = Math.max(6, (m.pct / mx) * 100);
      return `<div class="stat-col">
        <div class="stat-colbar-wrap"><div class="stat-colval">${m.pct}%</div><div class="stat-colbar" style="height:${h}%;"></div></div>
        <div class="stat-colname">${escapeHtml(m.name[lang])}</div>
      </div>`;
    }).join('');
  }
}

/* ---------- عرض مكتبة الأفاعي الغير معروفة ---------- */
function renderUnknown(lang){
  const grid = document.getElementById('unknown-grid');
  if (!grid || typeof unknownData === 'undefined') return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];
  const g = dict.guide;

  grid.innerHTML = unknownData.map(sp => {
    const photo = sp.img
      ? `<img src="${escapeHtml(sp.img)}" alt="${escapeHtml(sp.name[lang])}" loading="lazy" decoding="async">`
      : `${escapeHtml(sp.name[lang])}<br>${escapeHtml(g.photoSoon)}`;
    return `
      <div class="species-card reveal in" data-type="safe">
        <div class="species-photo">${photo}<span class="species-badge badge-safe">${escapeHtml(g.badgeSafe)}</span></div>
        <div class="species-body">
          <div class="species-top">
            <div><h3>${escapeHtml(sp.name[lang])}</h3><span class="species-latin">${escapeHtml(sp.latin)}</span></div>
          </div>
          <p>${escapeHtml(sp.desc[lang])}</p>
          <div class="species-meta">
            <span>${escapeHtml(g.lengthLabel)}: <strong>${escapeHtml(sp.length[lang])}</strong></span>
            <span>${escapeHtml(g.dietLabel)}: <strong>${escapeHtml(sp.diet[lang])}</strong></span>
            <span>${escapeHtml(g.rangeLabel)}: <strong>${escapeHtml(sp.range[lang])}</strong></span>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ---------- عرض الأسئلة الشائعة ---------- */
function renderFaq(lang){
  const host = document.getElementById('faq-list');
  if (!host || typeof faqData === 'undefined') return;
  host.innerHTML = faqData.map((item,i)=>`
    <details class="faq-item reveal in"${i===0?' open':''}>
      <summary>${escapeHtml(item.q[lang]||item.q.ar)}</summary>
      <div class="faq-answer"><p>${escapeHtml(item.a[lang]||item.a.ar)}</p></div>
    </details>`).join('');
}

/* ---------- عرض مقال تعليمي عن البيئة ---------- */
function renderEduArticle(lang){
  const host = document.getElementById('edu-article');
  if (!host || typeof eduArticles === 'undefined') return;
  const slug = document.body.dataset.eduslug;
  const art = eduArticles[slug] && eduArticles[slug][lang];
  if (!art) return;
  const ld=document.getElementById('ea-lead'); if(ld) ld.textContent=art.lead;
  function paras(txt){ return String(txt||'').split(/\n\n+/).map(p=>p.trim()).filter(Boolean).map(p=>`<p class="reveal in">${escapeHtml(p)}</p>`).join(''); }
  let html = paras(art.intro);
  for (let i=1;i<=8;i++){
    const t=art['s'+i+'title'], b=art['s'+i];
    if(!t && !b) continue;
    if(t) html += `<h2 class="reveal in">${escapeHtml(t)}</h2>`;
    if(b) html += paras(b);
  }
  if(art.close){
    html += `<div class="gear-warning reveal in"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 2l9 4.5v6c0 5.2-3.8 8.6-9 9.5-5.2-.9-9-4.3-9-9.5v-6L12 2z" stroke="currentColor" stroke-width="1.7"/><path d="M12 8v5M12 16.2v.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><div>${paras(art.close)}</div></div>`;
  }
  host.innerHTML = html;
}

/* ---------- عرض صفحة مقال نوع واحد ---------- */
function renderSnakeArticle(lang){
  const host = document.getElementById('snake-article');
  if (!host || typeof speciesArticles === 'undefined') return;
  const slug = document.body.dataset.slug;
  const sp = speciesData.find(s => (s.latin||'').toLowerCase().replace(/ /g,'-') === slug);
  const art = speciesArticles[slug] && speciesArticles[slug][lang];
  if (!sp || !art) return;
  const g = I18N[lang].guide;
  const nm=document.getElementById('sa-name'); if(nm) nm.textContent=sp.name[lang];
  const lt=document.getElementById('sa-latin'); if(lt) lt.textContent=sp.latin;
  const ld=document.getElementById('sa-lead'); if(ld) ld.textContent=art.lead;
  function paras(txt){ return String(txt||'').split(/\n\n+/).map(p=>p.trim()).filter(Boolean).map(p=>`<p class="reveal in">${escapeHtml(p)}</p>`).join(''); }
  const isVenom = sp.type==='venom';
  const dBadge = `<div class="danger-badge ${isVenom?'danger-venom':'danger-safe'} reveal in">${escapeHtml(isVenom?g.badgeVenom:g.badgeSafe)}</div>`;
  let html = dBadge + paras(art.intro);
  html += `<ul class="article-facts snake-facts reveal in">
      <li><b>${escapeHtml(g.lengthLabel)}</b><span>${escapeHtml(sp.length[lang])}</span></li>
      ${sp.diet?`<li><b>${escapeHtml(g.dietLabel)}</b><span>${escapeHtml(sp.diet[lang])}</span></li>`:''}
      <li><b>${escapeHtml(g.rangeLabel)}</b><span>${escapeHtml(sp.range[lang])}</span></li>
    </ul>`;
  for (let i=1;i<=8;i++){
    const t=art['s'+i+'title'], b=art['s'+i];
    if(!t && !b) continue;
    if(t) html += `<h2 class="reveal in">${escapeHtml(t)}</h2>`;
    if(b) html += paras(b);
  }
  if(art.close){
    html += `<div class="gear-warning reveal in"><svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 2l9 4.5v6c0 5.2-3.8 8.6-9 9.5-5.2-.9-9-4.3-9-9.5v-6L12 2z" stroke="currentColor" stroke-width="1.7"/><path d="M12 8v5M12 16.2v.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><div>${paras(art.close)}</div></div>`;
  }
  host.innerHTML = html;
}

/* ---------- عرض دليل الأفاعي ---------- */
function renderSpecies(lang){
  const grid = document.getElementById('species-grid');
  if (!grid) return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];
  const g = dict.guide;

  grid.innerHTML = speciesData.map(sp => {
    const badgeClass = sp.type === 'venom' ? 'badge-venom' : 'badge-safe';
    const badgeText = sp.type === 'venom' ? g.badgeVenom : g.badgeSafe;
    const photo = sp.img
      ? `<img src="${escapeHtml(sp.img)}" alt="${escapeHtml(sp.name[lang])}" loading="lazy" decoding="async">`
      : `${escapeHtml(sp.name[lang])}<br>${escapeHtml(g.photoSoon)}`;
    const slug = (sp.latin || '').toLowerCase().replace(/ /g, '-');
    const hasArticle = (typeof speciesArticles !== 'undefined') && speciesArticles[slug];
    const cardInner = `
        <div class="species-photo">${photo}<span class="species-badge ${badgeClass}">${escapeHtml(badgeText)}</span></div>
        <div class="species-body">
          <div class="species-top">
            <div><h3>${escapeHtml(sp.name[lang])}</h3><span class="species-latin">${escapeHtml(sp.latin)}</span></div>
          </div>
          <p>${escapeHtml(sp.desc[lang])}</p>
          <div class="species-meta">
            <span>${escapeHtml(g.lengthLabel)}: <strong>${escapeHtml(sp.length[lang])}</strong></span>
            ${sp.diet ? `<span>${escapeHtml(g.dietLabel)}: <strong>${escapeHtml(sp.diet[lang])}</strong></span>` : ''}
            <span>${escapeHtml(g.rangeLabel)}: <strong>${escapeHtml(sp.range[lang])}</strong></span>
          </div>
          ${hasArticle ? `<span class="species-readmore">${escapeHtml((g.readMore || 'اقرأ المقال الكامل ←'))}</span>` : ''}
        </div>`;
    if (hasArticle){
      return `<a href="snake-${slug}.html" class="species-card species-card-link reveal in" data-type="${sp.type}">${cardInner}</a>`;
    }
    return `<div class="species-card reveal in" data-type="${sp.type}">${cardInner}</div>`;
  }).join('');

  applyActiveFilter();
}

function applyActiveFilter(){
  const activeBtn = document.querySelector('.filter-btn.active');
  const filter = activeBtn ? activeBtn.dataset.filter : 'all';
  document.querySelectorAll('.species-card').forEach(card => {
    const match = filter === 'all' || card.dataset.type === filter;
    card.style.display = match ? '' : 'none';
  });
}

/* ---------- بناء مقالات الأنواع من بيانات الدليل نفسها ---------- */
function renderSpeciesArticle(lang, containerId, type, dictKey){
  const el = document.getElementById(containerId);
  if (!el) return;
  const a = I18N[lang][dictKey];
  const g = I18N[lang].guide;

  const sections = speciesData.filter(s => s.type === type).map((sp, i) => `
    <article class="article-species reveal in">
      <div class="article-species-media">
        <img src="${escapeHtml(sp.imgArticle || sp.img)}" alt="${escapeHtml(sp.name[lang])}" loading="lazy" decoding="async">
      </div>
      <div class="article-species-body">
        <span class="article-species-num">${String(i+1).padStart(2,'0')}</span>
        <h2>${escapeHtml(sp.name[lang])}</h2>
        <span class="species-latin">${escapeHtml(sp.latin)}</span>
        <p>${escapeHtml(sp.desc[lang])}</p>
        <ul class="article-facts">
          <li><b>${escapeHtml(g.lengthLabel)}</b><span>${escapeHtml(sp.length[lang])}</span></li>
          ${sp.diet ? `<li><b>${escapeHtml(g.dietLabel)}</b><span>${escapeHtml(sp.diet[lang])}</span></li>` : ''}
          <li><b>${escapeHtml(g.rangeLabel)}</b><span>${escapeHtml(sp.range[lang])}</span></li>
        </ul>
        <p class="article-danger ${type === 'safe' ? 'article-safe' : ''}"><b>${escapeHtml(a.dangerLabel)}</b> ${escapeHtml(a.dangerText)}</p>
      </div>
    </article>`).join('');

  el.innerHTML = sections + `<p class="article-closing reveal in">${escapeHtml(a.closing)}</p>`;
}

/* ---------- أداة مساعدة: هل هذا العنصر مجرد نموذج مؤقت؟ ---------- */
/* العناصر النموذجية في data.js تبدأ عناوينها بقوس مربّع مثل "[عنوان المغامرة]".
   نتجاهلها عند العرض العلني حتى لا تظهر النصوص المؤقتة للزوّار،
   بينما تبقى كما هي داخل editor.html لتحرير صاحب الموقع. */
function isPlaceholder(text){
  return typeof text === 'string' && text.trim().startsWith('[');
}

/* بطاقة "قريبًا" موحّدة تُعرض حين لا يوجد محتوى حقيقي بعد */
function emptyStateHtml(title, text){
  return `
    <div class="lib-empty reveal in">
      <svg viewBox="0 0 24 24" fill="none" width="30" height="30" aria-hidden="true"><path d="M12 2l9 4.5v6c0 5.2-3.8 8.6-9 9.5-5.2-.9-9-4.3-9-9.5v-6L12 2z" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v5M12 16.2v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </div>`;
}

/* ---------- عرض مكتبة الصور ---------- */
function renderPhotos(lang){
  const venomGrid = document.getElementById('photos-grid-venom');
  const safeGrid = document.getElementById('photos-grid-safe');
  if (!venomGrid && !safeGrid) return;

  function tileHtml(p){
    if (p.src){
      return `<div class="media-tile has-photo reveal in" data-full="${escapeHtml(p.src)}" data-caption="${escapeHtml(p.caption[lang])}" data-latin="${escapeHtml(p.latin || '')}"><img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.caption[lang])}" loading="lazy" decoding="async"></div>`;
    }
    return `<div class="media-tile reveal in">${escapeHtml(p.caption[lang])}<br>[${escapeHtml(I18N[lang].guide.photoSoon)}]</div>`;
  }

  if (venomGrid){
    venomGrid.innerHTML = photosData.filter(p => p.type === 'venom').map(tileHtml).join('');
  }
  if (safeGrid){
    safeGrid.innerHTML = photosData.filter(p => p.type === 'safe').map(tileHtml).join('');
  }
}

/* ---------- عرض مكتبة الفيديوهات ---------- */
/* يستخرج معرّف فيديو يوتيوب من أي صيغة رابط: watch?v= أو youtu.be أو
   shorts أو embed أو live، أو معرّفًا مجرّدًا من 11 خانة. */
function youtubeId(input){
  if (!input) return '';
  const s = String(input).trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(s)) return s;
  let m;
  m = s.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);            if (m) return m[1];
  m = s.match(/[?&]v=([a-zA-Z0-9_-]{11})/);                  if (m) return m[1];
  m = s.match(/\/(?:embed|shorts|v|live)\/([a-zA-Z0-9_-]{11})/); if (m) return m[1];
  return '';
}

function renderVideos(lang){
  const el = document.getElementById('videos-grid');
  if (!el) return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];

  /* نقبل الرابط في أي من الحقول: embed أو url أو youtube */
  const withId = videosData.map(v => ({ v: v, id: youtubeId(v.embed || v.url || v.youtube) }));
  const real = withId.filter(x => x.id || !isPlaceholder(x.v.title && x.v.title[lang]));

  if (!real.length){
    el.classList.remove('video-grid');
    el.innerHTML = emptyStateHtml(dict.videos.emptyTitle, dict.videos.emptyText);
    return;
  }
  el.classList.add('video-grid');
  el.innerHTML = real.map(x => {
    const v = x.v, id = x.id;
    let thumb;
    if (id){
      const embedUrl = 'https://www.youtube-nocookie.com/embed/' + id;
      const poster = v.poster || ('https://img.youtube.com/vi/' + id + '/hqdefault.jpg');
      thumb = `<div class="video-thumb has-video has-thumb" style="background-image:url('${escapeHtml(poster)}')" data-embed="${escapeHtml(embedUrl)}" data-title="${escapeHtml(v.title[lang])}"><div class="play-btn">▶</div></div>`;
    } else {
      thumb = `<div class="video-thumb"><div class="play-btn">▶</div></div>`;
    }
    return `
      <div class="video-card reveal in">
        ${thumb}
        <div class="video-info">
          <h3>${escapeHtml(v.title[lang])}</h3>
          <span>${escapeHtml(v.note ? v.note[lang] : '')}</span>
        </div>
      </div>`;
  }).join('');
}

/* ---------- عرض صفحات المناطق الجغرافية ---------- */
function regionSpeciesCardHtml(sp, lang, g){
  const badgeClass = sp.type === 'venom' ? 'badge-venom' : 'badge-safe';
  const badgeText = sp.type === 'venom' ? g.badgeVenom : g.badgeSafe;
  const photo = sp.img
    ? `<img src="${escapeHtml(sp.img)}" alt="${escapeHtml(sp.name[lang])}" loading="lazy" decoding="async">`
    : `${escapeHtml(sp.name[lang])}<br>${escapeHtml(g.photoSoon)}`;
  const slug = (sp.latin || '').toLowerCase().replace(/ /g, '-');
  const hasArticle = (typeof speciesArticles !== 'undefined') && speciesArticles[slug];
  const cardInner = `
      <div class="species-photo">${photo}<span class="species-badge ${badgeClass}">${escapeHtml(badgeText)}</span></div>
      <div class="species-body">
        <div class="species-top">
          <div><h3>${escapeHtml(sp.name[lang])}</h3><span class="species-latin">${escapeHtml(sp.latin)}</span></div>
        </div>
        <p>${escapeHtml(sp.desc[lang])}</p>
        <div class="species-meta">
          <span>${escapeHtml(g.lengthLabel)}: <strong>${escapeHtml(sp.length[lang])}</strong></span>
          ${sp.diet ? `<span>${escapeHtml(g.dietLabel)}: <strong>${escapeHtml(sp.diet[lang])}</strong></span>` : ''}
          <span>${escapeHtml(g.rangeLabel)}: <strong>${escapeHtml(sp.range[lang])}</strong></span>
        </div>
        ${hasArticle ? `<span class="species-readmore">${escapeHtml((g.readMore || 'اقرأ المقال الكامل ←'))}</span>` : ''}
      </div>`;
  if (hasArticle){
    return `<a href="snake-${slug}.html" class="species-card species-card-link reveal in" data-type="${sp.type}">${cardInner}</a>`;
  }
  return `<div class="species-card reveal in" data-type="${sp.type}">${cardInner}</div>`;
}

function renderRegionsHub(lang){
  const grid = document.getElementById('regions-grid');
  if (!grid || typeof regionsData === 'undefined') return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];
  const rg = dict.regions;
  grid.innerHTML = regionsData.map(r => {
    const list = speciesData.filter(sp => r.speciesLatin.indexOf(sp.latin) > -1);
    const venomCount = list.filter(sp => sp.type === 'venom').length;
    const safeCount = list.length - venomCount;
    return `<a href="region-${r.slug}.html" class="article-row reveal in">
      <div>
        <span class="tag">${escapeHtml(venomCount + ' ' + rg.venomLabel + ' · ' + safeCount + ' ' + rg.safeLabel)}</span>
        <h3>${escapeHtml(r.name[lang])}</h3>
        <p>${escapeHtml(r.blurb[lang])}</p>
      </div>
      <span class="arrow">←</span>
    </a>`;
  }).join('');
}

function renderRegionDetail(lang){
  const grid = document.getElementById('region-species-grid');
  if (!grid || typeof regionsData === 'undefined') return;
  const slug = document.body.dataset.region;
  const r = regionsData.find(x => x.slug === slug);
  if (!r) return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];
  const g = dict.guide;
  const rg = dict.regions;

  const nameEl = document.getElementById('rg-name'); if (nameEl) nameEl.textContent = r.name[lang];
  const bcEl = document.getElementById('rg-breadcrumb-name'); if (bcEl) bcEl.textContent = r.name[lang];
  const blurbEl = document.getElementById('rg-blurb'); if (blurbEl) blurbEl.textContent = r.intro[lang];

  const list = speciesData.filter(sp => r.speciesLatin.indexOf(sp.latin) > -1);
  const eyebrowEl = document.getElementById('rg-eyebrow');
  if (eyebrowEl) eyebrowEl.textContent = list.length + ' ' + rg.speciesFoundHere;

  grid.innerHTML = list.map(sp => regionSpeciesCardHtml(sp, lang, g)).join('');
}

/* ---------- عرض روابط خارطة الموقع ---------- */
function renderSitemapLinks(lang){
  const speciesHost = document.getElementById('sitemap-species-links');
  const regionsHost = document.getElementById('sitemap-region-links');
  const articlesHost = document.getElementById('sitemap-article-links');
  if (!speciesHost && !regionsHost && !articlesHost) return;

  if (speciesHost && typeof speciesData !== 'undefined'){
    speciesHost.innerHTML = speciesData.map(sp => {
      const slug = (sp.latin || '').toLowerCase().replace(/ /g, '-');
      return `<a href="snake-${slug}.html">${escapeHtml(sp.name[lang])}</a>`;
    }).join('');
  }
  if (regionsHost && typeof regionsData !== 'undefined'){
    regionsHost.innerHTML = regionsData.map(r => `<a href="region-${r.slug}.html">${escapeHtml(r.name[lang])}</a>`).join('');
  }
  if (articlesHost && typeof articlesData !== 'undefined'){
    articlesHost.innerHTML = articlesData.map(a => `<a href="${a.href || '#'}">${escapeHtml(a.title[lang])}</a>`).join('');
  }
}

/* ---------- عرض مكتبة المقالات ---------- */
function renderArticles(lang){
  const el = document.getElementById('articles-list');
  if (!el) return;
  el.innerHTML = articlesData.map(a => `
    <a href="${a.href || '#'}" class="article-row reveal in">
      <div>
        <span class="tag">${escapeHtml(a.tag[lang])}</span>
        <h3>${escapeHtml(a.title[lang])}</h3>
        <p>${escapeHtml(a.excerpt[lang])}</p>
      </div>
      <span class="arrow">←</span>
    </a>`).join('');
}

/* ---------- إعادة رسم كل المحتوى الديناميكي للصفحة الحالية ---------- */
function renderPageContent(lang){
  renderSpecies(lang);
  renderUnknown(lang);
  renderStats(lang);
  renderSnakeArticle(lang);
  renderEduArticle(lang);
  renderFaq(lang);
  renderSpeciesArticle(lang, 'venomous-article', 'venom', 'articleVenomous');
  renderSpeciesArticle(lang, 'safe-article', 'safe', 'articleSafe');
  renderPhotos(lang);
  renderVideos(lang);
  renderArticles(lang);
  renderRegionsHub(lang);
  renderRegionDetail(lang);
  renderSitemapLinks(lang);
}

/* ---------- تهيئة عامة ---------- */
document.addEventListener('DOMContentLoaded', () => {

  const currentLang = i18nGetLang();
  applyI18n(currentLang);
  renderPageContent(currentLang);

  /* أزرار تبديل اللغة */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18nSetLang(lang);
      applyI18n(lang);
      renderPageContent(lang);
    });
  });

  /* تبديل قائمة الجوال */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    }));
  }

  /* تظليل الصفحة الحالية في القائمة */
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  /* نافذة عرض الصورة المكبّرة (Lightbox) — تعمل بالنقر مرة واحدة على أي صورة حقيقية */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxLatin = document.getElementById('lightboxLatin');
  const lightboxClose = document.getElementById('lightboxClose');
  const photoGrids = document.querySelectorAll('#photos-grid-venom, #photos-grid-safe');

  function openLightbox(src, caption, latin){
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    lightboxCaption.textContent = caption || '';
    if (lightboxLatin) lightboxLatin.textContent = latin || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  if (photoGrids.length && lightbox){
    photoGrids.forEach(grid => {
      grid.addEventListener('click', (e) => {
        const tile = e.target.closest('.media-tile.has-photo');
        if (tile) openLightbox(tile.dataset.full, tile.dataset.caption, tile.dataset.latin);
      });
    });
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* نافذة تشغيل الفيديو — نفس فكرة الصور، لكن تحمّل الفيديو فقط عند الضغط */
  const videoLightbox = document.getElementById('videoLightbox');
  const videoLightboxFrame = document.getElementById('videoLightboxFrame');
  const videoLightboxClose = document.getElementById('videoLightboxClose');
  const videosGrid = document.getElementById('videos-grid');

  function openVideoLightbox(embedUrl, title){
    if (!videoLightbox) return;
    const src = embedUrl + (embedUrl.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1&rel=0';
    videoLightboxFrame.innerHTML = `<iframe src="${src}" title="${title || ''}" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    videoLightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeVideoLightbox(){
    if (!videoLightbox) return;
    videoLightbox.classList.remove('open');
    videoLightboxFrame.innerHTML = ''; /* إيقاف التشغيل فعليًا بحذف الـ iframe */
    document.body.style.overflow = '';
  }
  if (videosGrid && videoLightbox){
    videosGrid.addEventListener('click', (e) => {
      const thumb = e.target.closest('.video-thumb.has-video');
      if (thumb) openVideoLightbox(thumb.dataset.embed, thumb.dataset.title);
    });
    videoLightboxClose.addEventListener('click', closeVideoLightbox);
    videoLightbox.addEventListener('click', (e) => { if (e.target === videoLightbox) closeVideoLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideoLightbox(); });
  }

  /* فلترة دليل الأفاعي */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyActiveFilter();
    });
  });

  /* ظهور تدريجي عند التمرير لعناصر ثابتة (غير المُولَّدة ديناميكيًا) */
  const revealEls = document.querySelectorAll('.reveal:not(.in)');
  if ('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: .15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

});
