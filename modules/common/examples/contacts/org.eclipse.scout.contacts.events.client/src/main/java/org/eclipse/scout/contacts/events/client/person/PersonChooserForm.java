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
package org.eclipse.scout.contacts.events.client.person;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.scout.contacts.events.client.person.PersonChooserForm.MainBox.CancelButton;
import org.eclipse.scout.contacts.events.client.person.PersonChooserForm.MainBox.OkButton;
import org.eclipse.scout.contacts.events.client.person.PersonChooserForm.MainBox.PersonBox;
import org.eclipse.scout.contacts.events.client.person.PersonChooserForm.MainBox.PersonBox.PersonField;
import org.eclipse.scout.contacts.shared.person.PersonLookupCall;
import org.eclipse.scout.rt.client.ui.form.AbstractForm;
import org.eclipse.scout.rt.client.ui.form.AbstractFormHandler;
import org.eclipse.scout.rt.client.ui.form.fields.button.AbstractCancelButton;
import org.eclipse.scout.rt.client.ui.form.fields.button.AbstractOkButton;
import org.eclipse.scout.rt.client.ui.form.fields.groupbox.AbstractGroupBox;
import org.eclipse.scout.rt.client.ui.form.fields.smartfield.AbstractSmartField;
import org.eclipse.scout.rt.platform.Order;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.platform.text.TEXTS;
import org.eclipse.scout.rt.shared.services.lookup.ILookupCall;
import org.eclipse.scout.rt.shared.services.lookup.ILookupRow;

/**
 * Form to select a person that is not excluded.
 */
@ClassId("39f9f8a8-9843-4414-8d38-7a72f8ae3f06")
public class PersonChooserForm extends AbstractForm {

  private List<String> excludedPersons = new ArrayList<>();

  @Override
  protected String getConfiguredTitle() {
    return TEXTS.get("ChoosePerson");
  }

  public void startNew() {
    startInternal(new NewHandler());
  }

  public CancelButton getCancelButton() {
    return getFieldByClass(CancelButton.class);
  }

  public PersonBox getPersonBox() {
    return getFieldByClass(PersonBox.class);
  }

  public PersonField getPersonField() {
    return getFieldByClass(PersonField.class);
  }

  public MainBox getMainBox() {
    return getFieldByClass(MainBox.class);
  }

  public OkButton getOkButton() {
    return getFieldByClass(OkButton.class);
  }

  @Order(1)
  @ClassId("5d4d395b-6474-4c24-97c9-fbfa55135872")
  public class MainBox extends AbstractGroupBox {

    @Override
    protected int getConfiguredGridColumnCount() {
      return 1;
    }

    @Order(1)
    @ClassId("c0d91bde-626f-4435-80b5-3ccc5e99d1ba")
    public class PersonBox extends AbstractGroupBox {

      @Order(1)
      @ClassId("2676e855-f13d-4cfe-bea7-ca15275f44dd")
      public class PersonField extends AbstractSmartField<String> {

        @Override
        protected boolean getConfiguredLabelVisible() {
          return false;
        }

        @Override
        protected Class<? extends ILookupCall<String>> getConfiguredLookupCall() {
          return PersonLookupCall.class;
        }

        @Override
        protected void execFilterLookupResult(ILookupCall<String> call, List<ILookupRow<String>> result) {
          result.removeIf(row -> excludedPersons.contains(row.getKey()));
        }
      }
    }

    @Order(100)
    @ClassId("042d8077-18e7-44e7-97b8-57426ff71b26")
    public class OkButton extends AbstractOkButton {
    }

    @Order(101)
    @ClassId("8e392de2-8b77-4611-80d6-b1f9efa4ac3d")
    public class CancelButton extends AbstractCancelButton {
    }
  }

  public class NewHandler extends AbstractFormHandler {
  }

  public void setExcludedPersons(List<String> excludedPersons) {
    this.excludedPersons = excludedPersons;
  }
}
