import TicketNameExtractor from '../TicketNameExtractor';

class CommitMessagesToTicketsTransformer {
  private ticketNameExtractor: TicketNameExtractor;

  public constructor(ticketNameExtractor: TicketNameExtractor) {
    this.ticketNameExtractor = ticketNameExtractor;
  }

  public transform(commitMessages: NodeListOf<HTMLElement>): string[] {
    const tickets = [];

    for (const commitMessage of commitMessages) {
      try {
        tickets.push(this.ticketNameExtractor.fromString(commitMessage.title));
      } catch (error) {}
    }

    return [...new Set(tickets.sort())];
  }
}

export default CommitMessagesToTicketsTransformer;
