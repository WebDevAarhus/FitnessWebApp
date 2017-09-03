/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a waffle? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcupses',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Starcups yea',
        rating: 3,
        address: '125 High Street, Reading, RG6 1PS',
        reviewsTitle: 'Customer reviews',
        reviews: [
            {
                rating: 5,
                author: 'Sherlock H',
                timestamp: '16 July 2013',
                comment: 'What a great place. I can\'t say enough good things about it.'
            },
            {
                rating: 3,
                author: 'Irene Adler',
                timestamp: '22 August 2017',
                comment: 'It was okay.'
            }
        ],
        footnote1: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        footnote2: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.',
    });
};

/* GET Add review page */
module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        pageHeader: {
            title: 'Add review'
        },

    });
};