
module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};

function shelfBook(object, shelf) {
   return shelf.unshift(object)
}  
