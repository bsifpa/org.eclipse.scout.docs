import {GroupBox, SmartField, TabBox, TabItem, TreeBox} from '@eclipse-scout/core';
import {
  EventsTab,
  FormFieldActionsBox,
  FormFieldPropertiesBox,
  GridDataBox,
  TreePropertiesBox,
  ValueFieldPropertiesBox,
  WidgetActionsBox
} from '../index';

export default () => ({
  id: 'jswidgets.TreeBoxForm',
  type: 'model',
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
            id: 'TreeBox',
            objectType: TreeBox,
            lookupCall: 'jswidgets.WorldLookupCall',
            label: 'Tree Box',
            gridDataHints: {
              h: 6,
              weightY: 0
            }
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: TabBox,
        cssClass: 'jswidgets-configuration',
        gridDataHints: {
          h: 6,
          weightY: -1
        },
        gridColumnCount: 1,
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: TabItem,
            label: 'Properties',
            fields: [
              {
                id: 'LookupCallField',
                objectType: SmartField,
                label: 'LookupCall',
                lookupCall: 'jswidgets.LookupCallLookupCall'
              },
              {
                id: 'PropertiesBox',
                objectType: TreePropertiesBox,
                labelVisible: false,
                borderVisible: false
              },
              {
                id: 'ValueFieldPropertiesBox',
                objectType: ValueFieldPropertiesBox,
                expanded: false
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: FormFieldPropertiesBox,
                expanded: false
              },
              {
                id: 'GridDataBox',
                objectType: GridDataBox,
                label: 'Grid Data Hints',
                expanded: false
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
