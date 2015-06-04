// Fixture data
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

// create two users
var tomId = Meteor.users.insert({
  profile: { name: 'Tom Cat'}
});
var tom = Meteor.users.findOne(tomId);
var jerryId = Meteor.users.insert({
  profile: { name: 'Jerry'}
});
var jerry = Meteor.users.findOne(jerryId);

var telescopeId = Posts.insert({
  title: 'Introducing Telescope',
  userId: 'jerry._id',
  author: jerry.profile.name,
  url: 'http://google.com',
  submitted: new Date(now - 7 * 3600 * 1000)
});

Comments.insert({
  postId: telescopeId,
  userId: tom._id,
  author: tom.profile.name,
  submitted: new Date(now - 5 * 3600 * 1000),
  body: 'Interesting project...'
});

Posts.insert({
title: 'Meteor',
userId: tom._id,
author: tom.profile.name,
url: 'http://meteor.com',
submitted: new Date(now - 10 * 3600 * 1000),
commentsCount: 0
});

Posts.insert({
title: 'The Meteor Book',
userId: tom._id,
author: tom.profile.name,
url: 'http://themeteorbook.com',
submitted: new Date(now - 12 * 3600 * 1000),
commentsCount: 0
});

}






