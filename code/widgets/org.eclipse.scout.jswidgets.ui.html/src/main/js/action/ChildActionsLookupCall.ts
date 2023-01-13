/*
 * Copyright (c) 2010, 2023 BSI Business Systems Integration AG
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 */
import {Menu, StaticLookupCall} from '@eclipse-scout/core';

export class ChildActionsLookupCall extends StaticLookupCall<Menu> {
  action: Menu;
  protected _rebuildDataHandler: () => void;

  constructor(action: Menu) {
    super();
    this._rebuildDataHandler = this._rebuildData.bind(this);
    this.data = [];
    this.setAction(action);
  }

  protected override _data(): any[] {
    return this.data;
  }

  setAction(action: Menu) {
    if (this.action) {
      this.action.off('propertyChange:childActions', this._rebuildDataHandler);
      this.action.childActions.forEach(action => action.off('propertyChange:text', this._rebuildDataHandler));
    }
    this.action = action;
    if (this.action) {
      this.action.on('propertyChange:childActions', this._rebuildDataHandler);
      this.action.childActions.forEach(action => action.on('propertyChange:text', this._rebuildDataHandler));
    }
    this._rebuildData();
  }

  protected _rebuildData() {
    if (!this.action) {
      this.data = [];
      return;
    }
    this.data = this.action.childActions.map(menu => {
      return [menu, menu.text];
    });
  }
}
