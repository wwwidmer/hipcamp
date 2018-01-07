import React from 'react';

import Header from './Header';

class Page extends React.Component {
    render () {

      return (
        <div className="page">
          <Header />
          <div className="content"> {this.props.children} </div>
        </div>
      )
    }
}

export default Page;
