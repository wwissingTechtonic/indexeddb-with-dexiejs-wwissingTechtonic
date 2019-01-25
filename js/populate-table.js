async function populateTableUI() {
  console.log('hit')
  let allBooks = await db.books.where('numberOfPages').aboveOrEqual(0).toArray()
  const tBody = document.querySelector('tbody');
  const columns = ['cover', 'title', 'author', 'numberOfPages', 'synopsis', 'publishDate', 'rating'];

  for (let i = 0; i < allBooks.length; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < columns.length; j++) {
      var td = document.createElement('td');
      var value = allBooks[i][columns[j]]
      td.innerText = value ? value : null;
      row.append(td);
    }

    // creates a delete button with no functionality
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete book';
    row.append(deleteBtn)

    tBody.append(row);``
  }
}