import React from 'react';

import API from '../../../api';
import Page from '../../common/Page';
import FeatureList from './Feature';

class CampgroundPage extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
        loading: true,
        features: [],
        campground: {}
      };
    }

    componentDidMount() {
        API.campground.getFeatures().then( (features) => {
          this.setState({ features, loading: false })
        })
    }

    render () {
      const { features, loading, campground } = this.state;

      return (
        <Page>
            <FeatureList features={features} />
        </Page>
      )
    }
}

export default CampgroundPage;
