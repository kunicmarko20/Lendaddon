import ReleasePageExecutor from './ReleasePageExecutor';
import SupportsExecutorDecorator from '../SupportsExecutorDecorator';
import ElementFinder from '../finder/ElementFinder';
import CommitMessagesToTicketsTransformer from './CommitMessagesToTicketsTransformer';
import TicketNameExtractor from '../TicketNameExtractor';
import Executor from '../Executor';

const executor: Executor = new SupportsExecutorDecorator(
  new ReleasePageExecutor(
    new ElementFinder(),
    new CommitMessagesToTicketsTransformer(new TicketNameExtractor())
  )
);

executor.execute();
