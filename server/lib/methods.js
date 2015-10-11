Meteor.methods({
  createPoll: function(pollData) {
    var resulturl = Random.id(8);
    Polls.insert(_.extend(pollData, { resulturl }));

    return resulturl;
  },
  getPoll: function(resulturl) {
    return Polls.find({ resulturl });
  }
});
