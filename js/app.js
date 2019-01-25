async function onDatabaseReady() {

    let allBooks = await db.books.where('numberOfPages').aboveOrEqual(0).toArray();
    // async function refreshBookshelf() {
    //     allBooks = await db.books.where('numberOfPages').aboveOrEqual(0).toArray();
    // }

    const tBody = document.querySelector('tbody');
    const columns = ['cover', 'title', 'author', 'numberOfPages', 'synopsis', 'publishDate', 'rating'];

    // create a row for each book
    for (let i = 0; i < allBooks.length; i++) {
        const row = document.createElement('tr');

        // create a cell for each value
        for (let j = 0; j < columns.length; j++) {
            var td = document.createElement('td');
            var value = allBooks[i][columns[j]]
            td.innerText = value ? value : null;
            row.append(td);
        }

        // add delete button for each row
        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteBook);
        deleteBtn.setAttribute('data-key', allBooks[i].title)
        deleteBtn.innerText = 'delete book';
        row.append(deleteBtn)

        tBody.append(row);
    }


    function deleteBook(e) {
        const { key } = e.target.dataset;

        // NOT WORKING ATM
        console.log(key)
        db.books.delete(key)
            .then((val) => console.log(val))
            .catch(() => console.log('unable to delete book'));
        // refreshBookshelf()


        // node to remove from DOM
        console.log(e.target.parentNode)
    }


    function handleChange(e) {
        const { name, value } = e.target;
    }
    function addBook() {

        // await db.friends.add({
        //     name: 'Camilla',
        //     age: 25,
        //     street: 'East 13:th Street',
        //     picture: await getBlob('camilla.png')
        // });
    }
    //Your code goes here!

    // Now that you’ve cloned your project lets start by testing our code. Let's start live 
    //server and open up our project in the browser. Open up your console and you should see 
    //some logs outputting book objects. These object are predefined in books.json and added to
    //our database called library_database in indexedDB. We can also navigate to the 
    //application tab in the chrome console (storage in firefox) and take a look at the indexedDB 
    //storage We created this for you in indexedDB.js if you feel inclined to take a look. 

    // 1.) Now we want to retrieve all of those books from the database, again called
    //“library_database” and display each object as a row in the table with each key as its own column.
    //The columns are already labeled. Once you get the table to populate, move onto the section. 
    //Hint: this should be a query operation. See front page of DexieJS docs.

    // 2.) Next add functionality to remove a row  which will need remove the object from the books store in 
    //indexedDB database as well as the UI once the delete operation is complete. This will take some 
    //effort on the UI. Use the title as your UID (Unique identifier) which you can find in the application console
    //in Chrome (storage in Firefox). 

    // 3.) From here we want to be able to add a book. Hook up the form below the table to add a 
    //book to the books store in indexedDB and auto-update the table without refreshing the page.
    //Hint: This add operation is on the front page of DexieJS. 

    // BONUS! 
    // Make each table row editable and update the database when the edit is complete. This will
    //take a lot of effort from the html to the js. Use the title as your UID (Unique identified)
    //which you can find in the application console   
}


// docs: https://dexie.org/
// repo: https://github.com/kBrothis/indexedDB-assignement