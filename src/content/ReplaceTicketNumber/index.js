main();

function main() {
  const body = document.querySelector('textarea[name="pull_request[body]"]');
  if (body === null) {
    return;
  }

  const branchName = document.querySelectorAll('summary.branch span')[1].title;
  const ticketNameArray = branchName.match(/CARD-[0-9]+/gi);

  if (!Array.isArray(ticketNameArray) || ticketNameArray.length !== 1) {
    return;
  }

  body.value = body.value.replace('CARD-NUMBER', ticketNameArray[0]);
}
