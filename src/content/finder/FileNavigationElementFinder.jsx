class FileNavigationElementFinder {
    navigation() {
        return document.querySelector('div.file-navigation');
    }

    goToFileButton() {
        return document.querySelector('div.file-navigation > a.btn');
    }
}

export default FileNavigationElementFinder;
