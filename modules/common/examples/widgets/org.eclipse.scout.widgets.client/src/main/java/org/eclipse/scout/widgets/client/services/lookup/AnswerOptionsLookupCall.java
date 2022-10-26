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
package org.eclipse.scout.widgets.client.services.lookup;

import java.util.ArrayList;
import java.util.List;

import org.eclipse.scout.rt.client.ui.messagebox.IMessageBox;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.shared.services.lookup.LocalLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.LookupRow;

/**
 * @author mzi
 */
@ClassId("aed2b172-c861-4025-9d7b-3cccd59670e1")
public class AnswerOptionsLookupCall extends LocalLookupCall<Integer> {

  private static final long serialVersionUID = 1L;

  @Override
  protected List<LookupRow<Integer>> execCreateLookupRows() {
    ArrayList<LookupRow<Integer>> rows = new ArrayList<>();
    rows.add(new LookupRow<>(IMessageBox.YES_OPTION, "IMessageBox.YES_OPTION"));
    rows.add(new LookupRow<>(IMessageBox.NO_OPTION, "IMessageBox.NO_OPTION"));
    rows.add(new LookupRow<>(IMessageBox.CANCEL_OPTION, "IMessageBox.CANCEL_OPTION"));
    return rows;
  }
}
