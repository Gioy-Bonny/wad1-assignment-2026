'use strict';

import logger from "../utils/looger.js";
import galleriesStore from '../models/galleries-store.js';

const galleries = {
    createView(request, response) {
        logger.info('Creating view for the galleries page.');
        
        const viewData = {
            galleries: galleriesStore.getAllGalleries(),
            title: "Photo Gallery Dashboard",
        };
        logger.debug(viewData.galleries);
        response.render("galleries", viewData);
    },
};

export default galleries;
