import ElementFinder from '../finder/ElementFinder';
import TicketNameExtractor from '../TicketNameExtractor';
import ReplaceTicketNumberExecutor from './ReplaceTicketNumberExecutor';
import SupportsExecutorDecorator from '../SupportsExecutorDecorator';
import Executor from '../Executor';

const executor: Executor = new SupportsExecutorDecorator(
  new ReplaceTicketNumberExecutor(
    new ElementFinder(),
    new TicketNameExtractor()
  )
);
executor.execute();
