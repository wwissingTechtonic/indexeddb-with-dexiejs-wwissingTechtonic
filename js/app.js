document.addEventListener('DOMContentLoaded', function(){
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
    //effort on the UI. Use the title as your UID (Unique identified) which you can find in the application console
    //in Chrome (storage in Firefox). 

    // 3.) From here we want to be able to add a book. Hook up the form below the table to add a 
    //book to the books store in indexedDB and auto-update the table without refreshing the page.
    //Hint: This add operation is on the front page of DexieJS. 
    
    // BONUS! 
    // Make each table row editable and update the database when the edit is complete. This will
    //take a lot of effort from the html to the js. Use the title as your UID (Unique identified)
    //which you can find in the application console
});