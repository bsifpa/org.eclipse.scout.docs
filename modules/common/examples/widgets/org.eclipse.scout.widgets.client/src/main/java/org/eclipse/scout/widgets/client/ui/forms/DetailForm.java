/*
 * Copyright (c) 2015 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.widgets.client.ui.forms;

import org.eclipse.scout.rt.client.ui.form.AbstractForm;
import org.eclipse.scout.rt.client.ui.form.AbstractFormHandler;
import org.eclipse.scout.rt.client.ui.form.fields.bigdecimalfield.AbstractBigDecimalField;
import org.eclipse.scout.rt.client.ui.form.fields.groupbox.AbstractGroupBox;
import org.eclipse.scout.rt.client.ui.form.fields.labelfield.AbstractLabelField;
import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.platform.text.TEXTS;
import org.eclipse.scout.widgets.client.ui.forms.DetailForm.MainBox.GroupBox;
import org.eclipse.scout.widgets.client.ui.forms.DetailForm.MainBox.GroupBox.NavigationButtonInfoField;
import org.eclipse.scout.widgets.client.ui.forms.DetailForm.MainBox.GroupBox.ValueHighField;
import org.eclipse.scout.widgets.client.ui.forms.DetailForm.MainBox.GroupBox.ValueLastField;
import org.eclipse.scout.widgets.client.ui.forms.DetailForm.MainBox.GroupBox.ValueLowField;
import org.eclipse.scout.widgets.client.ui.forms.DetailForm.MainBox.GroupBox.ValueOpenField;

@ClassId("ff9a6d9b-c54e-4c48-8cf8-3191f06756e3")
public class DetailForm extends AbstractForm {

  @Override
  public void start() {
    startNew();
  }

  public void startNew() {
    startInternal(new NewHandler());
  }

  public GroupBox getGroupBox() {
    return getFieldByClass(GroupBox.class);
  }

  public MainBox getMainBox() {
    return getFieldByClass(MainBox.class);
  }

  public ValueHighField getValueHighField() {
    return getFieldByClass(ValueHighField.class);
  }

  public NavigationButtonInfoField getNavigationButtonInfoField() {
    return getFieldByClass(NavigationButtonInfoField.class);
  }

  public ValueLastField getValueLastField() {
    return getFieldByClass(ValueLastField.class);
  }

  public ValueLowField getValueLowField() {
    return getFieldByClass(ValueLowField.class);
  }

  public ValueOpenField getValueOpenField() {
    return getFieldByClass(ValueOpenField.class);
  }

  @Order(10)
  @ClassId("728d8deb-29cc-4f7a-b924-bb8de670b736")
  public class MainBox extends AbstractGroupBox {

    @Order(10)
    @ClassId("e397827d-5693-422a-bf7d-2051be7f2789")
    public class GroupBox extends AbstractGroupBox {

      @Order(2)
      @ClassId("ae415aa7-1262-4dcf-ac90-426b5def034c")
      public class InfoField extends AbstractLabelField {

        @Override
        protected boolean getConfiguredLabelVisible() {
          return false;
        }

        @Override
        protected int getConfiguredGridW() {
          return 2;
        }

        @Override
        protected boolean getConfiguredGridUseUiHeight() {
          return true;
        }

        @Override
        protected String getConfiguredFont() {
          return "italic";
        }

        @Override
        protected void execInitField() {
          setValue("This is the detail form of the current page.");
        }
      }

      @Order(5)
      @ClassId("404c7e4b-2b20-46ae-aca4-cadba853eda6")
      public class NavigationButtonInfoField extends AbstractLabelField {

        @Override
        protected boolean getConfiguredLabelVisible() {
          return false;
        }

        @Override
        protected int getConfiguredGridW() {
          return 2;
        }

        @Override
        protected boolean getConfiguredGridUseUiHeight() {
          return true;
        }

        @Override
        protected String getConfiguredFont() {
          return "italic";
        }

        @Override
        protected void execInitField() {
          setValue("Tip: Use the navigation buttons above to toggle between detail form and detail table.");
        }
      }

      @Order(10)
      @ClassId("f2accc1c-c2d3-49f3-9c1c-b7da9952e31b")
      public class ValueLastField extends AbstractBigDecimalField {

        @Override
        protected String getConfiguredLabel() {
          return TEXTS.get("ValueLast");
        }
      }

      @Order(20)
      @ClassId("59d628a1-be40-44c8-8727-351c4d412dc5")
      public class ValueOpenField extends AbstractBigDecimalField {

        @Override
        protected String getConfiguredLabel() {
          return TEXTS.get("ValueOpen");
        }
      }

      @Order(30)
      @ClassId("610443af-b7dc-4491-b990-61768cd3a618")
      public class ValueLowField extends AbstractBigDecimalField {

        @Override
        protected String getConfiguredLabel() {
          return TEXTS.get("ValueLow");
        }
      }

      @Order(40)
      @ClassId("269f70b4-92a5-429b-9bfc-9de90d68e6aa")
      public class ValueHighField extends AbstractBigDecimalField {

        @Override
        protected String getConfiguredLabel() {
          return TEXTS.get("ValueHigh");
        }
      }
    }
  }

  public class NewHandler extends AbstractFormHandler {
  }
}
