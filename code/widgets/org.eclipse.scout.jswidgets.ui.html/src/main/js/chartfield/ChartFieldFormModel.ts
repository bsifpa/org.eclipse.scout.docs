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
import {
  Button, CheckBoxField, Column, FormField, FormModel, GroupBox, icons, IntegerField, LabelField, Menu, NumberField, SmartField, StringField, TabBox, TabItem, Table, TableField, TileField, TileGrid, ValueField
} from '@eclipse-scout/core';
import {Chart, ChartField, ChartFieldTile, ChartPosition, ChartType, GreenAreaPosition} from '@eclipse-scout/chart';
import {
  ChartTypeLookupCall, ColorSchemeLookupCall, EventsTab, EventsTabWidgetMap, FormFieldPropertiesBox, FormFieldPropertiesBoxWidgetMap, GridDataBox, GridDataBoxWidgetMap, LegendPositionLookupCall, SpeedoGreenAreaPositionLookupCall,
  ValuesProviderLookupCall, WidgetActionsBox, WidgetActionsBoxWidgetMap
} from '../index';

export default (): FormModel => ({
  id: 'jswidgets.ChartFieldForm',
  displayHint: 'view',
  rootGroupBox: {
    id: 'MainBox',
    objectType: GroupBox,
    fields: [
      {
        id: 'DetailBox',
        objectType: GroupBox,
        fields: [
          {
            id: 'ChartField',
            objectType: ChartField,
            gridDataHints: {
              h: 10,
              weightY: 0
            },
            labelVisible: false,
            statusVisible: false,
            chart: {
              id: 'Chart',
              objectType: Chart,
              config: {
                options: {
                  elements: {
                    line: {
                      fill: false
                    }
                  }
                }
              }
            }
          }, {
            id: 'ChartTileBox',
            objectType: TileField,
            gridDataHints: {
              h: 10,
              weightY: 0
            },
            labelVisible: false,
            statusVisible: false,
            visible: false,
            tileGrid: {
              id: 'TileGrid',
              objectType: TileGrid,
              scrollable: false,
              tiles: [
                {
                  id: 'ChartTile',
                  objectType: ChartFieldTile,
                  labelVisible: false,
                  gridDataHints: {
                    weightY: 1
                  },
                  tileWidget: {
                    id: 'TileChartField',
                    objectType: ChartField,
                    labelVisible: false,
                    statusVisible: false,
                    chart: {
                      id: 'TileChart',
                      objectType: Chart,
                      config: {
                        options: {
                          elements: {
                            line: {
                              fill: false
                            }
                          }
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }, {
        id: 'ConfigurationBox',
        objectType: TabBox,
        cssClass: 'jswidgets-configuration',
        selectedTab: 'ChartPropertiesBox',
        tabItems: [{
          id: 'ChartPropertiesBox',
          objectType: TabItem,
          label: 'Properties',
          gridColumnCount: 4,
          fields: [
            {
              id: 'ChartPropertiesBox.LeftBox',
              objectType: GroupBox,
              gridDataHints: {
                w: 2
              },
              gridColumnCount: 2,
              borderVisible: false,
              fields: [
                {
                  id: 'AutoColorCheckBox',
                  objectType: CheckBoxField,
                  label: 'Auto Color',
                  labelVisible: false
                },
                {
                  id: 'ClickableCheckBox',
                  objectType: CheckBoxField,
                  label: 'Clickable',
                  labelVisible: false
                },
                {
                  id: 'CheckableCheckBox',
                  objectType: CheckBoxField,
                  label: 'Checkable',
                  labelVisible: false
                },
                {
                  id: 'AnimatedCheckBox',
                  objectType: CheckBoxField,
                  label: 'Animated',
                  labelVisible: false
                },
                {
                  id: 'LegendVisibleBox',
                  objectType: CheckBoxField,
                  label: 'Legend visible',
                  labelVisible: false
                },
                {
                  id: 'LegendClickableCheckBox',
                  objectType: CheckBoxField,
                  label: 'Legend clickable',
                  tooltipText: 'Datasets can be shown and hidden using the legend',
                  labelVisible: false
                },
                {
                  id: 'TooltipsEnabledBox',
                  objectType: CheckBoxField,
                  label: 'Tooltips enabled',
                  labelVisible: false
                },
                {
                  id: 'DatalabelsVisibleCheckBox',
                  objectType: CheckBoxField,
                  label: 'Datalabels visible',
                  labelVisible: false
                },
                {
                  id: 'XAxisStackedCheckBox',
                  objectType: CheckBoxField,
                  label: 'x-Axis stacked',
                  labelVisible: false
                },
                {
                  id: 'YAxisStackedCheckBox',
                  objectType: CheckBoxField,
                  label: 'y-Axis stacked',
                  labelVisible: false
                },
                {
                  id: 'FillCheckBox',
                  objectType: CheckBoxField,
                  label: 'Fill',
                  labelVisible: false
                },
                {
                  id: 'TransparentCheckBox',
                  objectType: CheckBoxField,
                  label: 'Transparent',
                  labelVisible: false
                },
                {
                  id: 'AccordingToValuesCheckbox',
                  objectType: CheckBoxField,
                  label: 'Normalized',
                  labelVisible: false
                },
                {
                  id: 'FulfillmentStartValuePropertyCheckbox',
                  objectType: CheckBoxField,
                  label: 'Use start value property',
                  tooltipText: 'If set animation starts from the current value. If not set, the animation returns to 0 and starts from 0.',
                  labelVisible: false
                },
                {
                  id: 'TileCheckBox',
                  objectType: CheckBoxField,
                  label: 'Show inside tile',
                  labelVisible: false
                }
              ]
            },
            {
              id: 'ChartPropertiesBox.RightBox',
              objectType: GroupBox,
              gridDataHints: {
                w: 2
              },
              gridColumnCount: 2,
              borderVisible: false,
              fields: [
                {
                  id: 'ChartTypeField',
                  objectType: SmartField,
                  label: 'Chart Type',
                  labelPosition: FormField.LabelPosition.TOP,
                  lookupCall: ChartTypeLookupCall,
                  displayStyle: 'dropdown'
                },
                {
                  id: 'ColorSchemeField',
                  objectType: SmartField,
                  label: 'Chart Scheme',
                  labelPosition: FormField.LabelPosition.TOP,
                  lookupCall: ColorSchemeLookupCall,
                  displayStyle: 'dropdown'
                },
                {
                  id: 'TensionField',
                  objectType: NumberField,
                  label: 'Tension',
                  labelPosition: FormField.LabelPosition.TOP,
                  gridDataHints: {
                    horizontalAlignment: -1
                  },
                  minValue: 0,
                  maxValue: 1,
                  updateDisplayTextOnModify: true
                },
                {
                  id: 'GreenAreaPositionField',
                  objectType: SmartField,
                  label: 'Green area position',
                  labelPosition: FormField.LabelPosition.TOP,
                  lookupCall: SpeedoGreenAreaPositionLookupCall,
                  displayStyle: 'dropdown'
                },
                {
                  id: 'SizeOfLargestBubbleField',
                  objectType: NumberField,
                  label: 'Size of largest bubble',
                  labelPosition: FormField.LabelPosition.TOP,
                  gridDataHints: {
                    horizontalAlignment: -1
                  },
                  minValue: 0,
                  updateDisplayTextOnModify: true
                },
                {
                  id: 'MinBubbleSizeField',
                  objectType: NumberField,
                  label: 'Min bubble size',
                  labelPosition: FormField.LabelPosition.TOP,
                  gridDataHints: {
                    horizontalAlignment: -1
                  },
                  minValue: 0,
                  updateDisplayTextOnModify: true
                },
                {
                  id: 'LegendPositionField',
                  objectType: SmartField,
                  label: 'Legend position',
                  labelPosition: FormField.LabelPosition.TOP,
                  lookupCall: LegendPositionLookupCall,
                  displayStyle: 'dropdown'
                }]
            },
            {
              id: 'CustomChartPropertiesBox',
              objectType: GroupBox,
              label: 'Custom Chart Properties',
              gridColumnCount: 1,
              gridDataHints: {
                w: 4
              },
              expandable: true,
              expanded: false,
              fields: [
                {
                  id: 'InfoField',
                  objectType: LabelField,
                  labelVisible: false,
                  htmlEnabled: true,
                  wrapText: true,
                  gridDataHints: {
                    useUiHeight: true
                  },
                  value: 'For detailed information about possible properties see <a href="https://www.chartjs.org/" rel="noreferrer noopener">chart.js</a>. The custom chart properties need to be a JSON object.'
                },
                {
                  id: 'CustomChartPropertiesField',
                  objectType: StringField,
                  labelVisible: false,
                  gridDataHints: {
                    h: 6
                  },
                  multilineText: true,
                  wrapText: true,
                  maxLength: 1048576,
                  cssClass: 'json-field'
                }
              ]
            },
            {
              id: 'FormFieldPropertiesBox',
              objectType: FormFieldPropertiesBox,
              expanded: false
            },
            {
              id: 'GridDataBox',
              objectType: GridDataBox,
              label: 'Grid Data Hints'
            }
          ]
        }, {
          id: 'ChartDataBox',
          objectType: TabItem,
          label: 'Data',
          gridColumnCount: 3,
          fields: [{
            id: 'ChartDataBox.LeftBox',
            objectType: GroupBox,
            gridDataHints: {
              w: 2,
              weightY: 1
            },
            gridColumnCount: 2,
            borderVisible: false,
            fields: [{
              id: 'ChartDataTableField',
              objectType: TableField,
              labelVisible: false,
              enabled: false,
              table: {
                id: 'ChartDataTableField.Table',
                objectType: Table,
                sortEnabled: false,
                headerMenusEnabled: false,
                columns: [
                  {
                    id: 'DatasetLabelColumn',
                    objectType: Column,
                    editable: true,
                    width: 250,
                    fixedPosition: true,
                    fixedWidth: true
                  }
                ],
                menus: [
                  {
                    id: 'AddDatasetMenu',
                    objectType: Menu,
                    text: 'Add dataset',
                    menuTypes: [
                      'Table.EmptySpace',
                      'Table.SingleSelection',
                      'Table.MultiSelection'
                    ]
                  },
                  {
                    id: 'RemoveDatasetMenu',
                    objectType: Menu,
                    text: 'Remove dataset',
                    menuTypes: [
                      'Table.SingleSelection',
                      'Table.MultiSelection'
                    ]
                  },
                  {
                    id: 'AddDataMenu',
                    objectType: Menu,
                    iconId: icons.PLUS,
                    tooltipText: 'Add data',
                    menuTypes: [
                      'Table.Header'
                    ]
                  },
                  {
                    id: 'RemoveDataMenu',
                    objectType: Menu,
                    iconId: icons.MINUS,
                    tooltipText: 'Remove data',
                    enabled: false,
                    menuTypes: [
                      'Table.Header'
                    ]
                  }
                ]
              }
            }]
          }, {
            id: 'ChartDataBox.RightBox',
            objectType: GroupBox,
            gridDataHints: {
              w: 1,
              weightY: 1
            },
            gridColumnCount: 4,
            borderVisible: false,
            fields: [{
              id: 'RandomCheckBox',
              objectType: CheckBoxField,
              label: 'Random',
              labelVisible: false,
              statusVisible: false
            }, {
              id: 'FillTableCheckBox',
              objectType: CheckBoxField,
              label: 'Fill Table',
              labelVisible: false,
              statusVisible: false
            }, {
              id: 'RandomDataButton',
              objectType: Button,
              label: 'Generate random data',
              keyStroke: 'enter',
              gridDataHints: {
                w: 2
              },
              processButton: false
            }, {
              id: 'ValuesProviderField',
              objectType: SmartField,
              label: 'Values',
              labelPosition: FormField.LabelPosition.TOP,
              gridDataHints: {
                w: 4
              },
              lookupCall: ValuesProviderLookupCall,
              displayStyle: 'dropdown'
            }, {
              id: 'NumberOfDatasetsField',
              objectType: IntegerField,
              label: 'Number of datasets',
              labelPosition: FormField.LabelPosition.TOP,
              gridDataHints: {
                w: 4,
                horizontalAlignment: -1
              },
              updateDisplayTextOnModify: true,
              menus: [
                {
                  id: 'RandomNumberOfDatasetsMenu',
                  objectType: Menu,
                  text: 'Set random number'
                }]
            }, {
              id: 'MaxSegmentsField',
              objectType: IntegerField,
              label: 'Max. segments',
              labelPosition: FormField.LabelPosition.TOP,
              clearable: ValueField.Clearable.NEVER,
              gridDataHints: {
                w: 4,
                horizontalAlignment: -1
              },
              minValue: 1,
              updateDisplayTextOnModify: true
            }]
          }]
        }, {
          id: 'ActionsTab',
          objectType: TabItem,
          label: 'Actions',
          fields: [
            {
              id: 'WidgetActionsBox',
              objectType: WidgetActionsBox,
              expandable: false,
              labelVisible: false,
              borderVisible: false
            }
          ]
        }, {
          id: 'EventsTab',
          objectType: EventsTab
        }]
      }
    ]
  }
});

export type ChartFieldFormWidgetMap = {
  'MainBox': GroupBox;
  'DetailBox': GroupBox;
  'ChartField': ChartField;
  'Chart': Chart;
  'ChartTileBox': TileField;
  'TileGrid': TileGrid;
  'ChartTile': ChartFieldTile;
  'TileChartField': ChartField;
  'TileChart': Chart;
  'ConfigurationBox': TabBox;
  'ChartPropertiesBox': TabItem;
  'ChartPropertiesBox.LeftBox': GroupBox;
  'AutoColorCheckBox': CheckBoxField;
  'ClickableCheckBox': CheckBoxField;
  'CheckableCheckBox': CheckBoxField;
  'AnimatedCheckBox': CheckBoxField;
  'LegendVisibleBox': CheckBoxField;
  'LegendClickableCheckBox': CheckBoxField;
  'TooltipsEnabledBox': CheckBoxField;
  'DatalabelsVisibleCheckBox': CheckBoxField;
  'XAxisStackedCheckBox': CheckBoxField;
  'YAxisStackedCheckBox': CheckBoxField;
  'FillCheckBox': CheckBoxField;
  'TransparentCheckBox': CheckBoxField;
  'AccordingToValuesCheckbox': CheckBoxField;
  'FulfillmentStartValuePropertyCheckbox': CheckBoxField;
  'TileCheckBox': CheckBoxField;
  'ChartPropertiesBox.RightBox': GroupBox;
  'ChartTypeField': SmartField<ChartType>;
  'ColorSchemeField': SmartField<string>;
  'TensionField': NumberField;
  'GreenAreaPositionField': SmartField<GreenAreaPosition>;
  'SizeOfLargestBubbleField': NumberField;
  'MinBubbleSizeField': NumberField;
  'LegendPositionField': SmartField<ChartPosition>;
  'CustomChartPropertiesBox': GroupBox;
  'InfoField': LabelField;
  'CustomChartPropertiesField': StringField;
  'FormFieldPropertiesBox': FormFieldPropertiesBox;
  'GridDataBox': GridDataBox;
  'ChartDataBox': TabItem;
  'ChartDataBox.LeftBox': GroupBox;
  'ChartDataTableField': TableField;
  'ChartDataTableField.Table': ChartDataTableFieldTable;
  'AddDatasetMenu': Menu;
  'RemoveDatasetMenu': Menu;
  'AddDataMenu': Menu;
  'RemoveDataMenu': Menu;
  'ChartDataBox.RightBox': GroupBox;
  'RandomCheckBox': CheckBoxField;
  'FillTableCheckBox': CheckBoxField;
  'RandomDataButton': Button;
  'ValuesProviderField': SmartField<number>;
  'NumberOfDatasetsField': IntegerField;
  'RandomNumberOfDatasetsMenu': Menu;
  'MaxSegmentsField': IntegerField;
  'ActionsTab': TabItem;
  'WidgetActionsBox': WidgetActionsBox;
  'EventsTab': EventsTab;
} & FormFieldPropertiesBoxWidgetMap & GridDataBoxWidgetMap & WidgetActionsBoxWidgetMap & EventsTabWidgetMap;

export type ChartDataTableFieldTableColumnMap = {
  'DatasetLabelColumn': Column<string>;
};

export class ChartDataTableFieldTable extends Table {
  declare columnMap: ChartDataTableFieldTableColumnMap;
}
