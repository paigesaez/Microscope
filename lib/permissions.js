// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;

};

//make the delete button a global permission instead
//of a helper only on the postEdit template
