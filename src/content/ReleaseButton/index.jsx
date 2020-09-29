import React from 'react';
import { render } from 'react-dom';

import ReleaseButton from './ReleaseButton';

main();

function main() {
  if (
    !/github\.com\/[A-z0-9._-]+\/[A-z0-9._-]+$/gi.test(window.location.href)
  ) {
    return;
  }

  const navigation = document.querySelector('div.file-navigation');
  const goToFileButton = document.querySelector('div.file-navigation > a.btn');

  const releaseButtonContainer = document.createElement('div');
  navigation.insertBefore(releaseButtonContainer, goToFileButton);

  render(<ReleaseButton />, releaseButtonContainer);
}
