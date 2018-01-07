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
        campground: {
            name: 'Smokemont Campground',
            location: 'Smokemont Campground Rd A, Cherokee, NC 28719',

        }
      };
    }

    componentDidMount() {
        API.campground.getFeatures().then( (features) => {
          this.setState({ features })
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
