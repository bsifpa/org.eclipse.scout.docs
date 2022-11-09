import {GroupBox, Menu, SmartField, StringField, TabBox, TabItem} from '@eclipse-scout/core';
import {EventsTab, FormFieldPropertiesBox, GridDataBox, GroupBoxAddFieldBox, GroupBoxAddMenuBox, GroupBoxDeleteFieldBox, GroupBoxDeleteMenuBox, GroupBoxPropertiesBox, LogicalGridLayoutConfigBox, WidgetActionsBox} from '../index';

export default () => ({
  id: 'jswidgets.GroupBoxForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: GroupBox,
    fields: [
      {
        id: 'DetailBox',
        objectType: GroupBox,
        label: 'Group Box',
        fields: [
          {
            id: 'StringField1',
            objectType: StringField,
            label: 'String Field 1'
          },
          {
            id: 'StringField2',
            objectType: StringField,
            label: 'String Field 2'
          },
          {
            id: 'StringField3',
            objectType: StringField,
            label: 'String Field 3'
          },
          {
            id: 'StringField4',
            objectType: StringField,
            label: 'String Field 4'
          }
        ],
        menus: [
          {
            id: 'Menu1',
            objectType: Menu,
            text: 'Menu',
            horizontalAlignment: 1
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
            label: 'Group Box Properties',
            fields: [
              {
                id: 'GroupBoxPropertiesBox',
                objectType: GroupBoxPropertiesBox,
                expandable: true,
                labelVisible: false,
                borderVisible: false
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: FormFieldPropertiesBox
              },
              {
                id: 'GridDataBox',
                objectType: GridDataBox,
                label: 'Grid Data Hints'
              },
              {
                id: 'BodyLayoutConfigBox',
                objectType: LogicalGridLayoutConfigBox
              }
            ]
          },
          {
            id: 'FieldPropertiesTab',
            objectType: TabItem,
            label: 'Field Properties',
            fields: [
              {
                id: 'Field.TargetField',
                objectType: SmartField,
                label: 'Target'
              },
              {
                id: 'Field.FormFieldPropertiesBox',
                objectType: FormFieldPropertiesBox
              },
              {
                id: 'Field.GridDataBox',
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
                id: 'Actions.AddMenuBox',
                objectType: GroupBoxAddMenuBox
              },
              {
                id: 'Actions.DeleteMenuBox',
                objectType: GroupBoxDeleteMenuBox
              },
              {
                id: 'Actions.AddFieldBox',
                objectType: GroupBoxAddFieldBox
              },
              {
                id: 'Actions.DeleteFieldBox',
                objectType: GroupBoxDeleteFieldBox
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
