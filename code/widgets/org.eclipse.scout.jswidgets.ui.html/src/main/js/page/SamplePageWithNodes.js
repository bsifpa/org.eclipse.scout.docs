/*
 * Copyright (c) 2022 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * https://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {arrays, models, objects, PageWithNodes, scout} from '@eclipse-scout/core';
import SamplePageWithNodesModel from './SamplePageWithNodesModel';
import $ from 'jquery';
import {SamplePageWithTable} from '../index';

export class SamplePageWithNodes extends PageWithNodes {

  constructor() {
    super();
  }

  _jsonModel() {
    return models.get(SamplePageWithNodesModel);
  }

  _createChildPages() {
    return $.resolvedPromise([
      scout.create(SamplePageWithTable, this._pageParam()),
      scout.create(SamplePageWithNodes, this._pageParam())
    ]);
  }

  /**
   * @override
   */
  computeTextForRow(row) {
    let table = row.getTable();
    let columnsByIndex = objects.createMap();
    table.columns.forEach(column => {
      columnsByIndex[column.index] = column;
    });
    // Search the first visible cell considering the originally defined column order (ignoring the column order changes the user did)
    let firstDefinedVisibleCell = arrays.find(row.cells, (cell, index) => {
      let column = columnsByIndex[index];
      return column.visible && column.displayable;
    });
    if (firstDefinedVisibleCell) {
      return firstDefinedVisibleCell.text;
    }
    return super.computeTextForRow(row);
  }
}
