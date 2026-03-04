'use strict';

import logger from "../utils/looger.js";
import appInfo from "../models/app-info.js";
import creatorStore from "../models/creators-store.js";
const about = {

    createView(request, response) {
        const info = appInfo.getAppInfo();

        const viewData = {
            title: "About the Photo Gallery App",
            workingGroup: creatorStore.getCreatorInfo(),
            info: appInfo.getAppInfo()
        };
        logger.info(viewData.workingGroup)
        logger.debug("About view data: " + JSON.stringify(viewData));
        response.render("about", viewData);
    }
};

export default about;