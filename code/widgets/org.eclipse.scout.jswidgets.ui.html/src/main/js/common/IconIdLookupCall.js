/*
 * Copyright (c) 2017 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {StaticLookupCall, strings} from '@eclipse-scout/core';

export default class IconIdLookupCall extends StaticLookupCall {

  constructor() {
    super();
  }

  _data() {
    return Object.keys(scout.icons)
      .filter(name => {
        let value = scout.icons[name];
        return typeof value === 'string' && strings.startsWith(value, 'font:');
      })
      .sort((name1, name2) => strings.nvl(name1).localeCompare(strings.nvl(name2)))
      .map(name => {
        let iconId = scout.icons[name];
        return [iconId, name];
      });
  }

  _dataToLookupRow(data) {
    let lookupRow = super._dataToLookupRow(data);
    if (lookupRow && lookupRow.key) {
      lookupRow.iconId = lookupRow.key;
    }
    return lookupRow;
  }
}
