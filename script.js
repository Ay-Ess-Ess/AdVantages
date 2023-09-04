let width = window.outerWidth;
let height = window.outerHeight;
let averegeRoiElement = document.querySelector('.average-roi-parent');
let conversionRateElement = document.querySelector('.conversion-rate-parent');
let divcontentElement = document.querySelector('.divcontent');
let weHelpeCommerceBusinessesParentElement = document.querySelector('.we-help-e-commerce-businesses-parent');
let weHelpBoxElement = document.querySelector('.we-help-box');
let divElement = document.querySelector('.div');
let webDesignElement31GroupElement = document.querySelector('.web-design-element-3-1-group');
let iconElement = document.querySelector('.advantages-logo-website-1');
let phoneIconElement = document.querySelector('.web-design-element-2-1');


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
  if (width >= 1600) {
    averegeRoiElement.style.display = 'inline';
    conversionRateElement.style.display = 'inline';
    divcontentElement.style.height = 'calc(var(--index) * 220)';
    divElement.style.height = 'calc(var(--index) * 215)';
    weHelpBoxElement.style.width = 'calc(var(--index) * 16)';
    weHelpBoxElement.style.right = 'calc(var(--index) * 0)';
    weHelpBoxElement.style.bottom = 'calc(var(--index) * 1)';
    phoneIconElement.style.top = '1%';
    iconElement.style.position = 'absolute';
  } else if (width >= 900) {
    averegeRoiElement.style.display = 'none';
    conversionRateElement.style.display = 'none';
    divcontentElement.style.height = 'calc(var(--index) * 212)';
    divElement.style.height = 'calc(var(--index) * 208)';
    weHelpBoxElement.style.width = 'calc(var(--index) * 12';
    weHelpBoxElement.style.right = 'calc(var(--index) * -1)';
    weHelpBoxElement.style.bottom = 'calc(var(--index) * 0)';
    iconElement.style.position = 'relative';
    phoneIconElement.style.top = '-10%';
  }
   else if (width >= 600) {
    
  };
}

function menuOpener() {
  let menuBoxElement = document.querySelector('.menu-box');
  if (menuBoxElement.style.display != 'none') {
    menuBoxElement.style.display = 'none';
    console.log('hy');
  } else {
    menuBoxElement.style.display = 'flex';
    console.log('hello');
  }
}