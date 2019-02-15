import {
  html
} from 'lit-element';
import {
  BaseView
} from '../../components/base-view';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid-pro';
import '@vaadin/vaadin-grid-pro/vaadin-grid-pro-edit-column';

class SpreadsheetView extends BaseView {

  constructor() {
    super();
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

        #grid {
          flex: 1;
        }
      </style>
      <h1>Spreadsheet</h1>
      <vaadin-grid-pro id="grid" .items=${this.items} theme="compact column-borders">
        <vaadin-grid-column path="row" header="" width="3em"></vaadin-grid-column>
        <vaadin-grid-pro-edit-column path="a" header="A"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="b" header="B"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="c" header="C"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="d" header="D"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="e" header="E"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="f" header="F"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="g" header="G"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="h" header="H"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="i" header="I"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="j" header="J"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="k" header="K"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="l" header="L"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="m" header="M"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="n" header="N"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="o" header="O"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="p" header="P"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="q" header="Q"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="r" header="R"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="s" header="S"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="t" header="T"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="u" header="U"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="v" header="V"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="w" header="X"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="y" header="Y"></vaadin-grid-pro-edit-column>
        <vaadin-grid-pro-edit-column path="z" header="Z"></vaadin-grid-pro-edit-column>
        
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
  }
  collapseButton() {
  }
}

customElements.define('spreadsheet-view', SpreadsheetView);