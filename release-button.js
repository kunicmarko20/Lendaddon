main();

function main() {
    if (!/github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+$/gi.test(window.location.href)) {
        return;
    }

    const navigation = document.querySelector('div.file-navigation');
    const goToFileButton = document.querySelector('div.file-navigation > a.btn');

    const releaseButton = document.createElement("button");
    releaseButton.className = "btn btn-primary btn-danger";
    releaseButton.textContent = "Release";

    releaseButton.addEventListener('click', function () {
        window.location.replace(window.location.href + '/compare/master...development?quick_pull=1');
    });

    navigation.insertBefore(releaseButton, goToFileButton);
}
