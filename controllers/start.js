'use strict';
import logger from "../utils/looger.js";

const start = {

    createView(request, response) {
        logger.debug("Creating start view");
        
        const viewData = {
            title: "Welcome to the Photo Gallery app!",
        };
        
        response.render("start", viewData);
    },
};

export default start;
