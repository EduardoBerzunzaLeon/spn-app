import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server';
import { createRouter } from './router';

import './global-middleware';

export default createStartHandler({
  createRouter,
})(defaultStreamHandler);

// import {
//   createStartHandler,
//   defaultStreamHandler,
// } from '@tanstack/react-start/server'
// import { createRouter } from './router'

// export default createStartHandler({
//   createRouter,
// })(defaultStreamHandler)
