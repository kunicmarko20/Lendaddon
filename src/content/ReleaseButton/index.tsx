import SupportsExecutorDecorator from '../SupportsExecutorDecorator';
import ReleaseButtonExecutor from './ReleaseButtonExecutor';
import ElementFinder from '../finder/ElementFinder';
import Executor from '../Executor';

const executor: Executor = new SupportsExecutorDecorator(
  new ReleaseButtonExecutor(new ElementFinder())
);
executor.execute();
