import koppa from '@koppajs/core';

import appView from './components/app-view.html';

import sideNav from './modules/side-nav';

import headerComponent from './components/header-component.html';
import footerComponent from './components/footer-component.html';

import pageHome from './components/page-home.html';
import pageTest from './components/page-test.html';

/* eslint import/no-unresolved: 0 */

koppa.take(sideNav);

koppa.take('app-view', appView);

koppa.take('header-component', headerComponent);
koppa.take('footer-component', footerComponent);

koppa.take('page-home', pageHome);
koppa.take('page-test', pageTest);

koppa('app-view');
