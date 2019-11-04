// Business Logic for Location Book ---------
function Places() {
  this.destinations = [],
  this.currentId = 0
}

Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

function Destination(location, landmarks, yearVisited, notes, reason) {
  this.location = location,
  this.landmarks = [landmarks],
  this.yearVisited = yearVisited,
  this.notes = notes,
  this.reason = reason
}


Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Places.prototype.findDestination = function(id) {
  for (var i=0; i< this.destinations.length; i++) {
    if (this.destinations[i]) {
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
    }
  };
  return false;
}


var places = new Places();
var location1 = new Destination("Portland", ["Rose Gardens", "Forrest Park"], 2019, "It was fun!", "Start at Epicodus");
var location2 = new Destination("Barcelona", ["La Segrada Famila", "Parque Guel"], 2018, "It was amazing!", "Vacation");
var location3 = new Destination("Seattle", ["Pike Place Market", "Space Needle"], 2017, "It's great in the summer", "I lived there!");
var location4 = new Destination("Madrid", ["Palace Royal"], 2016, "It's NOT great in the summer", "Vacation");

places.addDestination(location1);
places.addDestination(location2);
places.addDestination(location3);
places.addDestination(location4);

console.log(places.destinations);
console.log(places.destinations[0].location);


// User Logic for Location Book ---------

$(document).ready(function(){

  places.destinations.forEach(function(place, index){
    console.log(places.destinations[index]);
    $("#results").append("<li id='"+index+"'>" + (places.destinations[index].location) +"</li>");
  })


  $("#results").children().click(function(){
    $("#results").children().children().remove();

    $("#"+this.id).append("<ul><li>Landmarks: " + (places.destinations[this.id].landmarks) +"</li></ul>");
    $("#"+this.id).append("<ul><li>Year Visited: " + (places.destinations[this.id].yearVisited) +"</li></ul>");
    $("#"+this.id).append("<ul><li>Notes: " + (places.destinations[this.id].notes) +"</li></ul>");
    $("#"+this.id).append("<ul><li>Reason: " + (places.destinations[this.id].reason) +"</li></ul>");

    console.log(this.id);
  });



});
