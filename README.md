src/pages/campground/Feature.js contains the component specifically for the test.
The rest of the project puts the component into context and keeps it "dumb".
CampgroundPage is the "smart" component that talks to the "api".

- FeatureList fills the width of its container - it looks fine up to the third
level of subfeatures and around 200px of width. The ui is where the most improvement can be made.
- A feature is given a green check if its existence is noted, a red minus if not.

Although not in the requirements this made sense to implement to me.
- A feature is given a special yellow Warning sign if the existence is noted but a direct
subfeature is noted as not being present.

(Icons from semantic-ui)


Setup:

`npm install`
`npm run start`
(Or for a one time build just `npm run build`)

(open dist/campground.html in your browser of choice)
(See src/camp_features.js to edit features available in demo page)
