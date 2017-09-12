var mongoose = require('mongoose');
var Loc = mongoose.model('Location');


var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
   };

module.exports.locationsCreate = function (req, res) {
  Loc.create({
    name: req.body.name,
    address: req.body.address,
    facilities: req.body.facilities.split(",")
  }, function(err, location) {
    if (err) {
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, location);
    }
  });
};

module.exports.locationsReadOne = function (req, res) {
    console.log('Finding location details', req.params);
    if (req.params && req.params.locationid) {
      Loc
        .findById(req.params.locationid)
        .exec(function(err, location) {
          if (!location) {
            sendJsonResponse(res, 404, {
              "message": "locationid not found"
            });
            return;
          } else if (err) {
            console.log(err);
            sendJsonResponse(res, 404, err);
            return;
          }
          console.log(location);
          sendJsonResponse(res, 200, location);
        });
    } else {
      console.log('No locationid specified');
      sendJSONresponse(res, 404, {
        "message": "No locationid in request"
      });
    }
};

module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};