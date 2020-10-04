class PullRequestElementFinder {
  public title(): HTMLInputElement {
    const title = document.querySelector('input[name="pull_request[title]"]');

    if (title === null) {
      throw 'Pull Request title field not found.';
    }

    return title as HTMLInputElement;
  }

  public body(): HTMLInputElement {
    const body = document.querySelector('textarea[name="pull_request[body]"]');

    if (body === null) {
      throw 'Pull Request body field not found.';
    }

    return body as HTMLInputElement;
  }

  public commitMessages(): NodeListOf<HTMLElement> {
    return document.querySelectorAll(
      'div.commit-message > code > a:nth-child(1)'
    );
  }

  public headBranch(): HTMLElement {
    const branch = document.querySelectorAll('summary.branch span')[1];

    if (branch === null) {
      throw 'Pull Request head branch not found.';
    }

    return branch as HTMLElement;
  }
}

export default PullRequestElementFinder;
