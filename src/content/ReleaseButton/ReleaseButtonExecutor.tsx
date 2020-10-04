import { render } from 'react-dom';
import ReleaseButton from './ReleaseButton';
import React from 'react';
import ElementFinder from '../finder/ElementFinder';
import SupportsExecutor from '../SupportsExecutor';

class ReleaseButtonExecutor implements SupportsExecutor {
  private readonly MAIN_REPOSITORY_PAGE_PATTERN = /github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+$/gi;

  private elementFinder: ElementFinder;

  public constructor(elementFinder: ElementFinder) {
    this.elementFinder = elementFinder;
  }

  public execute(): void {
    const fileNavigation = this.elementFinder.fileNavigation().navigation();
    const goToFileButton = this.elementFinder.fileNavigation().goToFileButton();

    const releaseButtonContainer = document.createElement('div');
    fileNavigation.insertBefore(releaseButtonContainer, goToFileButton);

    render(<ReleaseButton />, releaseButtonContainer);
  }

  public supports(): boolean {
    return this.MAIN_REPOSITORY_PAGE_PATTERN.test(window.location.href);
  }
}

export default ReleaseButtonExecutor;
