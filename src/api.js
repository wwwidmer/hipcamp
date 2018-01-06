import Features from 'camp_features';

const api = {
    campground: {
        getFeatures: id => new Promise( (accept, reject) => {
          setTimeout(()=>{accept(Features)}, 250)
        })
    }
}
