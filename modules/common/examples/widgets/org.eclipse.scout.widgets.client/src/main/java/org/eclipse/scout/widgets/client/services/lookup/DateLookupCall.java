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
import org.eclipse.scout.rt.shared.data.basic.FontSpec;
import org.eclipse.scout.rt.shared.services.lookup.ILookupRow;
import org.eclipse.scout.rt.shared.services.lookup.LocalLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.LookupRow;

@ClassId("336f481d-c524-4d76-91dc-b57648920a6d")
public class DateLookupCall extends LocalLookupCall<Long> {

  private static final long serialVersionUID = 1L;

  @Override
  protected List<ILookupRow<Long>> execCreateLookupRows() {
    List<ILookupRow<Long>> rows = new ArrayList<>();
    for (long l = 0L; l <= 5L; l++) {
      ILookupRow<Long> year = new LookupRow<>(l * 5, "201" + l).withEnabled(false);
      rows.add(year);

      FontSpec font = new FontSpec("Courir", FontSpec.STYLE_PLAIN, 12);
      long parentKey = l * 5;
      rows.add(new LookupRow<>(parentKey + 1, "Jan")
          .withBackgroundColor("FFFFFF")
          .withForegroundColor("000000")
          .withFont(font)
          .withEnabled(true)
          .withParentKey(parentKey));
      rows.add(new LookupRow<>(parentKey + 2, "Mar")
          .withBackgroundColor("FFFFFF")
          .withForegroundColor("000000")
          .withFont(font)
          .withEnabled(false)
          .withParentKey(parentKey));
      rows.add(new LookupRow<>(parentKey + 3, "Sep")
          .withBackgroundColor("FFFFFF")
          .withForegroundColor("000000")
          .withFont(font)
          .withEnabled(true)
          .withParentKey(parentKey));
      rows.add(new LookupRow<>(parentKey + 4, "Nov")
          .withBackgroundColor("FFFFFF")
          .withForegroundColor("000000")
          .withFont(font)
          .withEnabled(true)
          .withParentKey(parentKey));
    }
    return rows;
  }
}
