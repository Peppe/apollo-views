import {
  LitElement, html
} from 'lit-element';

class SpreadsheetRowCellElement extends LitElement {

  render() {
    return html `
      <style>
        :host {

          width:100%;

        }

        #resizer {
          height:10px;
          width: 100%;
          position: absolute;
          bottom:0;
          left:0;
          right:0;
          cursor: ns-resize;
        }

        [draggable] {
          -moz-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          user-select: none;
          /* Required to make elements draggable in old WebKit */
          -khtml-user-drag: element;
          -webkit-user-drag: element;
        }
      </style>
      
      <div id='resizer' draggable='true'></div>
      <div id='content'>${this.value}</div>
    `;
  }

  static get properties() {
    return {
      value: {
        type: String,
      },
      cell: {
        type: Object
      },
      grid: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.value = 1;
    this.resizing = false;
    this.top = 0;
    this.height = 0;
  }

  firstUpdated() {
    const resizer = this.shadowRoot.getElementById('resizer');
    const content = this.shadowRoot.getElementById('content');
    resizer.addEventListener('dragstart', (event) => {
      this.resizing = true;
      this.top = event.clientY;
    });
    resizer.addEventListener('drag', (event) => {
      if (event.clientY !== 0) {
        const newHeight = (event.clientY - this.top);
        console.log('newHeight: ' + newHeight);
        content.setAttribute('height', newHeight + 'px');
        this.grid.notifyResize();
      }
    });
    resizer.addEventListener('dragend', (event) => {
      this.resizing = false;
      console.log('end');
    });
  }
}

customElements.define('vaadin-spreadsheet-row-cell', SpreadsheetRowCellElement);
