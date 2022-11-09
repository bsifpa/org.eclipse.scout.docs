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
import {ObjectFactory} from '@eclipse-scout/core';

export * from './App';
export * from './objectFactories';
export * from './accordion/AccordionForm';
export * from './accordion/CollapseStyleLookupCall';
export * from './action/ActionPropertiesBox';
export * from './action/ActionStyleLookupCall';
export * from './action/ChildActionsLookupCall';
export * from './action/TextPositionLookupCall';
export * from './button/ButtonForm';
export * from './button/ButtonDisplayStyleLookupCall';
export * from './browserfield/BrowserFieldForm';
export * from './carousel/CarouselForm';
export * from './chartfield/ChartFieldForm';
export * from './chartfield/ChartFieldFormModel';
export * from './chartfield/ChartTypeLookupCall';
export * from './chartfield/LegendPositionLookupCall';
export * from './chartfield/SpeedoGreenAreaPositionLookupCall';
export * from './chartfield/ValuesProviderLookupCall';
export * from './common/ConfigurationBox';
export * from './common/EventsTab';
export * from './common/EventsTabModel';
export * from './common/FormFieldLookupCall';
export * from './common/IconIdLookupCall';
export * from './common/WidgetActionsBox';
export * from './common/WidgetActionsBoxModel';
export * from './common/MiniForm';
export * from './common/MiniFormModel';
export * from './checkboxfield/CheckBoxFieldForm';
export * from './desktop/Desktop';
export * from './desktop/DesktopForm';
export * from './desktopnotification/DesktopNotificationForm';
export * from './desktopnotification/NativeNotificationVisibilityLookupCall';
export * from './desktop/DisplayParentLookupCall';
export * from './form/FormDisplayHintLookupCall';
export * from './form/FormDisplayViewIdLookupCall';
export * from './form/FormForm';
export * from './form/FormPropertiesBox';
export * from './form/LifecycleForm';
export * from './formfield/FormFieldPropertiesBox';
export * from './formfield/FormFieldActionsBox';
export * from './formfield/FormFieldMenuLookupCall';
export * from './formfield/LabelPositionLookupCall';
export * from './formfield/FormFieldTypeLookupCall';
export * from './formfield/LabelWidthInPixelLookupCall';
export * from './formfield/DisabledStyleLookupCall';
export * from './formfield/FieldStyleLookupCall';
export * from './formfield/StatusSeverityLookupCall';
export * from './formfield/StatusPositionLookupCall';
export * from './formfield/TooltipAnchorLookupCall';
export * from './valuefield/ClearableStyleLookupCall';
export * from './valuefield/ValueFieldPropertiesBox';
export * from './custom/watch/WatchFieldForm';
export * from './custom/watch/WatchField';
export * from './custom/watch/WatchFieldLayout';
export * from './datefield/DateFieldForm';
export * from './desktop/WidgetsOutline';
export * from './desktop/WidgetsOutlineOverview';
export * from './filechooser/FileChooserForm';
export * from './filechooserbutton/FileChooserButtonForm';
export * from './filechooserfield/FileChooserFieldForm';
export * from './groupbox/GroupBoxAddFieldBox';
export * from './groupbox/GroupBoxAddMenuBox';
export * from './groupbox/GroupBoxDeleteFieldBox';
export * from './groupbox/GroupBoxDeleteMenuBox';
export * from './groupbox/BorderDecorationLookupCall';
export * from './groupbox/GroupBoxForm';
export * from './groupbox/GroupBoxPropertiesBox';
export * from './image/ImageForm';
export * from './image/ImageLookupCall';
export * from './imagefield/ImageFieldForm';
export * from './groupbox/MenuBarEllipsisPositionLookupCall';
export * from './groupbox/MenuBarPositionLookupCall';
export * from './label/LabelForm';
export * from './labelfield/LabelFieldForm';
export * from './logicalgrid/GridDataBox';
export * from './logicalgrid/LogicalGridForm';
export * from './logicalgrid/LogicalGridLayoutConfigBox';
export * from './logicalgrid/LogicalGridLookupCall';
export * from './lookup/LocaleLookupCall';
export * from './lookup/SalutationLookupCall';
export * from './lookup/RainbowLookupCall';
export * from './lookup/LookupCallLookupCall';
export * from './listbox/ListBoxForm';
export * from './menubar/SubMenuVisibilityLookupCall';
export * from './menubar/MenuBarForm';
export * from './menubar/MenuActionsBox';
export * from './menubar/MenuBarItemTypeLookupCall';
export * from './menubar/MenuItemLookupCall';
export * from './modeselector/ModeLookupCall';
export * from './modeselector/ModeSelectorForm';
export * from './numberfield/NumberFieldForm';
export * from './integerfield/IntegerFieldForm';
export * from './popup/PopupForm';
export * from './popup/PopupFormWidgetMap';
export * from './popup/PopupHorizontalAlignLookupCall';
export * from './popup/PopupVerticalAlignLookupCall';
export * from './popup/WidgetPopupPropertiesBox';
export * from './popup/WidgetPopupPropertiesBoxWidgetMap';
export * from './smartfield/SmartFieldForm';
export * from './smartfield/SmartFieldPropertiesBox';
export * from './smartfield/SmartFieldActiveFilterLookupCall';
export * from './smartfield/SmartFieldDisplayStyleLookupCall';
export * from './smartfield/multiline/MultilineSmartFieldForm';
export * from './smartfield/multiline/MultilinePersonLookupCall';
export * from './smartfield/table/LocaleTableLookupCall';
export * from './smartfield/table/TableSmartFieldForm';
export * from './smartfield/tree/TreeSmartFieldForm';
export * from './smartfield/tree/TreeSmartFieldPropertiesBox';
export * from './smartfield/tree/WorldLookupCall';
export * from './proposalfield/ProposalFieldForm';
export * from './proposalfield/ProposalFieldPropertiesBox';
export * from './radiobuttongroup/RadioButtonGroupForm';
export * from './rest/RestForm';
export * from './sequencebox/SequenceBoxForm';
export * from './stringfield/StringFieldForm';
export * from './stringfield/MultilineStringFieldForm';
export * from './stringfield/StringFormatLookupCall';
export * from './style/icons';
export * from './tabbox/DynamicTab';
export * from './tabbox/TabAreaStyleLookupCall';
export * from './tabbox/TabBoxAddTabItemBox';
export * from './tabbox/TabBoxDeleteTabItemBox';
export * from './tabbox/TabBoxForm';
export * from './tabbox/TabBoxProperties';
export * from './tabbox/TabItemLookupCall';
export * from './tabbox/TabItemProperties';
export * from './table/TableForm';
export * from './table/TablePropertiesBox';
export * from './table/ColumnLookupCall';
export * from './table/ColumnPropertiesBox';
export * from './table/BooleanColumnPropertiesBox';
export * from './table/NumberColumnPropertiesBox';
export * from './table/SmartColumnPropertiesBox';
export * from './table/DateColumnPropertiesBox';
export * from './table/BackgroundEffectLookupCall';
export * from './table/editable/EditableTableForm';
export * from './table/hierarchical/HierarchicalTableForm';
export * from './table/hierarchical/HierarchicalTablePropertiesBox';
export * from './table/hierarchical/HierarchicalStyleLookupCall';
export * from './tagfield/TagFieldForm';
export * from './tagfield/TagLookupCall';
export * from './tilegrid/ColorSchemeLookupCall';
export * from './tilegrid/CustomTile';
export * from './tilegrid/TileGridForm';
export * from './tilegrid/TileGridLayoutConfigBox';
export * from './tilegrid/TileTypeLookupCall';
export * from './tilegrid/VirtualTileGridForm';
export * from './tileaccordion/TileAccordionForm';
export * from './tileaccordion/GroupLookupCall';
export * from './table/CheckableStyleLookupCall';
export * from './table/GroupingStyleLookupCall';
export * from './WidgetsRoute';
export * from './page/SamplePageWithTable';
export * from './page/SamplePageWithTableSearchForm';
export * from './page/SamplePageWithNodes';
export * from './tooltip/TooltipForm';
export * from './tree/TreeForm';
export * from './tree/TreePropertiesBox';
export * from './treebox/TreeBoxForm';
export * from './treebox/CheckableTreeStyleLookupCall';
export * from './breadcrumbbar/BreadcrumbBarFieldForm';
export * from './messagebox/MessageBoxForm';
export * from './wrappedform/WrappedFormFieldForm';
export * from './wrappedform/WrappedFormLookupCall';

import * as self from './index';

export default self;
ObjectFactory.get().registerNamespace('jswidgets', self);
