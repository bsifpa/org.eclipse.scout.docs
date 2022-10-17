export default () => ({
  id: 'jswidgets.BreadcrumbBarFieldForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: 'GroupBox',
    fields: [
      {
        id: 'DetailBox',
        objectType: 'GroupBox',
        gridColumnCount: 2,
        fields: [
          {
            id: 'BreadcrumbBarField',
            objectType: 'BreadcrumbBarField',
            label: 'Breadcrumb Bar Field',
            breadcrumbBar: {
              objectType: 'BreadcrumbBar',
              breadcrumbItems: [
                {
                  objectType: 'BreadcrumbItem',
                  text: 'Root Folder',
                  ref: null
                },
                {
                  objectType: 'BreadcrumbItem',
                  text: 'Subfolder',
                  ref: 'sub-id'
                },
                {
                  objectType: 'BreadcrumbItem',
                  text: 'Sub-Subfolder',
                  ref: 'sub-sub-id'
                },
                {
                  objectType: 'BreadcrumbItem',
                  text: 'Sub-Sub-Subfolder',
                  ref: 'sub-sub-sub-id'
                }
              ]
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
                id: 'BreadcrumbBarProperties',
                objectType: 'GroupBox',
                label: 'Breadcrumb Bar Configuration',
                fields: [
                  {
                    id: 'BreadcrumbItemsField',
                    objectType: 'StringField',
                    label: 'Breadcrumb Items',
                    multilineText: true,
                    tooltipText: 'Separate breadcrumbs by new line character',
                    gridDataHints: {
                      h: 3
                    }
                  }
                ]
              },
              {
                id: 'FormFieldPropertiesBox',
                objectType: 'jswidgets.FormFieldPropertiesBox'
              },
              {
                id: 'GridDataBox',
                objectType: 'jswidgets.GridDataBox',
                label: 'Grid Data Hints'
              }
            ]
          },
          {
            id: 'ActionsTab',
            objectType: 'TabItem',
            label: 'Actions',
            fields: [
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
