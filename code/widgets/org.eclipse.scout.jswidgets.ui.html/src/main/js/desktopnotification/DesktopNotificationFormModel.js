export default () => ({
  id: 'jswidgets.DesktopNotificationForm',
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
            id: 'Button',
            objectType: 'Button',
            label: 'Show Notification',
            processButton: false,
            gridDataHints: {
              horizontalAlignment: 0
            }
          }
        ]
      },
      {
        id: 'ConfigurationBox',
        objectType: 'TabBox',
        cssClass: 'jswidgets-configuration',
        selectedTab: 'PropertiesTab',
        tabItems: [
          {
            id: 'PropertiesTab',
            objectType: 'TabItem',
            label: 'Properties',
            fields: [
              {
                id: 'PropertiesBox',
                objectType: 'GroupBox',
                label: 'Properties',
                labelVisible: false,
                borderVisible: false,
                fields: [
                  {
                    id: 'MessageField',
                    objectType: 'StringField',
                    label: 'Message'
                  },
                  {
                    id: 'StatusSeverityField',
                    objectType: 'SmartField',
                    lookupCall: 'jswidgets.StatusSeverityLookupCall',
                    label: 'Severity'
                  },
                  {
                    id: 'DurationField',
                    objectType: 'NumberField',
                    label: 'Duration',
                    tooltipText: '${textKey:DurationTooltip}'
                  },
                  {
                    id: 'ClosableField',
                    objectType: 'CheckBoxField',
                    label: 'Closable',
                    labelVisible: false
                  },
                  {
                    id: 'NativeOnlyField',
                    objectType: 'CheckBoxField',
                    label: 'Native Only',
                    labelVisible: false
                  },
                  {
                    id: 'NativeNotificationVisibilityField',
                    objectType: 'SmartField',
                    lookupCall: 'jswidgets.NativeNotificationVisibilityLookupCall',
                    label: 'Native Notification'
                  }
                ]
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
