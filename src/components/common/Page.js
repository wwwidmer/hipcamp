import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

class Page extends React.Component {
    render () {
      const { loading } = this.props;

      const loaderActive = loading ? 'loader-active': '';

      return (
        <div className="page">
          <Header />
          <div className="content">
            <div className={`${loaderActive}`} />
            {this.props.children}
          </div>
        </div>
      )
    }
}

Page.PropTypes = {
  loading: PropTypes.bool
}

export default Page;
