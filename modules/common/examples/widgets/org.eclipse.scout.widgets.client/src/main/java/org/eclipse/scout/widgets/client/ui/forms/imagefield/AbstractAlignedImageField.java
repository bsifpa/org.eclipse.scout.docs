/*
 * Copyright (c) 2020 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */
package org.eclipse.scout.widgets.client.ui.forms.imagefield;

import org.eclipse.scout.rt.client.ui.form.fields.imagefield.AbstractImageField;
import org.eclipse.scout.rt.platform.classid.ClassId;
import org.eclipse.scout.widgets.shared.Icons;

/**
 * Helper class to test image alignment.
 *
 * @since 9.0
 */
@ClassId("0be31d88-06bf-4f5d-93a7-1951af95bdfd")
public abstract class AbstractAlignedImageField extends AbstractImageField {

  private final int m_verticalAlignment;
  private final int m_horizontalAlignment;

  public AbstractAlignedImageField(int verticalAlignment, int horizontalAlignment) {
    super(false);
    m_verticalAlignment = verticalAlignment;
    m_horizontalAlignment = horizontalAlignment;
    callInitializer();
  }

  @Override
  protected int getConfiguredVerticalAlignment() {
    return m_verticalAlignment;
  }

  @Override
  protected int getConfiguredHorizontalAlignment() {
    return m_horizontalAlignment;
  }

  @Override
  protected String getConfiguredTooltipText() {
    return "Vertical alignment: " + m_verticalAlignment + "\nHorizontal alignment: " + m_horizontalAlignment;
  }

  @Override
  protected String getConfiguredImageId() {
    return Icons.EclipseScout;
  }

  @Override
  protected String getConfiguredCssClass() {
    return "highlight";
  }

  @Override
  protected boolean getConfiguredLabelVisible() {
    return false;
  }

  @Override
  protected boolean getConfiguredStatusVisible() {
    return false;
  }
}
