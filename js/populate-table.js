// let initialTable = true;

async function populateTableUI(newBookTitle) {
  const tBody = document.querySelector('tbody');
  const columns = ['cover', 'title', 'author', 'numberOfPages', 'synopsis', 'publishDate', 'rating'];
  tBody.innerHTML='';
  // if (initialTable) {
    let allBooks = await db.books.where('numberOfPages').aboveOrEqual(0).toArray()

    for (let i = allBooks.length - 1; i >= 0; i--) {
      const row = document.createElement('tr');


      for (let j = 0; j < columns.length; j++) {
        var td = document.createElement('td');
        var value = allBooks[i][columns[j]]
        td.innerText = value ? value : null;
        row.append(td);
      }
      const editBtn = document.createElement('button');
      editBtn.innerText = 'Update Book';

      editBtn.addEventListener('click', function(){
        editBook();
        });
      // creates a delete button with no functionality
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete Book';

      deleteBtn.addEventListener('click', function(){
        deleteBook(allBooks[i].title);
      });
      var addBookForm = document.forms['addBook'];
      addBookForm.addEventListener('submit', function(e){
        e.preventDefault();
        addBook()
      }
      row.append(deleteBtn);
      row.append(editBtn);
      tBody.append(row);

    }

    // document.getElementByID('submitButton').addEventListener('click', function(){
    //   addBook();
    // });
  // } else {
  //   let newBook = await db.books.where('title').equals(newBookTitle).toArray()
  //   const row = document.createElement('tr');
  //
  //   for (let j = 0; j < columns.length; j++) {
  //     var td = document.createElement('td');
  //     var value = newBook[0][columns[j]]
  //     td.innerText = value ? value : null;
  //     row.append(td);
  //   }
  //
  //   // creates a delete button with no functionality
  //   const deleteBtn = document.createElement('button');
  //   deleteBtn.innerText = 'delete book';
  //   //TODO - need to add an arrow function to the second parameter that uses a callback function to target the primary key of the row
  //   deleteBtn.addEventListener('click', function(){
  //     deleteBook(allBooks[i].title);
  //   });
  //
  //   row.append(deleteBtn)
  //
  //   tBody.append(row);
  // }
  //
  // initialTable = false;
}
