import SupportsExecutor from '../SupportsExecutor';
import TicketNameExtractor from '../TicketNameExtractor';
import ElementFinder from '../finder/ElementFinder';

class ReplaceTicketNumberExecutor implements SupportsExecutor {
  private readonly OPEN_PULL_REQUEST_URL_PATTERN = /github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+\/compare\/(?!master).+$/gi;

  private elementFinder: ElementFinder;
  private ticketNameExtractor: TicketNameExtractor;

  public constructor(
    elementFinder: ElementFinder,
    ticketNameExtractor: TicketNameExtractor
  ) {
    this.elementFinder = elementFinder;
    this.ticketNameExtractor = ticketNameExtractor;
  }

  public execute(): void {
    const body = this.elementFinder.pullRequest().body();
    const branch = this.elementFinder.pullRequest().headBranch();

    body.value = body.value.replace(
      'CARD-NUMBER',
      this.ticketNameExtractor.fromString(branch.title)
    );
  }

  public supports(): boolean {
    return this.OPEN_PULL_REQUEST_URL_PATTERN.test(window.location.href);
  }
}

export default ReplaceTicketNumberExecutor;
