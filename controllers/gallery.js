'use strict';

import logger from "../utils/looger.js";
import galleryStore from "../models/galleries-store.js";
const gallery = {

    createView(request, response) {
        
        const galleryId = request.params.id;
        logger.info(`Gallery ID: ${galleryId}`);
        
        const viewData = {
            title: 'gallery',
            singleGallery: galleryStore.getGallery(galleryId)
        };
        response.render('gallery', viewData);
    },
};

export default gallery;
