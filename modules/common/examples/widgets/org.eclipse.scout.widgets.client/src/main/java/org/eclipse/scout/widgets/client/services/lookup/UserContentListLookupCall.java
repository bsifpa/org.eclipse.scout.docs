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

import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.shared.services.lookup.LocalLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.LookupRow;

/**
 * @author mzi
 */
@ClassId("902e3159-a521-46d3-ba52-ea4a811d2c2a")
public class UserContentListLookupCall extends LocalLookupCall<String> {

  private static final long serialVersionUID = 1L;

  private List<LookupRow<String>> m_rows = new ArrayList<>();

  public void setLookupRows(List<LookupRow<String>> rows) {
    m_rows = rows;
  }

  @Override
  protected List<LookupRow<String>> execCreateLookupRows() {
    return m_rows;
  }
}
