import React, { Component } from 'react';

class ReleaseButton extends Component<any, any> {
  render() {
    return (
      <a
        href={
          window.location.href + '/compare/master...development?quick_pull=1'
        }
        className={'btn lendaddon-btn-danger'}
      >
        Release
      </a>
    );
  }
}

export default ReleaseButton;
