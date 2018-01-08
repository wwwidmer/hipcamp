import React from 'react';
import PropTypes from 'prop-types';

import API from '../../../api';
import Page from '../../common/Page';
import FeatureList from './Feature';

class CampgroundPage extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
        loading: true,
        features: []
      };
    }

    componentDidMount() {
        API.campground.getFeatures().then( (features) => {
          this.setState({ features, loading: false })
        })
    }

    render () {
      const { features, loading } = this.state;

      return (
        <Page loading={loading}>
            <FeatureList features={features} />
        </Page>
      )
    }
}

CampgroundPage.propTypes = {
  id: PropTypes.number.isRequired
}
export default CampgroundPage;
