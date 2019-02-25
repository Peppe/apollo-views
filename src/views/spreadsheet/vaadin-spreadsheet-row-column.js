/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Commercial Vaadin Add-On License 3.0 (CVALv3).
See <a href="https://vaadin.com/license/cval-3">the website</a> for the complete license.
*/
import {
  FlattenedNodesObserver
} from '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import {
  GridColumnElement
} from '@vaadin/vaadin-grid/src/vaadin-grid-column.js';
import './vaadin-spreadsheet-row-cell';

/**
 * `<vaadin-spreadsheet-row-column>` is a column for grid that lists row numbers and gives
 * resize capabilities.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-pro items="[[items]]">
 *  <vaadin-spreadsheet-row-column></vaadin-spreadsheet-row-column>
 *
 * ```
 *
 * @memberof Vaadin
 * @extends Vaadin.GridColumnElement
 */
class SpreadhseetRowColumnElement extends GridColumnElement {

  static get is() {
    return 'vaadin-spreadsheet-row-column';
  }

  static get properties() {
    return {
      /**
       * Width of the cells for this column.
       */
      width: {
        type: String,
        value: '100px'
      },

      /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       */
      flexGrow: {
        type: Number,
        value: 1
      },

      /**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */
      renderer: Function,

      /**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */
      path: {
        type: String
      },

      _bodyTemplate: {
        type: Object
      },

      _cells: Array

    };
  }
  constructor() {
    super();

    this._editTemplateObserver = new FlattenedNodesObserver(this, info => {
      this._editModeTemplate = this._prepareEditModeTemplate();
    });

    this.renderer = function(root, column, rowData) {
      const cell = root.assignedSlot.parentNode;
      cell.style.position = 'relative';
      root.style.display = 'block';
      const grid = column._grid;
      root.style.padding = '0';
      root.innerHTML = `
        <vaadin-spreadsheet-row-cell></vaadin-spreadsheet-row-cell>
        `;
      root.firstElementChild.value = rowData.index;
      root.firstElementChild.cell = cell;
      root.firstElementChild.grid = grid;
    };
  }

}

customElements.define(SpreadhseetRowColumnElement.is, SpreadhseetRowColumnElement);

export {SpreadhseetRowColumnElement};

