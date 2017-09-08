var mongoose = require('mongoose');
var loc = mongoose.model('Location');


/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'page ttl',
        pageHeader: {
            title: 'text',
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
    loc.findOne({},[], function(err, location) { 
        console.log(">>>> " + location.name); 
        
        res.render('location-info',location);
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