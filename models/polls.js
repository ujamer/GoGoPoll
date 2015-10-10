var PollSchema = new SimpleSchema({
  question: {
    type: String,
    max: 255,
    denyUpdate: true
  },
  url: {
    type: String,
    autoValue: function autoValue() {
      if (!this.isSet && this.isInsert) {
        return Random.id(8);
      }
    },
    regEx: /^[a-zA-Z0-9]+$/,
    max: 50,
    index: true,
    unique: true,
    denyUpdate: true
  }
});

// var PollSchema = new SimpleSchema({
//   title: {
//     type: String,
//     max: 255,
//     denyUpdate: true
//   },
//   url: {
//     type: String,
//     autoValue: function autoValue() {
//       if (!this.isSet && this.isInsert) {
//         return Random.id();
//       }
//     },
//     regEx: /^[a-zA-Z0-9]+$/,
//     max: 50,
//     index: true,
//     unique: true,
//     denyUpdate: true
//   },
//   // resulturl: {
//   //   type: String,
//   //   autoValue: function autoValue() {
//   //     if (this.isInsert) {
//   //       return Random.id();
//   //     }
//   //   },
//   //   regEx: SimpleSchema.RegEx.Id,
//   //   index: true,
//   //   unique: true,
//   //   denyUpdate: true,
//   //   autoform: {
//   //     omit: true
//   //   }
//   // },
//   duration: {
//     type: Number,
//     min: 3,
//     optional: true,
//     denyUpdate: true
//   },
//   // choices: {
//   //   type: [Object],
//   //   minCount: 2
//   // },
//   // 'choices.$.text': {
//   //   type: String,
//   //   max: 255,
//   //   denyUpdate: true
//   // },
//   // 'choices.$.count': {
//   //   type: Number,
//   //   // autoValue: function() {
//   //   //   if (this.isUpdate) {
//   //   //     return 0;
//   //   //   }
//   //   // },
//   //   denyInsert: true,
//   //   optional: true,
//   //   defaultValue: 0,
//   //   min: 0,
//   //   autoform: {
//   //     omit: true
//   //   }
//   // },
//   allowShowResult: {
//     type: Boolean,
//     defaultValue: true,
//     denyUpdate: true
//   },
//   allowAnonymousVote: {
//     type: Boolean,
//     defaultValue: true,
//     denyUpdate: true
//   },
//   createdOn: {
//     type: Date,
//     defaultValue: new Date(),
//     denyUpdate: true,
//     autoform: {
//       omit: true
//     }
//   },
//   lastAccessedOn: {
//     type: Date,
//     autoValue: function autoValue() {
//       if (this.isUpdate) {
//         return new Date();
//       }
//     },
//     denyInsert: true,
//     optional: true,
//     autoform: {
//       omit: true
//     }
//   }
// });

Polls = new Mongo.Collection('polls');
Polls.attachSchema(PollSchema);
