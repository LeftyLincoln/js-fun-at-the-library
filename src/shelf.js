

function shelfBook(object, shelf) {
  if (shelf.length < 3)
  shelf.unshift(object)
 } 
 

function unshelfBook(object, shelf) {
  for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === object) {
    shelf.splice(i, 1)
  }
}
}

function listTitles() {
  
}






module.exports = {
  shelfBook,
   unshelfBook,
  listTitles,
  // searchShelf
};