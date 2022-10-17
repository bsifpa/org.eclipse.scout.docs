/*
 * Copyright (c) 2018 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.widgets.client.ui.template.formfield;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.scout.rt.client.ui.form.fields.IFormField;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.shared.services.lookup.ILookupRow;
import org.eclipse.scout.rt.shared.services.lookup.LocalLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.LookupRow;

@ClassId("5b7eaa45-4fec-4345-b66f-5fb9e6fdb00f")
public class LabelPositionLookupCall extends LocalLookupCall<Byte> {

  private static final long serialVersionUID = 1L;

  @Override
  protected List<? extends ILookupRow<Byte>> execCreateLookupRows() {
    List<ILookupRow<Byte>> rows = new ArrayList<>();
    rows.add(new LookupRow<>(IFormField.LABEL_POSITION_DEFAULT, "default"));
    rows.add(new LookupRow<>(IFormField.LABEL_POSITION_LEFT, "left"));
    rows.add(new LookupRow<>(IFormField.LABEL_POSITION_ON_FIELD, "on field"));
    rows.add(new LookupRow<>(IFormField.LABEL_POSITION_TOP, "top"));
    return rows;
  }
}
