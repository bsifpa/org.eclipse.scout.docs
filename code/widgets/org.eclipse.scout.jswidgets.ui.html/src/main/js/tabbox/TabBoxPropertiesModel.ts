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
import {CheckBoxField, SmartField, TabItem} from '@eclipse-scout/core';
import {FormFieldPropertiesBox, GridDataBox} from '../index';

export default () => ({
  id: 'jswidgets.TabBoxProperties',
  objectType: TabItem,
  label: 'Tab Box Properties',
  fields: [
    {
      id: 'TabBoxProperties.SelectedTabField',
      objectType: SmartField,
      label: 'Selected Tab Item'
    },
    {
      id: 'TabBoxProperties.TabAreaStyleField',
      objectType: SmartField,
      lookupCall: 'jswidgets.TabAreaStyleLookupCall',
      label: 'Tab Area Style'
    },
    {
      id: 'TabBoxProperties.ShowMenus',
      objectType: CheckBoxField,
      label: 'Show Menus'
    },
    {
      id: 'TabBoxProperties.FormFieldPropertiesBox',
      objectType: FormFieldPropertiesBox
    },
    {
      id: 'TabBoxProperties.GridDataBox',
      objectType: GridDataBox,
      label: 'Grid Data Hints'
    }
  ]
});
