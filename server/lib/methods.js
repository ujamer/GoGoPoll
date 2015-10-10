Meteor.methods({
  createPoll: function(pollData) {
    return Polls.insert(pollData);
  }
});
