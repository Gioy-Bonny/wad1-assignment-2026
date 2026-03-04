'use strict';

import logger from "../utils/looger.js";
import JsonStore from './json-store.js';

const galleryStore = {

    store: new JsonStore('./models/galleries-store.json', { galleries: [] }),
    collection: 'galleries',
    array: 'photos',

    getAllGalleries() {
        return this.store.findAll(this.collection);
    },
    getGallery(id) {
        return this.store.findOneBy(this.collection, (gallery => gallery.id === id));
    },
};

export default galleryStore;
