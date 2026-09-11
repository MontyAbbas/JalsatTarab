const members = [
  { name: 'Member 01', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' },
  { name: 'Member 02', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' },
  { name: 'Member 03', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' },
  { name: 'Member 04', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' },
  { name: 'Member 05', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' },
  { name: 'Member 06', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' },
  { name: 'Member 07', role: 'Ensemble member', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85', bio: 'This profile is ready for the member’s name, role, background, and musical story.', tags: ['Profile pending'], quote: 'Add this member’s own words here.' }
];

const totalMembers = members.length;

const tabs = document.querySelector('.member-tabs');
const detail = document.querySelector('.member-detail');
let activeIndex = 0;

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
    commentList.innerHTML = '<p class="comment-empty">The guestbook is open. Be the first to leave a note.</p>';
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

async function loadComments() {
  if (!COMMENTS_ENDPOINT) {
    renderComments([]);
    return;
  }
  try {
    const response = await fetch(`${COMMENTS_ENDPOINT}?action=list&poem=${encodeURIComponent(COMMENTS_STREAM)}`);
    const data = await response.json();
    renderComments(data.ok ? data.comments : []);
  } catch (error) {
    commentList.innerHTML = '<p class="comment-empty">The guestbook is temporarily unavailable.</p>';
  }
}

commentText.addEventListener('input', () => {
  characterCount.textContent = `${commentText.value.length} / 280`;
});

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!COMMENTS_ENDPOINT) {
    commentStatus.textContent = 'The guestbook is not connected yet.';
    return;
  }
  const formData = new FormData(commentForm);
  const name = formData.get('name').trim();
  const comment = formData.get('comment').trim();
  if (!name || !comment) return;
  const submitButton = commentForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  commentStatus.textContent = 'Sending your note for review...';
  fetch(COMMENTS_ENDPOINT, {
    method: 'POST',
    body: new URLSearchParams({ action: 'submit', name, message: comment, poem: COMMENTS_STREAM, title: 'Jalsat Tarab guestbook', website: '' })
  }).then(response => response.json()).then(data => {
    if (!data.ok) throw new Error('Comment submission failed');
    commentForm.reset();
    characterCount.textContent = '0 / 280';
    commentStatus.textContent = 'Thank you. Your note is awaiting approval.';
  }).catch(() => {
    commentStatus.textContent = 'The note could not be sent. Please try again.';
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
  tab.innerHTML = `<span class="tab-number">0${index + 1}</span>${member.name}`;
  tab.addEventListener('click', () => selectMember(index));
  tabs.appendChild(tab);
});

function selectMember(index) {
  activeIndex = index;
  const member = members[index];
  document.querySelectorAll('.member-tab').forEach((tab, tabIndex) => {
    tab.classList.toggle('active', tabIndex === index);
    tab.setAttribute('aria-selected', tabIndex === index);
  });
  detail.querySelector('img').src = member.image;
  detail.querySelector('img').alt = `${member.name}, ${member.role}`;
  detail.querySelector('.image-index').textContent = `0${index + 1}`;
  detail.querySelector('.member-role').textContent = member.role;
  detail.querySelector('h3').textContent = member.name;
  detail.querySelector('.member-bio').textContent = member.bio;
  detail.querySelector('.member-meta').innerHTML = member.tags.map(tag => `<span>${tag}</span>`).join('');
  detail.querySelector('blockquote').textContent = `“${member.quote}”`;
  document.querySelector('.member-count').innerHTML = `0${index + 1} <span>/</span> 0${totalMembers}`;
}

detail.querySelector('.next-member').addEventListener('click', () => selectMember((activeIndex + 1) % members.length));
selectMember(0);