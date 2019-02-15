import './styles.css';
import './app/apollo-views-app';
import './views/todo/todo-view';
import './views/order/order-form-view';
import './views/order/order-thank-you-view';
import './views/not-found-view';
import {
  Router
} from '@vaadin/router';

export const router = new Router();
router.setRoutes([
  {path: '/', component: 'todo-view'},
  {path: '/spreadsheet', component: 'spreadsheet-view', action: () => import(/* webpackChunkName: "spreadsheet" */ './views/spreadsheet/spreadsheet-view')},
  {path: '/order', component: 'order-form-view'},
  {path: '/order-sent', component: 'order-thank-you-view'},
  {path: '(.*)', component: 'not-found-view'}
  // {
  //   path: '/spreadsheet',
  //   component: 'spreadsheet-view',
  //   action: () =>
  //     import(/* webpackChunkName: "spreadsheet" */ './views/spreadsheet/spreadsheet-view')
  // },
]);

export const menu = [
  {href: '/', caption: 'Todos', selected: false},
  {href: '/spreadsheet', caption: 'Spreadsheet', selected: false},
  {href: '/order', caption: 'Order form', selected: false},
  {href: '/foo', caption: 'Lost', selected: false},
];