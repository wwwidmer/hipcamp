import React from 'react';


class Feature extends React.Component {
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
        const { title, presence, subfeatures, key } = this.props;
        const { hideSubfeatures } = this.state;
        const color = presence ? 'green' : 'red';
        const hidden = (features || []).length ? '' : 'hidden';
        const showOrHide = hideSubfeatures ? 'toggle down icon' : 'toggle up icon';
        const checked = presence ? 'check circle outline icon': 'radio icon'

        return (
          <li className={`feature ${color}`} onClick={this.toggleSubfeatures}>
            <i className={`${color} ${checked}`} />
            <div>
              {title}
            </div>
            <i className={`${showOrHide} ${hidden} clickable`}/>
            <FeatureList
              features={subfeatures} subfeature={true} hidden={hideSubfeatures}
            />
          </li>
        )
    }
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
        {!subfeature && <h2> Features </h2>}
        <ul className={`${subfeatureList}`}>
          {
            features.map( ( feature, i) => {
                return <Feature key={i} {...feature} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default FeatureList;
