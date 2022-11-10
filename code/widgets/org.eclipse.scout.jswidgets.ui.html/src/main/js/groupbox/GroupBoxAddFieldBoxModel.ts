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
import {Button, GroupBox, SmartField, StringField} from '@eclipse-scout/core';

export default () => ({
  id: 'jswidgets.GroupBoxAddFieldBox',
  objectType: GroupBox,
  label: 'Add field',
  expandable: true,
  gridColumnCount: 2,
  fields: [
    {
      id: 'BeforeField',
      objectType: SmartField,
      label: 'Before'
    },
    {
      id: 'LabelField',
      objectType: StringField,
      label: 'Label'
    },
    {
      id: 'LabelType',
      objectType: SmartField,
      lookupCall: 'jswidgets.FormFieldTypeLookupCall',
      label: 'Type'
    },
    {
      id: 'CreateButton',
      objectType: Button,
      label: 'Add',
      processButton: false,
      keyStroke: 'ctrl-insert'
    }
  ]
});
