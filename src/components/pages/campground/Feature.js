import React from 'react';
import PropTypes from 'prop-types';

export class Feature extends React.Component {
    toggleSubfeatures() {
      this.setState({ hideSubfeatures: !this.state.hideSubfeatures });
    }

    constructor(props){
      super(props);
      this.state = {
        hideSubfeatures: true
      };
      this.toggleSubfeatures = this.toggleSubfeatures.bind(this);
    }

    render () {
        const { title, presence, subfeatures, id } = this.props;
        const { hideSubfeatures } = this.state;
        var color = presence ? 'green' : 'red';
        var checked = presence ? 'checkmark icon': 'minus icon';
        const hidden = (subfeatures || []).length ? '' : 'hidden';
        const showOrHide = hideSubfeatures ? 'chevron down icon' : 'chevron up icon';

        /* If a feature is present but not all subfeatures are
        *  Display a "warning" icon - to prompt further investigation
        *  Case: Trash is considered present because there is a composting bin;
        *        Yet campers are still required to pack out normal trash;
        *        It would be potentially bad for LNT if campers thought trash was available.
        */
        for (var i = 0; i < (subfeatures || []).length; i++) {
          if (presence && !subfeatures[i].presence) {
            color = 'yellow';
            checked = 'warning sign icon';
          }
        }

        return (
          <li className={`feature ${color}`} id={`feature-${title}-${id}`}>
            <div className="inline clickable" onClick={this.toggleSubfeatures}>
              <i className={`${color} ${checked}`} />
              <div>
                {title}
              </div>
              <i className={`${showOrHide} ${hidden} clickable`}/>
            </div>
            <FeatureList
              features={subfeatures || []} subfeature={true} hidden={hideSubfeatures}
            />
          </li>
        )
    }
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  presence: PropTypes.bool,
  subfeatures: PropTypes.array
}

class FeatureList extends React.Component {

  render () {
    const { features, subfeature, hidden } = this.props;
    if (!(features || []).length)
      return "";
    const subfeatureList = subfeature ? 'subfeature' : '';
    const hide = hidden ? 'hidden': '';
    return (
      <div className={`featurelist ${hide}`}>
        <ul className={`${subfeatureList}`}>
          {
            features.map( ( feature, i) => {
                return <Feature key={i} {...feature} id={i} />
            })
          }
        </ul>
      </div>
    )
  }
}

FeatureList.propTypes = {
  features: PropTypes.array.isRequired,
  subfeature: PropTypes.bool,
  hidden: PropTypes.bool
}

export default FeatureList;
