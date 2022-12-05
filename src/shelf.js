

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

function listTitles(shelf) {
  var titleList = []
  for (var i = 0; i < shelf.length; i++) {
    titleList.push(shelf[i].title)
  } 
  return titleList.join(", ")
}


function searchShelf(shelf, book) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === book) {
      return true
    } 
  } 
  return false
}





module.exports = {
  shelfBook,
   unshelfBook,
  listTitles,
  searchShelf
};