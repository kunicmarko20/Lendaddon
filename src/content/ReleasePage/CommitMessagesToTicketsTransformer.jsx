class CommitMessagesToTicketsTransformer {

    #ticketNameExtractor

    constructor(ticketNameExtractor) {
        this.#ticketNameExtractor = ticketNameExtractor;
    }

    transform(commitMessages) {
        const tickets = [];

        for (const commitMessage of commitMessages) {
            try {
                tickets.push(this.#ticketNameExtractor.fromString(commitMessage.title));
            } catch (error) {}
        }

        return [...new Set(tickets.sort())];
    }
}

export default CommitMessagesToTicketsTransformer;
