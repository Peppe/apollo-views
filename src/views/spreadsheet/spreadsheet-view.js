import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid-pro';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column';
import '@polymer/iron-icon';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-select';
import '@vaadin/vaadin-menu-bar';
import './vaadin-spreadsheet-row-column';

class SpreadsheetView extends BaseView {

  static get properties() {
    return {
      currentContent: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.currentContent = '';
    this.items = [
      {row: '1'},
      {row: '2'},
      {row: '3'},
      {row: '4'},
      {row: '5'},
      {row: '6'},
      {row: '7'},
      {row: '8'},
      {row: '9'},
      {row: '10'},
      {row: '11'},
      {row: '12'},
      {row: '13'},
      {row: '14'},
      {row: '15'},
      {row: '16'},
      {row: '17'},
      {row: '18'},
      {row: '19'},
      {row: '20'},
      {row: '21'},
      {row: '22'},
      {row: '23'},
      {row: '24'},
      {row: '25'},
      {row: '26'},
      {row: '27'},
      {row: '28'},
      {row: '29'},
      {row: '30'},
      {row: '31'},
      {row: '32'},
      {row: '33'},
      {row: '34'},
      {row: '35'},
      {row: '36'},
      {row: '37'},
      {row: '38'},
      {row: '39'},
      {row: '40'},
      {row: '41'},
      {row: '42'},
      {row: '43'},
      {row: '44'},
      {row: '45'},
      {row: '46'},
      {row: '47'},
      {row: '48'},
      {row: '49'},
      {row: '50'}
    ];
    this.menuitems = [
      {
        text: 'File',
        children: [
          {text: 'Dashboard'},
          {component: 'hr'},
          {text: 'Users',
            children: [{text: 'List'}, {text: 'Add'}]
          }, {
            text: 'Billing',
            children: [{text: 'Invoices'}, {text: 'Balance Events'}]
          },
        ]
      },
      {
        text: 'Edit',
        children: [
          {text: 'Edit Profile'},
          {component: 'hr'},
          {text: 'Privacy Settings'},
          {text: 'Terms of Service'}
        ]
      },
      {text: 'View'},
      {text: 'Format'},
      {text: 'Data'},
      {text: 'Help'},
    ];
  }

  render() {
    return html `
      <dom-module id="my-grid-styles" theme-for="vaadin-grid">
        <template>
          <style>
            [part~="header-cell"] {
              background-color: #f8f8f8 !important;
              text-align: center;
            }
            .row[part~="cell"] {
              background-color: #f8f8f8;
              text-align: center;
              padding:0;
            }

            .row[part~="cell"] vaadin-grid-cell-content {
              padding:0;
              
            }
          </style>
        </template>
      </dom-module>

      <dom-module id="my-text-field-styles" theme-for="vaadin-text-field">
        <template>
          <style>
            :host(vaadin-text-field):not([has-value]):not([focused]):not([invalid]) [part=“label”] {
              transform: scale(0.75);
            }
          </style>
        </template>
      </dom-module>

      <dom-module id="my-text-field-styles" theme-for="vaadin-text-field vaadin-select-text-field">
        <template>
          <style>
            :host([theme~="borderless"]) [part="input-field"] {
              background-color: #fff;
            }
          </style>
        </template>
      </dom-module>

      <dom-module id="my-select-styles" theme-for="vaadin-select-text-field">
        <template>
          <style>
            :host(#tool-bar-zoom) {
              background-color: #fff;
            }
          </style>
        </template>
      </dom-module>

      <dom-module id="my-button-styles" theme-for="vaadin-button">
        <template>
          <style>
            :host(#tool-bar) button {
              padding:0;
              background-color: #fff;
            }
          </style>
        </template>
      </dom-module>
      <style>
        :host {
          height:100%;
          display: flex;
          flex-direction: column;
        }

        #header {
          display:flex;
          flex-direction: row;
          border-bottom: 1px solid #ddd;
        }

        #header #name-and-menu {
          flex: 1;
        }

        #header h1 {
          font-size: 22px;
          margin:0 0 8px 0;
          line-height: 1.5rem;
          font-weight: 500;
        }

        #header #icon {
          align-self: center;
          --iron-icon-height: 44px;
          --iron-icon-width: 44px;
          padding: 8px 16px;
        }

        #header vaadin-button {
          margin-right: 8px;
        }

        #tool-bar {
          border-bottom: 1px solid #ddd;
        }

        #tool-bar .tool-bar-button-group {
          border-right: 1px solid #ddd;
          display: inline-block;
          padding-right: 5px;
        }

        #tool-bar vaadin-button {
          padding: 0;
          --iron-icon-fill-color: var(--lumo-secondary-text-color);
        }

        #tool-bar vaadin-select {
          width: 5em;
        }

        #function-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        #function-bar #function-icon-wrapper {
          width: 3rem;
          display: inline-block;
          text-align: center;
          border-right: 1px solid #ddd;
        }

        #function-bar #function-icon {
          align-self: center;
          --iron-icon-height: 22px;
          --iron-icon-width: 22px;
        }

        #function-bar vaadin-text-field {
          flex:1;
        }

        #grid {
          flex: 1;
        }
      </style>
      <div id='header'>
        <iron-icon id="icon" icon="vaadin:table" size="64"></iron-icon>
        <div id="name-and-menu">
          <h1>Spreadsheet</h1>
          <vaadin-menu-bar id='menu-bar2'></vaadin-menu-bar>
          <div id='menu-bar'>
            <vaadin-button theme="contrast tertiary-inline">File</vaadin-button>
            <vaadin-button theme="contrast tertiary-inline">Edit</vaadin-button>
            <vaadin-button theme="contrast tertiary-inline">View</vaadin-button>
            <vaadin-button theme="contrast tertiary-inline">Format</vaadin-button>
            <vaadin-button theme="contrast tertiary-inline">Data</vaadin-button>
            <vaadin-button theme="contrast tertiary-inline">Help</vaadin-button>
          </div>
        </div>
      </div>
      <div id='tool-bar'>
        <div class='tool-bar-button-group'>
          <vaadin-button theme="tertiary" aria-label="Undo">
            <iron-icon icon="vaadin:arrow-backward" slot="prefix"></iron-icon>
          </vaadin-button>
          <vaadin-button theme="tertiary" aria-label="Forward">
            <iron-icon icon="vaadin:arrow-forward" slot="prefix"></iron-icon>
          </vaadin-button>
          <vaadin-button theme="tertiary" aria-label="Print">
            <iron-icon icon="vaadin:print" slot="prefix"></iron-icon>
          </vaadin-button>
          <vaadin-button theme="tertiary" aria-label="Paint">
            <iron-icon icon="vaadin:paint-roll" slot="prefix"></iron-icon>
          </vaadin-button>
        </div>
        <div class='tool-bar-button-group'>
          <vaadin-select id="tool-bar-zoom" theme="borderless" value='1.0'>
            <template>
              <vaadin-list-box>
                <vaadin-item value='0.5'>50%</vaadin-item>
                <vaadin-item value='0.75'>75%</vaadin-item>
                <vaadin-item value='1.0'>100%</vaadin-item>
                <vaadin-item value='1.25'>125%</vaadin-item>
                <vaadin-item value='1.5'>150%</vaadin-item>
                <vaadin-item value='2.0'>200%</vaadin-item>
              </vaadin-list-box>
            </template>
          </vaadin-select>
        </div>
      </div>
      <div id='function-bar'>
        <span id="function-icon-wrapper">
          <iron-icon id="function-icon" icon="vaadin:funcion" size="24"></iron-icon>
        </span>
        
        <vaadin-text-field theme="borderless" id="function-field" theme="small" value=${this.currentContent}></vaadin-text-field>
      </div>
      </div>

      <vaadin-grid-pro id="grid" .items=${this.items} theme="compact column-borders" keep-editor-open enter-next-row>
        <vaadin-spreadsheet-row-column path="row" header="" width="3em"></vaadin-spreadsheet-row-column>
        <vaadin-grid-pro-edit-column path="a" header="A" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="b" header="B" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="c" header="C" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="d" header="D" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="e" header="E" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="f" header="F" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="g" header="G" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="h" header="H" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="i" header="I" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="j" header="J" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="k" header="K" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="l" header="L" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="m" header="M" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="n" header="N" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="o" header="O" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="p" header="P" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="q" header="Q" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="r" header="R" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="s" header="S" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="t" header="T" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="u" header="U" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="v" header="V" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="w" header="X" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="y" header="Y" resizable></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="z" header="Z" resizable></vaadin-grid-pro-edit-column>
      </vaadin-grid-pro>
    `;
  }

  firstUpdated() {
    const grid = this.shadowRoot.getElementById('grid');
    grid.cellClassNameGenerator = function(column, rowData) {
      if (column.path === 'row') {
        return 'row';
      }
    };
    grid.addEventListener('cell-focus-changed', (event) => {
      this.currentContent = event.detail.cell._content.innerText;
    });
  }
  collapseButton() {
  }
}

customElements.define('spreadsheet-view', SpreadsheetView);
