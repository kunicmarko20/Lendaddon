import Executor from './Executor';

interface SupportsExecutor extends Executor {
  supports(): boolean;
}

export default SupportsExecutor;
