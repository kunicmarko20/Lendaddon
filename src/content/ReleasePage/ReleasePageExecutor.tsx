import SupportsExecutor from '../SupportsExecutor';
import ElementFinder from '../finder/ElementFinder';
import CommitMessagesToTicketsTransformer from './CommitMessagesToTicketsTransformer';

class ReleasePageExecutor implements SupportsExecutor {
  private readonly OPEN_RELEASE_PULL_REQUEST_URL_PATTERN = /^https:\/\/github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+\/compare\/master\.\.\.development/gi;

  private elementFinder: ElementFinder;
  private commitMessagesToTicketsTransformer: CommitMessagesToTicketsTransformer;

  public constructor(
    elementFinder: ElementFinder,
    commitMessagesToTicketsTransformer: CommitMessagesToTicketsTransformer
  ) {
    this.elementFinder = elementFinder;
    this.commitMessagesToTicketsTransformer = commitMessagesToTicketsTransformer;
  }

  public execute(): void {
    const title = this.elementFinder.pullRequest().title();
    const body = this.elementFinder.pullRequest().body();
    const tickets: string[] = this.commitMessagesToTicketsTransformer.transform(
      this.elementFinder.pullRequest().commitMessages()
    );

    title.value = 'Release ' + tickets.join(' ');
    body.value = tickets.join('\n');
  }

  public supports(): boolean {
    return this.OPEN_RELEASE_PULL_REQUEST_URL_PATTERN.test(
      window.location.href
    );
  }
}

export default ReleasePageExecutor;
