'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Better way of using forEeach instead of going through all the buttons
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/**
 * Smooth Scrolling
 */
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // To see offset of scroll
  // console.log(`Current scroll (X/Y):`, window.pageXOffset, pageYOffset);

  // console.log(
  //   `height/wdith viewport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling to
  // .top is relative to the viewport and not the document
  //window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

/**
 * Event Delegation
 */
// Page Navigation
// (1): First without Event Delegation
// Not an efficient method, as with the increasing number of elements,
// it means that we would effectively be creating a lot of copies of
// the same function
// document.querySelectorAll('.nav__link').forEach(function (e1) {
//   e1.addEventListener('click', function (e) {
//     e.preventDefault();
//     const scrollToHere = this.getAttribute('href');
//     console.log('href');
//     document.querySelector(scrollToHere).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// (2): Event delegation; make use of the fact that events bubble up
// Putting evnetListener on common parent of all elements that we are interested in
// Its this container thats around all of the links and we will put our event handler
// on this element here so that when a link is clicked, the even tis generated and
// bubbles up

// Two steps
// (1) Add eventListener to common parent element
// (2) Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();

  // Matching strategy : Hardest part to implement Event Delegation
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    // Instead of using this, we need to use the e.target (the element that was clicked)
    const scrollToHere = e.target.getAttribute('href');
    // console.log('href');
    document.querySelector(scrollToHere).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/**
 *  Selecting HTML elements
 * */
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Selecting certain element
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');

// Returns HTMLCollection; different from a nodelist if DOM changes,
// this collection is updated automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

/**
 * Creating and inserting elements
 */

// .insertAdjacentHTML
// Creates a DOM element and stores in 'message'
// Not yet in the DOM yet
const message = document.createElement('div');

// Add classes
message.classList.add('cookie-message');
// message.textContent = "We use cookies for improved functionality and analytics"
// read and set content
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it! </button>';

// DOM element is unique so only exist at one place
header.append(message);

// If I want to have the element at two places, i need to clone it first
//header.prepend(message);
//header.append(message.cloneNode(true));
// header.afer(message);

/**
 * Deleting elements
 */

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();

    // Used to be DOM traversing
    // message.parentElement.removeChild(message);
  });
``;

/**'
 *  Styles, Attributes, Classes
 * */

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Does not get anything; only works for inline styles
console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orange');

// Attributes
// e.g. src, alt, class, id are attributes of the element
const logo = document.querySelector('.nav__logo');

// Works because they are default values on img
console.log(logo.alt);
console.log(logo.src);

// Not standard properties will not be displayed; undefined
console.log(logo.designer);
// We can use getAttribute() to get the non-standard values
console.log(logo.getAttribute('designer'));

// Setting attributes: setAttribute to set more attributes to the html element
logo.alt = 'Test';
logo.setAttribute('company', 'Bankist');

// href attribute
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// Don't use; overrides classes and only allow for one class
// logo.className ='jonas'

/**
 * Types of Events and Event Handlers
 */
// Better way: 2 advantages
// (1) : We can keep adding eventlistener to this and the previous one will not be erased
// (2) : We can remove EventListener

// If you only want to listen to the Event once
// const alertUser = function (e) {
//   alert('bye');

//   h1.removeEventListener('mouseenter', alertUser);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertUser);

// older way of doing
// h1.onmouseenter = function (e) {
//   alert('Hi');
// };

/**
 * Capturing Phase and Bubbling Phase
 * */

// Capturing Phase
// Event happens at the root of the DOM tree. The capturing phase happens here where the event travels down
// the DOM tree to the target element

// Target Phase
// This phase begins as soon as the event reaches the target. The events are handled right at the target
// Event handled at the target using EventHandler, running the attached callback function

// Bubbling Phase
// After reaching the target, the event then actually tarvels all the way up to the document route
// where the events bubble up from the target to the document route passing through all its parent elements

// Its as if the event also happened in each of the parent element
// If we attach the same event listener to the parent element, we would have the same callback function
// as well in the parent element, handling the event twice; once @ target and once @ one of its parent elements
// Such behaviour allow us to implement powerful patterns.

// By default, events can onyl be handled in the target and in bubbling phase. However, we can set up
// event listners in a way that they listen to events in the capturing phase instead
// Not all types of events that do have a capturing and bubling phase

//rgb(255, 255, 255);
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor());

// // When this event happens, it bubbles up and hence, .nav_linkS also
// // triggers the callback function
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // Target is essentially where the event originated
//   // Where the event first happened
//   // This is not the element on which the handler is actually attached
//   // This is where the event happened, where the click happend
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   this.style.backgroundColor = randomColor();

//   // stop event propagation up the DOM trees
//   // In general not a good idea
//   // Does not reach nav_links and nav
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // nav_link clicked, e.target == nav_link, e.currentTarget == nav_links
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   this.style.backgroundColor = randomColor();
// });

// The target element will be the same (the element where click happned),
// as all of them are essentially handling the exact same event
// Bubbles up to its next parent element
// Travels even further up the DOM tree

// currentTarget is the element on which the event handler is attached

/**
 * Traversing the DOM
 */

/**
 * A node is the generic name for any type of object in the DOM hierarchy.
 * A node could be one of the built-in DOM elements such as document or document.body,
 * it could be an HTML tag specified in the HTML such as <input> or <p> or
 * it could be a text node  that is created by the system to hold a block of text
 * inside another element.
 *
 * An element is one specific type of node as there are many other types of nodes
 * (text nodes, comment nodes, document nodes, etc...).
 *
 * The DOM consists of a hierarchy of nodes where each node can have a parent,
 * a list of child nodes and a nextSibling and previousSibling.
 * That structure forms a tree-like hierarchy. The document node has the html node as its child.
 * The html node has its list of child nodes (the head node and the body node).
 * The body node would have its list of child nodes (the top level elements in your HTML page)
 * and so on.
 */

const h1 = document.querySelector('h1');

// Going downwards: child
// If there are other highlight elements in the webpage, they will
// not be selected as they are not children of the h1 node
console.log(h1.querySelectorAll('.highlight'));
// Every single node that exists
console.log(h1.childNodes);
// Gives us an HTMLCollection, whihc is a live collection (updated)
// Works only for direct children
console.log(h1.children);

// first and last element child
// h1.firstElementChild.style.color = 'yellow';
// h1.lastElementChild.style.color = 'red';

console.log(h1.parentNode);
console.log(h1.parentElement);

// querySelector finds children no matter how deep in the DOM tree
// closest finds parent element no matter how far up in the DOM tree
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Traversing DOM sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// For nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);
