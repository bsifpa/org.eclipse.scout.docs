/*
 * Copyright (c) 2019 BSI Business Systems Integration AG.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Distribution License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/org/documents/edl-v10.html
 *
 * Contributors:
 *     BSI Business Systems Integration AG - initial API and implementation
 */

const baseConfig = require('@eclipse-scout/cli/scripts/webpack-defaults');
module.exports = (env, args) => {
  args.resDirArray = [
    'src/main/resources/WebContent',
    'node_modules/@eclipse-scout/core/res',
    'node_modules/leaflet/dist/leaflet.css'
  ];
  const config = baseConfig(env, args);

  config.entry = {
    'widgets': './src/main/js/widgets.js',
    'login': './src/main/js/login.js',
    'logout': './src/main/js/logout.js',
    'widgets-theme': './src/main/js/widgets-theme.less',
    'widgets-theme-dark': './src/main/js/widgets-theme-dark.less'
  };

  return config;
};
