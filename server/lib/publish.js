Meteor.publish('pollFromResultId', function (resultId) {
  check(resultId, String);

  return Polls.find({ resulturl: resultId });
});

Meteor.publish('pollFromPollId', function (pollId) {
  check(pollId, String);

  return Polls.find({ url: pollId });
});
