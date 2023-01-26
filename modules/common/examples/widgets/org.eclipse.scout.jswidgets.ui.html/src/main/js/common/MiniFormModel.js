/*
 * Copyright (c) 2021 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
import {Button, Form, GroupBox} from '@eclipse-scout/core';

export default () => ({
  objectType: 'Form',
  rootGroupBox: {
    objectType: 'GroupBox',
    borderDecoration: GroupBox.BorderDecoration.EMPTY,
    gridColumnCount: 1,
    gridDataHints: {
      useUiWidth: true
    },
    fields: [{
      objectType: 'LabelField',
      labelVisible: false,
      value: 'Hi there!',
      gridDataHints: {
        useUiWidth: true
      }
    }, {
      id: 'CloseButton',
      objectType: 'Button',
      displayStyle: Button.DisplayStyle.LINK,
      processButton: false,
      label: 'Close me please.',
      gridDataHints: {
        useUiWidth: true
      }
    }]
  }
});
