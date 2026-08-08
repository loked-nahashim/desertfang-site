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
      ? `<img src="${escapeHtml(sp.img)}" alt="${escapeHtml(sp.name[lang])}">`
      : `${escapeHtml(sp.name[lang])}<br>${escapeHtml(g.photoSoon)}`;
    return `
      <div class="species-card reveal in" data-type="${sp.type}">
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
        </div>
      </div>`;
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
        <img src="${escapeHtml(sp.imgArticle || sp.img)}" alt="${escapeHtml(sp.name[lang])}">
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

/* لوحة "قيد الإنشاء" المصمّمة — تُعرض في مكتبة المغامرات قبل نشر أي رحلة */
function underConstructionHtml(a, nav){
  const btn = (href, label) => `<a href="${href}" class="btn btn-outline">${escapeHtml(label)}</a>`;
  return `
    <div class="under-construction reveal in">
      <span class="uc-badge">${escapeHtml(a.ucBadge)}</span>
      <div class="uc-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3 21h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M14.7 6.3l3 3L9 18l-3.6.6L6 15l8.7-8.7z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M13.3 7.7l3 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M15.5 3.5l1.4-1.4a1.6 1.6 0 0 1 2.3 0l1.2 1.2a1.6 1.6 0 0 1 0 2.3l-1.4 1.4-3.5-3.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
      </div>
      <h2>${escapeHtml(a.ucTitle)}</h2>
      <p>${escapeHtml(a.ucText)}</p>
      <div class="uc-cta">
        <span class="uc-cta-label">${escapeHtml(a.ucCta)}</span>
        <div class="uc-links">
          ${btn('guide.html', nav.guide)}
          ${btn('photos.html', nav.photos)}
          ${btn('articles.html', nav.articles)}
        </div>
      </div>
    </div>`;
}

/* ---------- عرض مغامراتي وصيدي ---------- */
function renderAdventures(lang){
  const el = document.getElementById('adventures-timeline');
  if (!el) return;
  const dict = I18N[lang] || I18N[I18N_DEFAULT_LANG];
  const real = adventuresData.filter(a => !isPlaceholder(a.title && a.title[lang]));

  /* ملاحظة المطوّر (كيفية إضافة مغامرة) نخفيها في وضع "قيد الإنشاء" ليبدو للزائر متقنًا */
  const devNote = el.parentElement ? el.parentElement.querySelector('.notice') : null;

  if (!real.length){
    el.classList.remove('timeline');
    el.innerHTML = underConstructionHtml(dict.adventures, dict.nav);
    if (devNote) devNote.style.display = 'none';
    return;
  }
  if (devNote) devNote.style.display = '';
  el.classList.add('timeline');
  el.innerHTML = real.map(a => `
    <div class="timeline-item reveal in">
      <span class="date">${escapeHtml(a.date[lang])}</span>
      <h3>${escapeHtml(a.title[lang])}</h3>
      <p>${escapeHtml(a.text[lang])}</p>
      <span class="loc">📍 ${escapeHtml(a.loc[lang])}</span>
    </div>`).join('');
}

/* ---------- عرض مكتبة الصور ---------- */
function renderPhotos(lang){
  const venomGrid = document.getElementById('photos-grid-venom');
  const safeGrid = document.getElementById('photos-grid-safe');
  if (!venomGrid && !safeGrid) return;

  function tileHtml(p){
    if (p.src){
      return `<div class="media-tile has-photo reveal in" data-full="${escapeHtml(p.src)}" data-caption="${escapeHtml(p.caption[lang])}" data-latin="${escapeHtml(p.latin || '')}"><img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.caption[lang])}"></div>`;
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
  renderSpeciesArticle(lang, 'venomous-article', 'venom', 'articleVenomous');
  renderSpeciesArticle(lang, 'safe-article', 'safe', 'articleSafe');
  renderAdventures(lang);
  renderPhotos(lang);
  renderVideos(lang);
  renderArticles(lang);
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
