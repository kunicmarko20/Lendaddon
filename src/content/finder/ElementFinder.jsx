import PullRequestElementFinder from "./PullRequestElementFinder";
import FileNavigationElementFinder from "./FileNavigationElementFinder";

class ElementFinder {
    pullRequest() {
        return new PullRequestElementFinder();
    }

    fileNavigation() {
        return new FileNavigationElementFinder();
    }
}

export default ElementFinder;

