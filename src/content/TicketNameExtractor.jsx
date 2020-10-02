class TicketNameExtractor {
    static #TICKET_IN_STRING_PATTERN = /TEST-[0-9]+/gi;

    fromString(string) {
        const ticketNameArray = string.match(TicketNameExtractor.#TICKET_IN_STRING_PATTERN);

        if (!Array.isArray(ticketNameArray) || ticketNameArray.length !== 1) {
            throw 'Ticket name not found.'
        }

        return ticketNameArray[0];
    }
}

export default TicketNameExtractor;
