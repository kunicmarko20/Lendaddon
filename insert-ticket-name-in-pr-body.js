main();

function main() {
    const branchName = document.querySelectorAll('summary.branch span')[1].title;
    const ticketNameArray = branchName.match(/CARD-[0-9]{4,}/gi);

    if (!Array.isArray(ticketNameArray) || ticketNameArray.length !== 1) {
        return;
    }

    const textarea = document.querySelector('textarea[name="pull_request[body]"]');

    if (textarea === null) {
        return;
    }

    textarea.value = textarea.value.replace("CARD-NUMBER", ticketNameArray[0]);
}