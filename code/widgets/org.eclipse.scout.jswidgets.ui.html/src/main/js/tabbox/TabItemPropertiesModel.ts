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
import {FormFieldPropertiesBox, GridDataBox, GroupBoxPropertiesBox} from '../index';

export default () => ({
  id: 'jswidgets.TabItemProperties',
  objectType: TabItem,
  label: 'Tab Item Properties',
  fields: [
    {
      id: 'TabItemProperties.TargetField',
      objectType: SmartField,
      label: 'Target Item'
    },
    {
      id: 'TabItemProperties.MarkedField',
      objectType: CheckBoxField,
      label: 'Marked',
      labelVisible: false
    },
    {
      id: 'TabItemProperties.GroupBoxPropertiesBox',
      objectType: GroupBoxPropertiesBox
    },
    {
      id: 'TabItemProperties.FormFieldPropertiesBox',
      objectType: FormFieldPropertiesBox
    },
    {
      id: 'TabItemProperties.GridDataBox',
      objectType: GridDataBox,
      label: 'Grid Data Hints'
    }
  ]
});
