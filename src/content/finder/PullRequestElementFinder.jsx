class PullRequestElementFinder {
    title() {
        const title = document.querySelector('input[name="pull_request[title]"]');

        if (title === null) {
            throw 'Pull Request title field not found.'
        }

        return title;
    }

    body() {
        const body = document.querySelector('textarea[name="pull_request[body]"]');

        if (body === null) {
            throw 'Pull Request body field not found.'
        }

        return body;
    }

    commitMessages() {
        return document.querySelectorAll('div.commit-message > code > a:nth-child(1)');
    }

    headBranch() {
        const branch = document.querySelectorAll('summary.branch span')[1]

        if (branch === null) {
            throw 'Pull Request head branch not found.'
        }

        return branch;
    }
}

export default PullRequestElementFinder;
