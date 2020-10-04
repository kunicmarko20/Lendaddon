import SupportsExecutor from './SupportsExecutor';
import Executor from './Executor';

class SupportsExecutorDecorator implements Executor {
  private delegate: SupportsExecutor;

  public constructor(delegate: SupportsExecutor) {
    this.delegate = delegate;
  }

  public execute(): void {
    if (!this.delegate.supports()) {
      return;
    }

    this.delegate.execute();
  }
}

export default SupportsExecutorDecorator;
