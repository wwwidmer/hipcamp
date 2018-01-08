const test_features = {
  1: [],
  2: [
      {
        'title': 'Toilet',
        'presence': false,
        'subfeatures': []
      },
      {
        'title': 'Parking',
        'subfeatures': []
      }
  ]
  3: [
      {
        'title': 'Toilet',
        'presence': false
      }
  ],
  4: [
      {
        'title': 'Turtle',
        'presence': true,
        'subfeatures': [
          {
            'title': 'Turtle',
            'presence': false,
            'subfeatures': [
                {
                  'title': 'Turtle',
                  'presence': true,
                  'subfeatures': [
                      {
                        'title': 'Turtle',
                        'presence': false,
                        'subfeatures': []
                      }
                  ]
                }
            ]
          }
        ]
      }
  ]
}

const api = {
    campground: {
        getFeatures: id => new Promise( (resolve, reject) => {
            if (test_features[id]) {
              resolve(test_features[id])
            } else {
              reject({'Error': 'Could not find feature.'})
            }
        })
    }
}

export default api;
