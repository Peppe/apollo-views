import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-number-field';
import '@vaadin/vaadin-text-field/vaadin-email-field';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-button';

class OrderFormView extends BaseView {

  constructor() {
    super();
    this.property = 'World';
    this.items = [
      {name: 'HK Sininen', description: 'The legendary Finnish sausage, since 1963', price: 3.99, image: '/img/order/hksininen.jpg', amount: 0},
      {name: 'Chicken', description: 'A superior food product', price: 5.47, image: '/img/order/chicken.jpg', amount: 0},
      {name: 'Beef', description: 'A superior food product', price: 3.00, image: '/img/order/beef.jpg', amount: 0},
      {name: 'Ham', description: 'A superior food product', price: 2.00, image: '/img/order/ham.jpg', amount: 0},
      {name: 'Fish', description: 'A superior food product', price: 8.90, image: '/img/order/fish.jpg', amount: 0},
      {name: 'Snails', description: 'A superior food product', price: 7.50, image: '/img/order/snail.jpg', amount: 0},
      {name: 'Broccoli', description: 'A superior food product', price: 2.40, image: '/img/order/broccoli.jpg', amount: 0}
    ];
    this.selectedItems = [];
    this.item = {};
  }

  render() {
    return html `
      <style>
        #products {
          display:flex;
          flex-direction: column;
        }

        #grid {
          flex:1;
        }

        #product-details {
          flex:1;
          padding:0 var(--spacing);
        }

        #product-details img {
          max-width: 100%;
          max-height: 300px;
        }

        @media (min-width: 960px) {
          #products {
            flex-direction: row;
          }
        }
      </style>
      <h1>Order products</h1>
      <div id='products'>
        <vaadin-grid id='grid' .items=${this.items} @active-item-changed=${this.activeItem} height-by-rows>
          <vaadin-grid-column path='name' header='First name' width="150px" flex-grow="0"></vaadin-grid-column>
          <vaadin-grid-column id='amount-column' header=''></vaadin-grid-column>
        </vaadin-grid>
        <div id='product-details'>
          ${this.item ? html`
            <h2>${this.item.name}</h2>
            <img src='${document.baseURI + this.item.image}'>
            <p>${this.item.description}</p>
          ` : html``}
        </div>
      </div>
      <h2>Summary</h2>
      <vaadin-grid id='summary' .items=${this.getSummary(this.items)} height-by-rows style='width: 600px'>
          <vaadin-grid-column id='summary-name' path='name' header='First name'></vaadin-grid-column>
          <vaadin-grid-column id='summary-amount' path='amount' header='Amount' text-align="end"></vaadin-grid-column>
          <vaadin-grid-column path='fixedPrice' header='á price' text-align="end"></vaadin-grid-column>
          <vaadin-grid-column id='summary-total' path='total' header='Total price' text-align="end"></vaadin-grid-column>
      </vaadin-grid>
      <h2>Order information</h2>
      <form name='meat-order' action='/order-sent' method='POST' data-netlify='true'>
        <vaadin-form-layout>
          <vaadin-text-field label="Your name"></vaadin-text-field>
          <vaadin-text-field label="Customer number"></vaadin-text-field>
          <vaadin-email-field label="Email"></vaadin-email-field>
        </vaadin-form-layout>
        <button type="submit">Send</button>
        <vaadin-button type="submit" @click=${() => this.openDialog()}>Send</vaadin-button>
        <vaadin-dialog id='dialog' no-close-on-outside-click></vaadin-dialog>
      </form>
    `;
  }

  applyFilter(items) {
    return items.filter(item => item.amount > 0);
  }

  openDialog() {
    console.log('dialog');
    const dialog = this.shadowRoot.getElementById('dialog');
    dialog.opened = true;
  }

  getSummary(items) {
    const filtered = items.filter(item => item.amount > 0);
    filtered.forEach((item) => {
      item.fixedPrice = Number(item.price).toFixed(2) + '€';
      item.total = Number(item.amount * item.price).toFixed(2) + '€';
    });
    return filtered;
  }

  firstUpdated() {
    const amountColumn = this.shadowRoot.getElementById('amount-column');
    amountColumn.renderer = (root, column, rowData) => {
      root.innerHTML = '<vaadin-number-field has-controls min="0"></vaadin-number-field>';
      root.firstElementChild.value = rowData.item.amount;
      root.firstElementChild.addEventListener('value-changed', (e) => {
        const value = e.detail.value;
        rowData.item.amount = value;
        this.requestUpdate();
        this.shadowRoot.getElementById('summary').render();
      });
    };

    const summaryName = this.shadowRoot.getElementById('summary-name');
    summaryName.footerRenderer = (root, column) => {
      root.innerHTML = '<b>Total</b>';
    };

    const summaryAmount = this.shadowRoot.getElementById('summary-amount');
    summaryAmount.footerRenderer = (root, column) => {
      let sum = 0;
      this.items.forEach((item) => {
        sum = sum + Number(item.amount);
      });
      root.textContent = sum;
    };

    const summaryTotal = this.shadowRoot.getElementById('summary-total');
    summaryTotal.footerRenderer = (root, column) => {
      let sum = 0;
      this.items.forEach((item) => {
        sum = sum + item.price * item.amount;
      });
      root.textContent = Number(sum).toFixed(2) + '€';
    };

    const dialog = this.shadowRoot.getElementById('dialog');
    dialog.renderer = (root, dialog) => {
      const div = window.document.createElement('div');
      div.textContent = 'Your odrer has now been placed. You will get a confirmation by e-mail. Thank you for ordering';
      const button = window.document.createElement('button');
      button.innerText = 'close';
      root.appendChild(div);
      root.appendChild(button);
      console.log('rendered');
    };
  }

  activeItem(event) {
    this.item = event.detail.value;
    this.shadowRoot.getElementById('grid').selectedItems = this.item ? [this.item] : [];
    this.requestUpdate();
    if (this.item) {
      this.shadowRoot.getElementById('product-details').removeAttribute('hidden');
    } else {
      this.shadowRoot.getElementById('product-details').setAttribute('hidden', '');
    }
  }
}

customElements.define('order-form-view', OrderFormView);