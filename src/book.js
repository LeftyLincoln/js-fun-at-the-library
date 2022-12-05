function createTitle(title) {
  return  `The ${title}`
}



function buildMainCharacter(name, age, pronouns) {
    return {
      name: name,
      age: age,
      pronouns: pronouns
    }
}

function saveReview(newReview, existingReview) {
 if (existingReview.indexOf(newReview) === -1) {
  existingReview.push(newReview)
 }
}

function calculatePageCount(title) {
  return title.length * 20
}

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
    
  }
}

function editBook(object) {
  return object.pageCount *= .75
}

module.exports = {
  createTitle,
   buildMainCharacter,
   saveReview,
   calculatePageCount,
    writeBook,
   editBook
}