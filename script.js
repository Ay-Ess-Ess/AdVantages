let width = window.outerWidth;
let height = window.outerHeight;
let averegeRoiElement = document.querySelector('.average-roi-parent');
let conversionRateElement = document.querySelector('.conversion-rate-parent');
let divcontentElement = document.querySelector('.divcontent');
let weHelpeCommerceBusinessesParentElement = document.querySelector('.we-help-e-commerce-businesses-parent');
let weHelpBoxElement = document.querySelector('.we-help-box');
let weHelpBoxCommerceElement = document.querySelector('.we-help-e-commerce');
let divElement = document.querySelector('.div');
let webDesignElement31GroupElement = document.querySelector('.web-design-element-3-1-group');
let iconElement = document.querySelector('.advantages-logo-website-1');
let phoneIconElement = document.querySelector('.web-design-element-2-1');
let whereCreating1Element = document.querySelector('.heading-17');
let whereCreating2Element = document.querySelector('.heading-18');


var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var widthCssVar= rootStyles.getPropertyValue('--width');
console.log(width + ' ' + height);
root.style.setProperty('--width', width);

resizing();
window.addEventListener('resize', resizing);
iconElement.classList.add('icon-place');

function resizing() {
  width = window.outerWidth;
  height = window.outerHeight;
  if (width >= 1100) {
    averegeRoiElement.style.display = 'inline';
    conversionRateElement.style.display = 'inline';
    divcontentElement.style.height = 'calc(var(--index) * 220)';
    divElement.style.height = 'calc(var(--index) * 217)';
    weHelpBoxElement.style.width = 'calc(var(--index) * 16)';
    weHelpBoxElement.style.right = 'calc(var(--index) * 0)';
    weHelpBoxElement.style.bottom = 'calc(var(--index) * 1)';
    phoneIconElement.style.top = '1%';
    iconElement.style.position = 'absolute';
    weHelpeCommerceBusinessesParentElement.style.height = '';
    whereCreating1Element.style.fontSize = 'calc(var(--index) * 5)';
    whereCreating2Element.style.fontSize = 'calc(var(--index) * 5)';
    whereCreating1Element.style.width = 'calc(var(--index) * 50)';
    whereCreating2Element.style.width = 'calc(var(--index) * 50)';

  } else if (width >= 768 && width <= 1100) {
    averegeRoiElement.style.display = 'none';
    conversionRateElement.style.display = 'none';
    weHelpBoxElement.style.width = '90%';
    divcontentElement.style.height = 'calc(var(--index) * 295)';
    divElement.style.height = 'calc(var(--index) * 290)';
    iconElement.style.position = 'relative';
    phoneIconElement.style.top = '0';
    whereCreating1Element.style.fontSize = 'calc(var(--index) * 4)';
    whereCreating2Element.style.fontSize = 'calc(var(--index) * 4)';
    whereCreating1Element.style.width = 'calc(var(--index) * 40)';
    whereCreating2Element.style.width = 'calc(var(--index) * 40)';

  } else {
    averegeRoiElement.style.display = 'none';
    conversionRateElement.style.display = 'none';
    iconElement.style.position = 'relative';
    phoneIconElement.style.top = '0';
  }
}

function scrollFunction() {
  const element = document.querySelector(".lets-talk-box");
  element.scrollIntoView({ behavior: 'smooth'});
}