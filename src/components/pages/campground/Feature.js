import React from 'react';


class Feature extends React.Component {

    render () {
        const { title, presence, subfeatures, key } = this.props;
        console.log(this.props);
        const present = presence ? 'present' : 'not-present';
        return (
          <li className={`feature ${present}`}>
            <div>
              {title}
            </div>
            <FeatureList features={subfeatures} subfeature={true} />
          </li>
        )
    }
}

class FeatureList extends React.Component {

  render () {
    const { features, subfeature } = this.props;
    if (!features.length)
      return "";
    const subfeatureList = subfeature ? 'subfeature' : '';
    return (
      <ul className={`featurelist ${subfeatureList}`}>
        {
          features.map( ( feature, i) => {
              return <Feature key={i} {...feature} />
          })
        }
      </ul>
    )
  }
}

export default FeatureList;
