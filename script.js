const members = [
  { name: 'Tawfieg Osman', role: 'Lead vocal · Percussion', image: 'Tawfieg.jpg', bio: 'Tawfieg began singing in high school, with his serious musical journey taking shape during college.', tags: ['Sudanese golden age', 'Haqiba'], facts: [['From', 'Omdurman, Sudan'], ['Languages', 'Arabic'], ['Instruments', 'Keyboard · beginner percussion'], ['Signature songs', 'حنيني إليك · محمد ميرغني; عاطفة وحنان · محمد ميرغني; الحجروك عليا · يوسف الموصلي'], ['Influence', 'محمد ميرغني']], quote: 'Add Tawfieg’s own words here.' },
  { name: 'Montasir Abbas', role: 'Lead vocal · Oud', image: 'montasir-abbas.png', bio: 'Montasir started playing Sudanese-style oud in the late 1980s. Over the past decade, he has studied Arabic music maqams with Simon Shaheen, Cherbel Rouhana, Issa Boulos, and others, while listening closely to Hashim Mirghani.', tags: ['Sudanese golden age', 'Haqiba', 'Modern Arabic'], facts: [['From', 'Omdurman, Sudan'], ['Maqams', 'Nahawand, Kurd, pentatonic'], ['Languages', 'Sudanese, Egyptian, Khaliji'], ['Instrument', 'Oud'], ['Moment', 'SASF 2026']], quote: 'I love the oud, music, and poetry.' },
  { name: 'Sharaf Yaseen', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for Sharaf’s role, background, and musical story.', tags: ['Profile pending'], facts: [], quote: 'Add Sharaf’s own words here.' },
  { name: 'Mohamed Osman', role: 'Lead vocal', image: 'Mohamed.jpeg', bio: 'Mohamed began performing in school competitions and with the Abnous Troupe, led by Mr. Nasser Abdulaziz. His musical world is shaped by a lasting passion for singing and Sudanese artists.', tags: ['Modern singing', 'Sudanese music'], facts: [['From', 'Khartoum North, Sudan'], ['Languages', 'Arabic'], ['Signature song', 'Bakhaf — Abu Araki / Al-Bakhit'], ['Influences', 'Mahmoud Abdel Aziz, Abu Araki, Al-Hadi Al-Jabal, Al-Tayeb Abdullah, Zidan']], quote: 'I have had a talent since I was young. I love music and I am passionate about it.' },
  { name: 'Abusugra', role: 'Lead vocal', image: 'Abusugra.jpeg', bio: 'From Sudan, Abusugra brings a love of singing and a Sudanese musical sensibility to the ensemble.', tags: ['Sudanese'], facts: [['From', 'Sudan'], ['Languages', 'Arabic'], ['Instrument', 'Organ']], quote: 'Singing.' },
  { name: 'Khidir Maaz', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for Khidir’s role, background, and musical story.', tags: ['Profile pending'], facts: [], quote: 'Add Khidir’s own words here.' },
  { name: 'Alhawi', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for Alhawi’s role, background, and musical story.', tags: ['Profile pending'], facts: [], quote: 'Add Alhawi’s own words here.' }
];

const totalMembers = members.length;

const fallingNotes = document.querySelector('.falling-notes');
const noteGlyphs = ['♪', '♫', '♩', '♬', '♪', '♩', '♫', '♪', '♬'];
noteGlyphs.forEach((glyph, index) => {
  const note = document.createElement('span');
  note.className = 'falling-note';
  note.textContent = glyph;
  note.style.left = `${4 + (index * 29) % 92}%`;
  note.style.setProperty('--fall-duration', `${26 + (index % 4) * 6}s`);
  note.style.setProperty('--fall-delay', `${-index * 4.1}s`);
  note.style.setProperty('--fall-drift', `${index % 2 ? 46 : -38}px`);
  note.style.setProperty('--fall-rotation', `${-18 + index * 9}deg`);
  fallingNotes.appendChild(note);
});

const memberArabic = {
  'Tawfieg Osman': { name: 'توفيق عثمان', role: 'غناء رئيسي · إيقاع', bio: 'بدأ توفيق الغناء في المرحلة الثانوية، لكن انطلاقته الموسيقية الحقيقية كانت في الجامعة.', tags: ['العصر الذهبي السوداني', 'الحقيبة'], facts: [['من', 'أم درمان، السودان'], ['اللغات', 'العربية'], ['الآلات', 'كيبورد · إيقاع للمبتدئين'], ['أغانٍ مميزة', 'حنيني إليك · محمد ميرغني؛ عاطفة وحنان · محمد ميرغني؛ الحجروك عليا · يوسف الموصلي'], ['التأثير', 'محمد ميرغني']], quote: 'أضف كلمات توفيق هنا.' },
  'Montasir Abbas': { name: 'منتصر عباس', role: 'غناء رئيسي · عود', bio: 'بدأ منتصر عزف العود بالطريقة السودانية في أواخر الثمانينيات. وخلال العقد الماضي تعلّم مقامات الموسيقى العربية على يد سيمون شاهين وشربل روحانا وعيسى بولس وغيرهم، مع استماع متواصل إلى هاشم ميرغني.', tags: ['العصر الذهبي السوداني', 'الحقيبة', 'العربي الحديث'], facts: [['من', 'أم درمان، السودان'], ['المقامات', 'نهاوند، كرد، خماسي'], ['اللغات', 'السودانية، المصرية، الخليجية'], ['الآلة', 'العود'], ['مناسبة', 'SASF 2026']], quote: 'أحب العود والموسيقى والشعر.' },
  'Sharaf Yaseen': { name: 'شرف يس', role: 'عضو في الفرقة', bio: 'هذا الملف جاهز لإضافة دور شرف وخلفيته وقصته الموسيقية.', tags: ['الملف قيد الإعداد'], quote: 'أضف كلمات شرف هنا.' },
  'Mohamed Osman': { name: 'محمد عثمان', role: 'غناء رئيسي', bio: 'بدأ محمد المشاركة في مسابقات المدرسة ومع فرقة الأبنوس بقيادة الأستاذ ناصر عبد العزيز. وتشكل شغفه الموسيقي محبة الغناء والفنانين السودانيين.', tags: ['غناء حديث', 'موسيقى سودانية'], facts: [['من', 'الخرطوم بحري، السودان'], ['اللغات', 'العربية'], ['أغنية مميزة', 'بخاف — أبو عركي / البخيت'], ['التأثيرات', 'محمود عبد العزيز، أبو عركي، الهادي الجبل، الطيب عبد الله، زيدان']], quote: 'كانت لدي موهبة منذ الصغر. أحب الموسيقى وشغوف بها.' },
  'Abusugra': { name: 'أبوسقرة', role: 'غناء رئيسي', bio: 'من السودان، يجلب أبوسقرة محبة الغناء وحساً موسيقياً سودانياً إلى الفرقة.', tags: ['سوداني'], facts: [['من', 'السودان'], ['اللغات', 'العربية'], ['الآلة', 'الأورغ']], quote: 'الغناء.' },
  'Khidir Maaz': { name: 'خضر معاذ', role: 'عضو في الفرقة', bio: 'هذا الملف جاهز لإضافة دور خضر وخلفيته وقصته الموسيقية.', tags: ['الملف قيد الإعداد'], quote: 'أضف كلمات خضر هنا.' },
  'Alhawi': { name: 'الحاوي', role: 'عضو في الفرقة', bio: 'هذا الملف جاهز لإضافة دور الحاوي وخلفيته وقصته الموسيقية.', tags: ['الملف قيد الإعداد'], quote: 'أضف كلمات الحاوي هنا.' }
};

// Add videos here with the YouTube URL and the member names who appear in them.
const media = [
  {
    title: 'إمتى أرجع لأمدر و أعوده—توفيق و منتصر',
    youtubeId: 'TfEayDvVOJs',
    url: 'https://www.youtube.com/watch?v=TfEayDvVOJs',
    members: ['Montasir Abbas', 'Tawfieg Osman', 'Alhawi']
  },
  {
    title: 'العيون فيها سلام—شرف',
    youtubeId: 'KuNto16VF78',
    url: 'https://www.youtube.com/watch?v=KuNto16VF78',
    members: ['Sharaf Yaseen', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'أنا فيك عشقت—محمد',
    youtubeId: 'rC8z3XWvdjg',
    url: 'https://www.youtube.com/watch?v=rC8z3XWvdjg',
    members: ['Mohamed Osman', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'كلمني يا حلو العيون—توفيق',
    youtubeId: 'GUNiEn1rlV8',
    url: 'https://www.youtube.com/watch?v=GUNiEn1rlV8&t=34s',
    members: ['Tawfieg Osman', 'Montasir Abbas', 'Alhawi']
  },
  {
    title: 'قول النصيحة—شرف',
    youtubeId: 'qe0P2UKyOnw',
    url: 'https://www.youtube.com/watch?v=qe0P2UKyOnw',
    members: ['Sharaf Yaseen', 'Montasir Abbas', 'Alhawi', 'Tawfieg Osman']
  },
  {
    title: 'يا ناعم العود—توفيق و منتصر',
    youtubeId: 'awbDeGfdtw0',
    url: 'https://www.youtube.com/watch?v=awbDeGfdtw0',
    members: ['Tawfieg Osman', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'أحلى جارة—شرف',
    youtubeId: '2ViOU2hIVP4',
    url: 'https://www.youtube.com/watch?v=2ViOU2hIVP4',
    members: ['Sharaf Yaseen', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'أنا فيك عشقت—محمد',
    youtubeId: 'fxlgvdJ45-g',
    url: 'https://www.youtube.com/watch?v=fxlgvdJ45-g',
    members: ['Mohamed Osman', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'طريقة دايما فارشو ورد—محمد',
    youtubeId: '18d_pdq6_qM',
    url: 'https://www.youtube.com/watch?v=18d_pdq6_qM',
    members: ['Mohamed Osman', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'بخاف—محمد',
    youtubeId: 'g_54Pt3Q7Yw',
    url: 'https://www.youtube.com/watch?v=g_54Pt3Q7Yw',
    members: ['Mohamed Osman', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  },
  {
    title: 'أسمعنا مرة—شرف',
    youtubeId: 'KQotEpE_TR0',
    url: 'https://www.youtube.com/watch?v=KQotEpE_TR0',
    members: ['Sharaf Yaseen', 'Montasir Abbas', 'Alhawi', 'Osama Elasad']
  }
];

// Each picture: { image, title: { en, ar }, detail: { en, ar } }. Originals live in the Jalsat folder; web copies in pictures/.
const rollingPictures = [
  { image: 'pictures/img_2167.jpg', title: { en: 'Under the festival tent', ar: 'تحت خيمة المهرجان' }, detail: { en: 'SASF · on stage', ar: 'SASF · على المسرح' } },
  { image: 'pictures/img_2169.jpg', title: { en: 'Singing to the crowd', ar: 'غناء للجمهور' }, detail: { en: 'SASF · on stage', ar: 'SASF · على المسرح' } },
  { image: 'pictures/img_2161.jpg', title: { en: 'Before the set', ar: 'قبل الوصلة' }, detail: { en: 'SASF · backstage', ar: 'SASF · خلف الكواليس' } },
  { image: 'pictures/img_2217.jpg', title: { en: 'A night in New York', ar: 'ليلة في نيويورك' }, detail: { en: 'After the show', ar: 'بعد الحفل' } },
  { image: 'pictures/img_0180.jpg', title: { en: 'Michigan', ar: 'ميشيغان' }, detail: { en: 'Jalsat Tarab', ar: 'جلسة طرب' } }
];

const translations = {
  en: {
    htmlLang: 'en', direction: 'ltr', nav: ['Our sound', 'The ensemble', 'Media', 'Guestbook'], headerCta: 'Meet the seven <span>↗</span>', aboutTag: '01 / The feeling', aboutTitle: 'A gathering,<br><em>not a genre.</em>', aboutOne: 'We meet somewhere between Sudanese golden age, Arabic tarab, poetry longing, and the songs our parents played too loud.', aboutTwo: 'There is a pulse underneath it all: listen deeply, answer honestly, and let the room decide where the song goes next.', membersTag: '02 / The people', membersTitle: 'Seven ways to<br><em>say the same thing.</em>', mediaTag: '03 / On record', mediaTitle: 'Shared<br><em>moments.</em>', mediaIntro: 'Watch the ensemble in motion. Each video connects back to the people singing and playing in it.', mediaEmpty: 'Videos will appear here when the ensemble’s recordings are ready.', mediaWatch: 'Open on YouTube <span>↗</span>', guestbookTag: '04 / Leave a note', guestbookTitle: 'What did<br><em>you hear?</em>', guestbookIntro: 'Leave a thought for the ensemble. Notes are reviewed before they appear here.', nameLabel: 'Your name', noteLabel: 'Your note', namePlaceholder: 'A name or initials', notePlaceholder: 'Tell us what stayed with you...', post: 'Post note <span>↗</span>', footer: 'Seven musicians. One open room.', next: 'Next member <span>→</span>', photoEmpty: 'Your ensemble pictures will roll here.', commentEmpty: 'The guestbook is open. Be the first to leave a note.', commentUnavailable: 'The guestbook is temporarily unavailable.', sending: 'Sending your note for review...', thankYou: 'Thank you. Your note is awaiting approval.', sendError: 'The note could not be sent. Please try again.', notConnected: 'The guestbook is not connected yet.'
  },
  ar: {
    htmlLang: 'ar', direction: 'rtl', nav: ['صوتنا', 'الأعضاء', 'المواد المرئية', 'دفتر الزوار'], headerCta: 'تعرّف على السبعة <span>↗</span>', aboutTag: '01 / الإحساس', aboutTitle: 'جلسة،<br><em>لا نوع موسيقي.</em>', aboutOne: 'نلتقي بين العصر الذهبي للموسيقى السودانية، والطرب العربي، والشجن الشعري، والأغاني التي كان آباؤنا يرفعون صوتها.', aboutTwo: 'تحت كل ذلك نبض واحد: أن نصغي بعمق، ونجيب بصدق، ونترك للمجلس أن يقرر إلى أين تمضي الأغنية.', membersTag: '02 / الأشخاص', membersTitle: 'سبعة طرق<br><em>لقول الشيء نفسه.</em>', mediaTag: '03 / في التسجيل', mediaTitle: 'لحظات<br><em>مشتركة.</em>', mediaIntro: 'شاهد الفرقة وهي تغني وتعزف. كل فيديو يقودك إلى الأشخاص المشاركين فيه.', mediaEmpty: 'ستظهر الفيديوهات هنا عندما تصبح تسجيلات الفرقة جاهزة.', mediaWatch: 'شاهد على يوتيوب <span>↗</span>', guestbookTag: '04 / اترك رسالة', guestbookTitle: 'ماذا<br><em>سمعت؟</em>', guestbookIntro: 'اترك كلمة للفرقة. نراجع الرسائل قبل ظهورها هنا.', nameLabel: 'اسمك', noteLabel: 'رسالتك', namePlaceholder: 'الاسم أو الأحرف الأولى', notePlaceholder: 'اكتب ما بقي معك...', post: 'انشر الرسالة <span>↗</span>', footer: 'سبعة موسيقيين. مجلس واحد مفتوح.', next: 'العضو التالي <span>→</span>', photoEmpty: 'ستظهر صور الفرقة هنا بالتتابع.', commentEmpty: 'دفتر الزوار مفتوح. كن أول من يترك رسالة.', commentUnavailable: 'دفتر الزوار غير متاح مؤقتاً.', sending: 'جارٍ إرسال رسالتك للمراجعة...', thankYou: 'شكراً لك. رسالتك بانتظار الموافقة.', sendError: 'تعذّر إرسال الرسالة. حاول مرة أخرى.', notConnected: 'دفتر الزوار غير متصل بعد.'
  }
};

// Featured guests who are not ensemble members: English name -> Arabic name.
const guestArabic = { 'Osama Elasad': 'أسامة الأسد' };
function localizedGuestName(name) {
  return document.documentElement.lang === 'ar' && guestArabic[name] ? guestArabic[name] : name;
}

function localizedMemberName(member) {
  return document.documentElement.lang === 'ar' ? memberArabic[member.name].name : member.name;
}

function setLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = copy.htmlLang;
  document.documentElement.dir = copy.direction;
  document.querySelectorAll('.nav a').forEach((link, index) => { link.textContent = copy.nav[index]; });
  document.querySelector('.header-cta').innerHTML = copy.headerCta;
  const sectionTags = document.querySelectorAll('.section-tag');
  sectionTags[0].textContent = copy.aboutTag;
  sectionTags[1].textContent = copy.membersTag;
  sectionTags[2].textContent = copy.mediaTag;
  sectionTags[3].textContent = copy.guestbookTag;
  document.querySelector('.about h2').innerHTML = copy.aboutTitle;
  document.querySelectorAll('.about-copy p')[0].textContent = copy.aboutOne;
  document.querySelectorAll('.about-copy p')[1].textContent = copy.aboutTwo;
  document.querySelector('.members h2').innerHTML = copy.membersTitle;
  document.querySelector('.media h2').innerHTML = copy.mediaTitle;
  document.querySelector('.media-head p').textContent = copy.mediaIntro;
  document.querySelector('.guestbook h2').innerHTML = copy.guestbookTitle;
  document.querySelector('.guestbook-intro').textContent = copy.guestbookIntro;
  document.querySelector('label[for="visitor-name"]').textContent = copy.nameLabel;
  document.querySelector('label[for="visitor-comment"]').textContent = copy.noteLabel;
  document.querySelector('#visitor-name').placeholder = copy.namePlaceholder;
  document.querySelector('#visitor-comment').placeholder = copy.notePlaceholder;
  document.querySelector('.comment-form button').innerHTML = copy.post;
  document.querySelector('.next-member').innerHTML = copy.next;
  document.querySelector('.site-footer p').textContent = copy.footer;
  document.querySelectorAll('.footer-links a')[0].textContent = language === 'ar' ? 'إنستغرام ↗' : 'Instagram ↗';
  document.querySelectorAll('.footer-links a')[1].textContent = language === 'ar' ? 'تواصل ↗' : 'Contact ↗';
  renderPhoto(photoIndex);
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', button.dataset.language === language));
  localizeMedia(copy);
  document.querySelector('.photo-banner').setAttribute('aria-label', language === 'ar' ? 'صور الفرقة المتتابعة' : 'Jalsat Tarab rolling pictures');
  document.querySelector('.photo-prev').setAttribute('aria-label', language === 'ar' ? 'الصورة السابقة' : 'Previous picture');
  document.querySelector('.photo-next').setAttribute('aria-label', language === 'ar' ? 'الصورة التالية' : 'Next picture');
  document.querySelector('.member-tabs').setAttribute('aria-label', language === 'ar' ? 'أعضاء الفرقة' : 'Ensemble members');
  document.querySelector('.nav').setAttribute('aria-label', language === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation');
  document.querySelector('.language-toggle').setAttribute('aria-label', language === 'ar' ? 'اختيار اللغة' : 'Language switcher');
  document.querySelector('.photo-dots').setAttribute('aria-label', language === 'ar' ? 'اختيار الصورة' : 'Picture selection');
  document.querySelector('.media-list').setAttribute('aria-label', language === 'ar' ? 'فيديوهات جلسة طرب والأعضاء المشاركون' : 'Jalsat Tarab videos and participating members');
  renderCommentsLanguage();
  selectMember(activeIndex);
}

function renderCommentsLanguage() {
  const copy = translations[document.documentElement.lang];
  const empty = document.querySelector('.comment-empty');
  if (empty) empty.textContent = copy.commentEmpty;
  const status = document.querySelector('.comment-status');
  if (status.dataset.state === 'empty') status.textContent = '';
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));

const tabs = document.querySelector('.member-tabs');
const detail = document.querySelector('.member-detail');
let activeIndex = 0;

const mediaList = document.querySelector('.media-list');
const photoStage = document.querySelector('.photo-banner-stage');
const photoDots = document.querySelector('.photo-dots');
let photoIndex = 0;
let photoTimer;

function renderPhoto(index) {
  if (!rollingPictures.length) {
    photoStage.innerHTML = `<div class="photo-empty">${translations[document.documentElement.lang].photoEmpty}</div>`;
    photoDots.innerHTML = '';
    return;
  }
  const picture = rollingPictures[index];
  const language = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const title = picture.title[language];
  const detail = (picture.detail && picture.detail[language]) || 'Jalsat Tarab';
  photoStage.innerHTML = `<figure class="photo-slide"><img src="${picture.image}" alt="${title}"><figcaption><strong>${title}</strong><span>${detail}</span></figcaption></figure>`;
  photoDots.querySelectorAll('.photo-dot').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
}

function nextPhoto(step = 1) {
  if (!rollingPictures.length) return;
  photoIndex = (photoIndex + step + rollingPictures.length) % rollingPictures.length;
  renderPhoto(photoIndex);
}

document.querySelector('.photo-prev').addEventListener('click', () => { nextPhoto(-1); resetPhotoTimer(); });
document.querySelector('.photo-next').addEventListener('click', () => { nextPhoto(); resetPhotoTimer(); });

function resetPhotoTimer() {
  clearInterval(photoTimer);
  if (rollingPictures.length > 1) photoTimer = setInterval(() => nextPhoto(), 6000);
}

if (rollingPictures.length) {
  rollingPictures.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `photo-dot${index === 0 ? ' active' : ''}`;
    dot.type = 'button';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Picture ${index + 1}`);
    dot.addEventListener('click', () => { photoIndex = index; renderPhoto(photoIndex); resetPhotoTimer(); });
    photoDots.appendChild(dot);
  });
}
renderPhoto(0);
resetPhotoTimer();

function renderMedia() {
  if (!media.length) {
    mediaList.innerHTML = `<li class="media-empty">${translations[document.documentElement.lang].mediaEmpty}</li>`;
    return;
  }
  mediaList.innerHTML = media.map((video) => {
    const people = video.members.map((memberName) => {
      const memberIndex = members.findIndex(member => member.name === memberName);
      if (memberIndex < 0) return `<span class="media-guest" data-guest="${memberName}">${localizedGuestName(memberName)}</span>`;
      return `<a class="media-profile-link" href="#members" data-member-index="${memberIndex}">${localizedMemberName(members[memberIndex])}</a>`;
    }).join('');
    return `<li class="media-card"><iframe class="media-player" src="https://www.youtube.com/embed/${video.youtubeId}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><strong dir="auto">${video.title}</strong><div class="media-people">${people}</div><a class="media-watch" href="${video.url}" target="_blank" rel="noopener">${translations[document.documentElement.lang].mediaWatch}</a></li>`;
  }).join('');
  mediaList.querySelectorAll('.media-profile-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      selectMember(Number(link.dataset.memberIndex));
      document.querySelector('#members').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function localizeMedia(copy) {
  const empty = mediaList.querySelector('.media-empty');
  if (empty) empty.textContent = copy.mediaEmpty;
  mediaList.querySelectorAll('.media-profile-link').forEach((link) => {
    const memberIndex = Number(link.dataset.memberIndex);
    if (memberIndex >= 0) link.textContent = localizedMemberName(members[memberIndex]);
  });
  mediaList.querySelectorAll('.media-guest').forEach((guest) => { guest.textContent = localizedGuestName(guest.dataset.guest); });
  mediaList.querySelectorAll('.media-watch').forEach((link) => { link.innerHTML = copy.mediaWatch; });
}

const commentForm = document.querySelector('.comment-form');
const commentList = document.querySelector('.comment-list');
const commentStatus = document.querySelector('.comment-status');
const commentText = document.querySelector('#visitor-comment');
const characterCount = document.querySelector('.character-count');
const COMMENTS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwa2CbBLrNwlN4GyyRZDjGYYAenREBTtQcZSFQpLEFlUQxVShLjIwt1Jf1H6FXdvais/exec';
const COMMENTS_STREAM = 'jalsat-tarab-guestbook';

function renderComments(comments) {
  commentList.innerHTML = '';
  if (!comments.length) {
    commentList.innerHTML = `<p class="comment-empty">${translations[document.documentElement.lang].commentEmpty}</p>`;
    return;
  }
  comments.forEach(({ name, text, date }) => {
    const entry = document.createElement('article');
    entry.className = 'comment';
    const header = document.createElement('header');
    const nameElement = document.createElement('span');
    nameElement.className = 'comment-name';
    nameElement.textContent = name;
    const dateElement = document.createElement('span');
    dateElement.className = 'comment-date';
    dateElement.textContent = date;
    const textElement = document.createElement('p');
    textElement.textContent = text;
    header.append(nameElement, dateElement);
    entry.append(header, textElement);
    commentList.appendChild(entry);
  });
}

// The Apps Script endpoint occasionally stalls or returns an error page,
// so retry a few times before showing the "unavailable" message (same as Diwan).
async function loadComments(attempt = 1) {
  if (!COMMENTS_ENDPOINT) {
    renderComments([]);
    return;
  }
  try {
    const response = await fetch(`${COMMENTS_ENDPOINT}?action=list&poem=${encodeURIComponent(COMMENTS_STREAM)}`);
    const data = await response.json();
    if (!data.ok || !Array.isArray(data.comments)) throw new Error('Bad response');
    renderComments(data.comments);
  } catch (error) {
    if (attempt < 3) return loadComments(attempt + 1);
    commentList.innerHTML = `<p class="comment-empty">${translations[document.documentElement.lang].commentUnavailable}</p>`;
  }
}

commentText.addEventListener('input', () => {
  characterCount.textContent = `${commentText.value.length} / 280`;
});

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!COMMENTS_ENDPOINT) {
    commentStatus.textContent = translations[document.documentElement.lang].notConnected;
    return;
  }
  const formData = new FormData(commentForm);
  const name = formData.get('name').trim();
  const comment = formData.get('comment').trim();
  const website = (formData.get('website') || '').trim();
  if (!name || !comment) return;
  const submitButton = commentForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  commentStatus.textContent = translations[document.documentElement.lang].sending;
  fetch(COMMENTS_ENDPOINT, {
    method: 'POST',
    body: new URLSearchParams({ action: 'submit', name, message: comment, poem: COMMENTS_STREAM, title: 'Jalsat Tarab guestbook', website })
  }).then(response => response.json().catch(() => null)).then(data => {
    if (!data || !data.ok) throw new Error('Comment submission failed');
    commentForm.reset();
    characterCount.textContent = '0 / 280';
    commentStatus.textContent = translations[document.documentElement.lang].thankYou;
  }).catch(() => {
    commentStatus.textContent = translations[document.documentElement.lang].sendError;
  }).finally(() => {
    submitButton.disabled = false;
  });
});

loadComments();

members.forEach((member, index) => {
  const tab = document.createElement('button');
  tab.className = `member-tab${index === 0 ? ' active' : ''}`;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', index === 0);
  tab.innerHTML = `<span class="tab-number">0${index + 1}</span><span class="member-tab-name">${localizedMemberName(member)}</span>`;
  tab.addEventListener('click', () => selectMember(index));
  tabs.appendChild(tab);
});

function selectMember(index) {
  activeIndex = index;
  const member = members[index];
  const localized = document.documentElement.lang === 'ar' ? memberArabic[member.name] : null;
  const role = localized?.role || member.role;
  const bio = localized?.bio || member.bio;
  const tags = localized?.tags || member.tags;
  const facts = localized?.facts || member.facts;
  const quote = localized?.quote || member.quote;
  const displayName = localized?.name || member.name;
  document.querySelectorAll('.member-tab').forEach((tab, tabIndex) => {
    tab.classList.toggle('active', tabIndex === index);
    tab.setAttribute('aria-selected', tabIndex === index);
    tab.querySelector('.member-tab-name').textContent = localizedMemberName(members[tabIndex]);
  });
  detail.querySelector('img').src = member.image;
  detail.querySelector('img').alt = `${displayName}، ${role}`;
  detail.querySelector('.image-index').textContent = `0${index + 1}`;
  detail.querySelector('.member-role').textContent = role;
  detail.querySelector('h3').textContent = displayName;
  detail.querySelector('.member-bio').textContent = bio;
  detail.querySelector('.member-meta').innerHTML = tags.map(tag => `<span>${tag}</span>`).join('');
  detail.querySelector('.member-facts').innerHTML = facts.map(([label, value]) => `<dl class="member-fact"><dt>${label}</dt><dd>${value}</dd></dl>`).join('');
  detail.querySelector('blockquote').textContent = `“${quote}”`;
  document.querySelector('.member-count').innerHTML = `0${index + 1} <span>/</span> 0${totalMembers}`;
}

detail.querySelector('.next-member').addEventListener('click', () => selectMember((activeIndex + 1) % members.length));
selectMember(0);
renderMedia();
setLanguage('ar');