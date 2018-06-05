import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style.css';

const PageShell = Page => props => (
  <div className="Page">
    <ReactCSSTransitionGroup
      transitionAppear
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName={props.history.action === 'PUSH' ? 'SlideIn' : 'SlideOut'}
    >
      <Page {...props} />
    </ReactCSSTransitionGroup>
  </div>
);

export default PageShell;
