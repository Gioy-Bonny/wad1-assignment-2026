'use strict';

import logger from '../utils/looger.js';
import JsonStore from './json-store.js';

const appInfo = {

    store: new JsonStore('./models/app-info.json', { info: {} }),
    collection: 'info',
    array: 'creators',

    getAppInfo() {
        return this.store.findAll(this.collection);
    },
};

export default appInfo;
