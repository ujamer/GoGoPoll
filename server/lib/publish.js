Meteor.publish('poll', function (resultId) {
  check(resultId, String);
  
  return Polls.find({ resulturl: resultId });
});
