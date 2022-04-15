import sideNavComponent from './side-nav.html';

const navs = ($) => {
  $.utils.createTrigger('toggle-nav', 'click', 'side-nav .wrapper');
  $.take('side-nav', sideNavComponent);
  return false;
};

export default navs;
