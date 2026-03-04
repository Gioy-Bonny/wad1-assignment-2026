'use strict';

import logger from "../utils/looger.js";
import JsonStore from './json-store.js';

const creatorStore = {

    store: new JsonStore('./models/creators-store.json', { workingGroup: {} }),
    array: 'workingGroup',

    getCreatorInfo() {
        return this.store.findAll(this.array);
    },

};

export default creatorStore;
