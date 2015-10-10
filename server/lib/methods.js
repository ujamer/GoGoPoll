Meteor.methods({
  createPoll: function(pollData) {
    check(pollData, Polls.simpleSchema());
    return Polls.insert(pollData);
  }
});
