

// const navItemEl = document.createElement('li');
// navItemEl.classList.add(".site-nav__item");

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add(".site-nav__link");
// navLinkEl.textContent = 'Кабинет';
// navLinkEl.href = '/portfolio';

// // console.log(navLinkEl);

// navItemEl.append(navLinkEl);
// console.log(navItemEl);

// const navEl = document.querySelector('.site-nav');
// navEl.append(navItemEl);

// navEl.prepend(navItemEl)

// navEl.before(navItemEl);

// navEl.insertBefore(navItemEl, navEl.lastElementChild);

const technologies = ['CSS', 'HTML', "JavaScript", 'Node', 'React']

// const listEl = document.createElement('ul');

// for (const technology of technologies) {
//     const liEl = document.createElement("li");
//     liEl.textContent = technology;

//     // const text = document.create.createTextNode(technology);
//     // liEl.appendChild(text);

//     listEl.appendChild(liEl);
// }
// document.body.append(listEl);

//*=============map================

// const mapMethod = `<ul>${technologies.map((technology) => `<li>${technology}</li>`).join('')}</ul>`;

// document.body.insertAdjacentHTML("afterbegin", mapMethod);


//*============= reduce ================

// const reduceMethod = `<ul>${technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`), ''
// )}</ul>`;

//  document.body.insertAdjacentHTML("afterbegin", reduceMethod);

//? ===============================

// const colors = [
//     {
//         label: 'red',
//         color: '#FF0000',
//     },
//    {
//         label: 'green',
//         color: '#00FF00',
//     },
//     {
//         label: 'blue',
//         color: '#0000FF',
//     },
//    {
//         label: 'yellow',
//         color: '#FFFF00',
//     }
// ];

// const fragment = document.createDocumentFragment();
    
// colors.forEach(({ label, color }) => {
//     const buttonEl = document.createElement('button');
//     buttonEl.textContent = label;
//     buttonEl.style.backgroundColor = color;
//     buttonEl.style.margin = '5px';
//     buttonEl.className = 'button';
//     buttonEl.style.width = '70px';
//     buttonEl.style.height = '70px';

//     fragment.appendChild(buttonEl);
//     // document.body.appendChild(buttonEl);
// });
// document.body.appendChild(fragment);