import React from 'react';


class Feature extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
        hideSubfeatures: true
      };
    }

    toggleSubfeatures() {
      this.setState({ hideSubfeatures: !this.state.hideSubfeatures });
    }

    render () {
        const { title, presence, subfeatures, key } = this.props;
        const { hideSubfeatures } = this.state;
        console.log(this.props);
        const present = presence ? 'present' : 'not-present';
        const hidden = (features || []).length ? '' : 'hidden';
        const showOrHide = hideSubfeatures ? 'show' : 'hide';
        return (
          <li className={`feature ${present}`}>
            <span className={`icon ${title}`} />
            <div>
              {title}
            </div>
            <span className={`icon ${showOrHide} ${hidden}`} onClick={this.toggleSubfeatures}/>
            <FeatureList
              features={subfeatures} subfeature={true} hidden={hideSubfeatures}
            />
          </li>
        )
    }
}

class FeatureList extends React.Component {

  render () {
    const { features, subfeature } = this.props;
    if (!(features || []).length)
      return "";
    const subfeatureList = subfeature ? 'subfeature' : '';
    return (
      <div className="featurelist">
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
