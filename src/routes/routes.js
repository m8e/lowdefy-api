/*
  Copyright 2020 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import makeRouteHandler from '../utils/makeRouteHandler';
import cliErrors from './cli/errors/post';
import cliTelemetry from './cli/telemetry/post';

const routes = [
  {
    path: '/cli/errors',
    method: 'post',
    resolver: cliErrors.resolver,
    schema: cliErrors.schema,
  },
  {
    path: '/cli/telemetry',
    method: 'post',
    resolver: cliTelemetry.resolver,
    schema: cliTelemetry.schema,
  },
].map((route) => makeRouteHandler(route));

export default routes;
