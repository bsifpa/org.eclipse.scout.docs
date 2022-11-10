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
import {CheckBoxField, GroupBox, TabBox, TabItem, TagField} from '@eclipse-scout/core';
import {EventsTab, FormFieldActionsBox, FormFieldPropertiesBox, GridDataBox, ValueFieldPropertiesBox, WidgetActionsBox} from '../index';

export default () => ({
  id: 'jswidgets.TagFieldForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: GroupBox,
    fields: [
      {
        id: 'DetailBox',
        objectType: GroupBox,
        gridColumnCount: 1,
        fields: [
          {
            id: 'TagField',
            objectType: TagField,
            lookupCall: 'jswidgets.TagLookupCall',
            label: 'Tag Field',
            clickable: true
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: TabBox,
        cssClass: 'jswidgets-configuration',
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: TabItem,
            label: 'Properties',
            fields: [
              {
                id: 'TagBarProperties',
                objectType: GroupBox,
                label: 'Tag Bar Properties',
                tooltipText: '${textKey:TagBarPropertiesTooltip}',
                fields: [{
                  id: 'EnabledField',
                  objectType: CheckBoxField,
                  label: 'Enabled',
                  labelVisible: false
                }, {
                  id: 'ClickableField',
                  objectType: CheckBoxField,
                  label: 'Clickable',
                  labelVisible: false
                }]
              },
              {
                id: 'ValueFieldPropertiesBox',
                objectType: ValueFieldPropertiesBox
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: FormFieldPropertiesBox
              },
              {
                id: 'GridDataBox',
                objectType: GridDataBox,
                label: 'Grid Data Hints'
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: TabItem,
            label: 'Actions',
            fields: [
              {
                id: 'FormFieldActionsBox',
                objectType: FormFieldActionsBox
              },
              {
                id: 'WidgetActionsBox',
                objectType: WidgetActionsBox
              }
            ]
          },
          {
            id: 'EventsTab',
            objectType: EventsTab
          }
        ]
      }
    ]
  }
});
