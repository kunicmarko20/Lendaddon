class TicketNameExtractor {
  private readonly TICKET_IN_STRING_PATTERN = /CARD-[0-9]+/gi;

  public fromString(string: string): string {
    const ticketNameArray: string[] | null = string.match(
      this.TICKET_IN_STRING_PATTERN
    );

    if (!Array.isArray(ticketNameArray) || ticketNameArray.length !== 1) {
      throw 'Ticket name not found.';
    }

    return ticketNameArray[0];
  }
}

export default TicketNameExtractor;
