

const navItemEl = document.createElement('li');
navItemEl.classList.add(".site-nav__item");

const navLinkEl = document.createElement('a');
navLinkEl.classList.add(".site-nav__link");
navLinkEl.textContent = 'Кабинет';
navLinkEl.href = '/portfolio';

// console.log(navLinkEl);

navItemEl.append(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// navEl.append(navItemEl);

// navEl.prepend(navItemEl)

// navEl.before(navItemEl);

navEl.insertBefore(navItemEl, navEl.lastElementChild);
