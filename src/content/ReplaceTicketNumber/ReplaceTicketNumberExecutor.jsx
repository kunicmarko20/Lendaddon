class ReplaceTicketNumberExecutor {
    static #OPEN_PULL_REQUEST_URL_PATTERN = /github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+\/compare\/.+$/gi;

    #elementFinder;
    #ticketNameExtractor;

    constructor(elementFinder, ticketNameExtractor) {
        this.#elementFinder = elementFinder;
        this.#ticketNameExtractor = ticketNameExtractor;
    }

    execute() {
        const body = this.#elementFinder.pullRequest().body();
        const branch = this.#elementFinder.pullRequest().headBranch();

        body.value = body.value.replace(
            'CARD-NUMBER',
            this.#ticketNameExtractor.fromString(branch.title)
        );
    }

    supports() {
        return ReplaceTicketNumberExecutor.#OPEN_PULL_REQUEST_URL_PATTERN.test(window.location.href);
    }
}

export default ReplaceTicketNumberExecutor;

