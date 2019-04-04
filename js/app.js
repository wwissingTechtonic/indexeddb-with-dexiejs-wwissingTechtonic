function onDatabaseReady() {
    populateTableUI() // DO NOT TOUCH THIS LINE until step #4

    console.log(db);
    // DexieJS docs: https://dexie.org/
}

//TODO - need to hook up the events target primary key (which is the title) with this function
//TODO - also need to mnake sure that it only deleted the targeted book

function deleteBook(event) {
    var deletedBook = db.books.delete(event);

    deletedBook.then(val => console.log(val))
    deletedBook.catch(function(rejected) {
    console.log(rejected);
      }
    )
    populateTableUI();
}
// const submitBtn = document.getElementByID('submitButton');
// submitBtn.innerText = 'Submit';
//
// submitBtn.addEventListener('click', function(){
//   addBook(allBooks[i].title);
//   });
//TODO - need to make sure that this function works correctly (test in console)
//need to make sure that this works through the ui submit button.
// function onFormSubmit(){
//   var formData = readFormData();
// }
// function readFormData(){
//   var formData = {};
//   formData['title'] = document.getElementByID('inputTitle').value;
//   formData['author'] = document.getElementByID('inputAuthor').value;
//   formData['pages'] = document.getElementByID('inputPages').value;
//   formData['synopsis'] = document.getElementByID('inputPublishDate').value;
//   formData['publishDate'] = document.getElementByID('inputPublishDate').value;
//   formData['rating'] = rating: document.getElementByID('inputRating').value;
//   return formData;
// }


function addBook(event) {
//TODO - need to hook up the events target primary key (which is the title) with this function
    // 2: YOUR CODE HERE
    //I used the add() method instead of the put method because the put() will overwrite the if there is a duplicate title in the database
    var formValues = db.books.forms.add({
      title: document.getElementByID('inputTitle').value,
      author: document.getElementByID('inputAuthor').value,
      pages: document.getElementByID('inputPages').value,
      synopsis: document.getElementByID('inputSynopsis').value,
      publishDate: document.getElementByID('inputPublishDate').value,
      rating: document.getElementByID('inputRating').value
    });

      formValues.then(val => console.log(val))
      formValues.catch(function(rejected) {
      console.log(rejected);
      })
      populateTableUI();

  }
//     let newBook = await db.books.where('title').equals(newBookTitle).toArray()
//     const row = document.createElement('tr');
//
//     for (let j = 0; j < columns.length; j++) {
//       var td = document.createElement('td');
//       var value = newBook[0][columns[j]]
//       td.innerText = value ? value : null;
//       row.append(td);
//     }
//
//     // creates a delete button with no functionality
//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'delete book';
//     //TODO - need to add an arrow function to the second parameter that uses a callback function to target the primary key of the row
//     deleteBtn.addEventListener('click', deleteBook);
//
//     row.append(deleteBtn)
//
//     tBody.append(row);
//     // Hint: Once you've added the book to your database, call populateTableUI with the added book's title
//     // TODO - Check out the Table.put() method and what it returns at: https://dexie.org/docs/Table/Table.put()
//     window.db.books.populateTableUI(key);
// }


function editBook(event) {
// TODO - need to check that this function works correctly
    // 3. YOUR CODE HERE
    var bookToUpdate = 
    var updateBook = db.books.put({
      title: document.getElementByID('inputTitle').value,
      author: document.getElementByID('inputAuthor').value,
      pages: document.getElementByID('inputPages').value,
      synopsis: document.getElementByID('inputSynopsis').value,
      publishDate: document.getElementByID('inputPublishDate').value,
      rating: document.getElementByID('inputRating').value,
    });
    updateBook.then(val => console.log(val))
    updateBook.catch(function(rejected) {
    console.log(rejected);
    })
    populateTableUI();
}


// ************ 4. (BONUS) Comment out line 67 in ../index.HTML and write your own 'populateTableUI' function in app.js ************


// Now that you’ve cloned your project lets start by testing our code. Let's start live
//server and open up our project in the browser. Open up your console and you should see
//some logs outputting book objects. These object are predefined in books.json and added to
//our database called library_database in indexedDB. We can also navigate to the
//application tab in the chrome console (storage in firefox) and take a look at the indexedDB
//storage We created this for you in indexedDB.js if you feel inclined to take a look.

// We've populated the table so the UI reflects what's currently in our local
// library_database in indexedDB.  We've logged the database above so you can see exactly
// what you're working with


// 1.) Now add functionality to remove a row  which will need remove the object from the books store in
//indexedDB database as well as the UI once the delete operation is complete. This will take some
//effort on the UI. Use the title as your UID (Unique identifier) which you can find in the application console
//in Chrome (storage in Firefox).

// 2.) From here we want to be able to add a book. Hook up the form below the table to add a
//book to the books store in indexedDB and auto-update the table without refreshing the page.
//Hint: This add operation is on the front page of DexieJS.  Both is and Table.put() can be
// used to add this book.

// 3.) Now make each table row editable and update the database when the edit is complete. This will
//take a lot of effort from the html to the js. Use the title as your UID (Unique identifier)
//which you can find in the application console
