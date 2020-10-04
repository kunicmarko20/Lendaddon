class FileNavigationElementFinder {
  public navigation(): HTMLElement {
    return document.querySelector('div.file-navigation');
  }

  public goToFileButton(): HTMLElement {
    return document.querySelector('div.file-navigation > a.btn');
  }
}

export default FileNavigationElementFinder;
