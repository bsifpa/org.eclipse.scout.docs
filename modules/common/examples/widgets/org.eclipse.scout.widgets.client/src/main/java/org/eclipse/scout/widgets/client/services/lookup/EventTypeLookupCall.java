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

import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.rt.shared.services.common.code.ICode;
import org.eclipse.scout.rt.shared.services.lookup.CodeLookupCall;
import org.eclipse.scout.rt.shared.services.lookup.ICodeLookupCallVisitor;
import org.eclipse.scout.widgets.shared.services.code.EventTypeCodeType;

/**
 * @author mzi
 */
@ClassId("599f17a5-d42a-4751-a390-229a960bee32")
public class EventTypeLookupCall extends CodeLookupCall<Long> {

  private static final long serialVersionUID = 1L;

  /**
   * Visitor class that filters out inactive codes.
   */
  class LookupVisitor implements ICodeLookupCallVisitor<Long> {

    @Override
    public boolean visit(CodeLookupCall<Long> call, ICode<Long> code, int treeLevel) {
      return code.isActive();
    }
  }

  /**
   * Default constructor that wires this lookup call to the event type code type.
   */
  public EventTypeLookupCall() {
    super(EventTypeCodeType.class);
    setFilter(new LookupVisitor());
  }
}
