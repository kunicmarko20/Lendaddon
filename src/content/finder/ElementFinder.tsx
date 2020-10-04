import PullRequestElementFinder from './PullRequestElementFinder';
import FileNavigationElementFinder from './FileNavigationElementFinder';

class ElementFinder {
  public pullRequest(): PullRequestElementFinder {
    return new PullRequestElementFinder();
  }

  public fileNavigation(): FileNavigationElementFinder {
    return new FileNavigationElementFinder();
  }
}

export default ElementFinder;
