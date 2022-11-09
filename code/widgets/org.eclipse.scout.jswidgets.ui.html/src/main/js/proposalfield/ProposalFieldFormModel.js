import {GroupBox, ProposalField, TabBox, TabItem} from '@eclipse-scout/core';
import {
  EventsTab,
  FormFieldActionsBox,
  FormFieldPropertiesBox,
  GridDataBox,
  ProposalFieldPropertiesBox,
  ValueFieldPropertiesBox,
  WidgetActionsBox
} from '../index';

export default () => ({
  id: 'jswidgets.ProposalFieldForm',
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
            id: 'ProposalField',
            objectType: ProposalField,
            lookupCall: 'jswidgets.SalutationLookupCall',
            label: 'Proposal Field'
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: TabBox,
        labelVisible: false,
        cssClass: 'jswidgets-configuration',
        gridColumnCount: 1,
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: TabItem,
            label: 'Properties',
            fields: [
              {
                id: 'ProposalFieldPropertiesBox',
                objectType: ProposalFieldPropertiesBox,
                label: 'Proposal Field Properties',
                labelVisible: false,
                borderVisible: false
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
