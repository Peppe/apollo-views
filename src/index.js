import './styles.css';
import './app/apollo-views-app';
import './views/todo/todo-view';
import './views/spreadsheet/spreadsheet-view';
import './views/order/order-form-view';
import './views/not-found-view';
import {
  Router
} from '@vaadin/router';

export const router = new Router();
router.setRoutes([
  {path: '/', component: 'todo-view'},
  {path: '/spreadsheet', component: 'spreadsheet-view'},
  {path: '/order', component: 'order-form-view'},
  {path: '(.*)', component: 'not-found-view'}
  // {
  //   path: '/spreadsheet',
  //   component: 'spreadsheet-view',
  //   action: () =>
  //     import(/* webpackChunkName: "spreadsheet" */ './views/spreadsheet/spreadsheet-view')
  // },
]);