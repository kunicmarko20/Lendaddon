main();

function main() {
  if (
    !/github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+\/compare\/master\.\.\.development\?quick_pull=1$/gi.test(
      window.location.href
    )
  ) {
    return;
  }

  const title = document.querySelector('input[name="pull_request[title]"]');
  if (title === null) {
    return;
  }

  const body = document.querySelector('textarea[name="pull_request[body]"]');
  if (body === null) {
    return;
  }

  const commitMessages = document.querySelectorAll(
    'div.commit-message > code > a:nth-child(1)'
  );

  const pattern = /TEST-[0-9]+/gi;
  const tickets = [];

  for (const commitMessage of commitMessages) {
    const ticketNameArray = commitMessage.title.match(pattern);

    if (!Array.isArray(ticketNameArray) || ticketNameArray.length !== 1) {
      continue;
    }

    tickets.push(ticketNameArray[0]);
  }

  const ticketsString = [...new Set(tickets.sort())].join(' ');

  title.value = ticketsString;
  body.value = ticketsString.replaceAll(' ', '\n');
}
