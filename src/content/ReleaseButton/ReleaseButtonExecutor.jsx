import {render} from "react-dom";
import ReleaseButton from "./ReleaseButton";
import React from "react";

class ReleaseButtonExecutor {
    static #MAIN_REPOSITORY_PAGE_PATTERN = /github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+$/gi;

    #elementFinder

    constructor(elementFinder) {
        this.#elementFinder = elementFinder;
    }

    execute() {
        const fileNavigation = this.#elementFinder.fileNavigation().navigation();
        const goToFileButton = this.#elementFinder.fileNavigation().goToFileButton();

        const releaseButtonContainer = document.createElement('div');
        fileNavigation.insertBefore(releaseButtonContainer, goToFileButton);

        render(<ReleaseButton />, releaseButtonContainer);
    }

    supports() {
        return ReleaseButtonExecutor.#MAIN_REPOSITORY_PAGE_PATTERN.test(window.location.href);
    }
}

export default ReleaseButtonExecutor;
