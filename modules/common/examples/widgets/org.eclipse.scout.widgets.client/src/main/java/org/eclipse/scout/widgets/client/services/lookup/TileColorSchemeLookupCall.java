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
import java.util.stream.Stream;

import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.shared.data.colorscheme.ColorScheme;
import org.eclipse.scout.rt.shared.data.colorscheme.IColorScheme;
import org.eclipse.scout.rt.shared.services.lookup.LocalLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.LookupRow;

@ClassId("8302e181-9a58-4e92-8bad-0cc20c35d45d")
public class TileColorSchemeLookupCall extends LocalLookupCall<IColorScheme> {

  private static final long serialVersionUID = 1L;

  @Override
  protected List<LookupRow<IColorScheme>> execCreateLookupRows() {
    ArrayList<LookupRow<IColorScheme>> rows = new ArrayList<>();
    Stream.of(ColorScheme.values()).forEach(colorScheme -> rows.add(new LookupRow<>(colorScheme, colorScheme.getIdentifier())));
    return rows;
  }
}
