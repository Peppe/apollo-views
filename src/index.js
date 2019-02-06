import './styles.css';
import './app/apollo-views-app';
import './views/not-found-view';
import {
  Router
} from '@vaadin/router';

window.addEventListener('load', () => { 
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('#router-output')); 
  router.setRoutes([
    {
      path: '/',
      component: 'todo-view'
    },
    {
      path: '/spreadsheet',
      component: 'spreadsheet-view',
      action: () =>
        import(/* webpackChunkName: "spreadsheet" */ './views/spreadsheet/spreadsheet-view')
    },
    {
      path: '(.*)', 
      component: 'not-found-view',
      action: () =>
        import(/* webpackChunkName: "not-found-view" */ './views/not-found-view')
    }
  ]);
}