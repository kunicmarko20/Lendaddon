class SupportsExecutor {
    #executor

    constructor(executor) {
        this.#executor = executor;
    }

    execute() {
        if (!this.#executor.supports()) {
            return;
        }

        this.#executor.execute();
    }
}

export default SupportsExecutor;
