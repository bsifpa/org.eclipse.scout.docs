import {CheckBoxField, GroupBox, ImageField, ProposalField, TabBox, TabItem} from '@eclipse-scout/core';
import {
  EventsTab,
  FormFieldActionsBox,
  FormFieldPropertiesBox,
  GridDataBox,
  WidgetActionsBox
} from '../index';

export default () => ({
  id: 'jswidgets.ImageFieldForm',
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
            id: 'ImageField',
            objectType: ImageField,
            label: 'Image Field',
            imageUrl: 'img/eclipse_scout_logo.png',
            gridDataHints: {
              horizontalAlignment: 0,
              h: 4,
              weightY: 0
            }
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
                id: 'PropertiesBox',
                objectType: GroupBox,
                label: 'Properties',
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'AutoFitField',
                    objectType: CheckBoxField,
                    label: 'Auto Fit',
                    labelVisible: false
                  },
                  {
                    id: 'UploadEnabledField',
                    objectType: CheckBoxField,
                    label: 'Upload Enabled',
                    labelVisible: false
                  },
                  {
                    id: 'ScrollBarEnabledField',
                    objectType: CheckBoxField,
                    label: 'Scroll Bar Enabled',
                    labelVisible: false
                  },
                  {
                    id: 'ImageUrlField',
                    objectType: ProposalField,
                    label: 'Image Url',
                    lookupCall: 'jswidgets.ImageLookupCall'
                  }
                ]
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
