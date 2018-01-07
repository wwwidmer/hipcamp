import Features from './camp_features';

const api = {
    campground: {
        getFeatures: id => new Promise( (resolve, reject) => {
          setTimeout(()=>{resolve(Features)}, 250)
        })
    }
}

export default api;
