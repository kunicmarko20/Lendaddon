class ReleasePageExecutor {
    static #OPEN_RELEASE_PULL_REQUEST_URL_PATTERN = /github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+\/compare\/master\.\.\.development\?quick_pull=1$/gi;

    #elementFinder
    #commitMessagesToTicketsTransformer

    constructor(elementFinder, commitMessagesToTicketsTransformer) {
        this.#elementFinder = elementFinder;
        this.#commitMessagesToTicketsTransformer = commitMessagesToTicketsTransformer;
    }

    execute() {
        const title = this.#elementFinder.pullRequest().title();
        const body = this.#elementFinder.pullRequest().body();
        const tickets = this.#commitMessagesToTicketsTransformer.transform(this.#elementFinder.pullRequest().commitMessages());
        const ticketsString = tickets.join(' ');

        title.value = ticketsString;
        body.value = ticketsString.replaceAll(' ', '\n');
    }

    supports() {
        return ReleasePageExecutor.#OPEN_RELEASE_PULL_REQUEST_URL_PATTERN.test(window.location.href);
    }
}

export default ReleasePageExecutor;
