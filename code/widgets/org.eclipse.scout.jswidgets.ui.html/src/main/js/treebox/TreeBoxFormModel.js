export default () => ({
  id: 'jswidgets.TreeBoxForm',
  type: 'model',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: 'GroupBox',
    fields: [
      {
        id: 'DetailBox',
        objectType: 'GroupBox',
        gridColumnCount: 1,
        fields: [
          {
            id: 'TreeBox',
            objectType: 'TreeBox',
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
        objectType: 'TabBox',
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
            objectType: 'TabItem',
            label: 'Properties',
            fields: [
              {
                id: 'LookupCallField',
                objectType: 'SmartField',
                label: 'LookupCall',
                lookupCall: 'jswidgets.LookupCallLookupCall'
              },
              {
                id: 'PropertiesBox',
                objectType: 'jswidgets.TreePropertiesBox',
                labelVisible: false,
                borderVisible: false
              },
              {
                id: 'ValueFieldPropertiesBox',
                objectType: 'jswidgets.ValueFieldPropertiesBox',
                expanded: false
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: 'jswidgets.FormFieldPropertiesBox',
                expanded: false
              },
              {
                id: 'GridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Grid Data Hints',
                expanded: false
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: 'TabItem',
            label: 'Actions',
            fields: [
              {
                id: 'FormFieldActionsBox',
                objectType: 'jswidgets.FormFieldActionsBox'
              },
              {
                id: 'WidgetActionsBox',
                objectType: 'jswidgets.WidgetActionsBox'
              }
            ]
          },
          {
            id: 'EventsTab',
            objectType: 'jswidgets.EventsTab'
          }
        ]
      }
    ]
  }
});
