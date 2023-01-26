/*
 * Copyright (c) 2021 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.widgets.client.services.lookup;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.platform.exception.ProcessingException;
import org.eclipse.scout.rt.platform.text.TEXTS;
import org.eclipse.scout.rt.shared.services.lookup.ILookupRow;
import org.eclipse.scout.rt.shared.services.lookup.LocalLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.LookupRow;
import org.eclipse.scout.widgets.client.ui.forms.IPageForm;
import org.eclipse.scout.widgets.client.ui.forms.SmartFieldForm;
import org.eclipse.scout.widgets.client.ui.forms.StringFieldForm;
import org.eclipse.scout.widgets.client.ui.forms.imagefield.ImageFieldForm;

@ClassId("00c7a305-7da9-40cb-8e78-12b328a54b65")
public class StaticFormLookupCall extends LocalLookupCall<IPageForm> {
  private static final long serialVersionUID = 1L;

  private final List<ILookupRow<IPageForm>> m_lookupRows = new ArrayList<>();

  public StaticFormLookupCall() {
    m_lookupRows.add(new LookupRow<>(createAndStartForm(StringFieldForm.class), TEXTS.get("StringField")));
    m_lookupRows.add(new LookupRow<>(createAndStartForm(SmartFieldForm.class), TEXTS.get("SmartField")));
    m_lookupRows.add(new LookupRow<>(createAndStartForm(ImageFieldForm.class), TEXTS.get("ImageField")));
  }

  protected IPageForm createAndStartForm(Class<? extends IPageForm> formType) {
    try {
      IPageForm form = formType.getConstructor().newInstance();
      form.setShowOnStart(false);
      form.setModal(false);
      form.start();
      return form;
    }
    catch (ReflectiveOperationException e) {
      throw new ProcessingException("Error while creating instance of " + (formType == null ? "null" : formType.getName()), e);
    }
  }

  public List<IPageForm> getStaticForms() {
    List<IPageForm> result = new ArrayList<>();
    for (ILookupRow<IPageForm> row : m_lookupRows) {
      result.add(row.getKey());
    }
    return result;
  }

  @Override
  protected List<ILookupRow<IPageForm>> execCreateLookupRows() {
    return m_lookupRows;
  }
}
