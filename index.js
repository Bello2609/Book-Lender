// Book Lender Service


const BookLender =  (name) {
	const lenderName = name;
	const books = [];
	const users = [];

	const getLenderName = ()=> {
		return lenderName;
	}

	// user methods
	const getUsers = ()=> {
		console.log(users);
		return users;
	}

	const addUser = (user)=> {
		users.push(user);
		console.log("New User Added!");
		return users;
	}

	// Book methods
	const getBooks = ()=> {
		return books;
	}

	const addBook = (book)=> {
		books.push(book);
		console.log("New Book Added!");
	}

	const borrowBook = (user, book)=> {
		for (let i = 0; i < users.length; i++) {
			if (user == users[i].name) {
				for (let i = 0; i < books.length; i++) {
					if (book.toLowerCase() == books[i].toLowerCase()) {
						let bookToBeBorrowed = books.splice(i, 1);
						let borrowedBookValue =
							bookToBeBorrowed[bookToBeBorrowed.length - 1];
						return borrowedBookValue;
					}
				}
			}
		}
	}

	const retrieveBook = (user, book)=> {
		for (let i = 0; i < this.users.length; i++) {
			if (user == this.users[i].name) {
				books.push(book);
				console.log("Book returned!");
			}
		}
	}

	return {
		getLenderName: getLenderName,
		getUsers: getUsers,
		addUser: addUser,
		getBooks: getBooks,
		addBook: addBook,
		borrowBook: borrowBook,
		retrieveBook: retrieveBook,
	};
};

const bookLender1 = new BookLender("Mariam Bookshop");

bookLender1.addUser("mary");
bookLender1.addUser("john");
bookLender1.addUser("rita");
bookLender1.addUser("mark");
bookLender1.addBook("hamlet");

bookLender1.getUsers();
console.log(bookLender1.getLenderName());
console.log(bookLender1.getBooks());

// User Constructor
// function User(name) {
// 	(this.name = name), (this.books = []);
// }

// User.prototype = {
// 	borrowBook: function (book, lender) {
// 		let Users = lender.getUsers();
// 		let bookValue = lender.borrowBook(this.name, book);
// 		Users.forEach((user) => {
// 			if (Users.includes(user)) {
// 				if (bookValue !== undefined) {
// 					this.books.push(bookValue);
// 					console.log("Book borrowed!", this.books);
// 				} else {
// 					console.log("This book is unavailable.");
// 				}
// 			} else {
// 				console.log("user is not registered!");
// 			}
// 		});
// 	},

// 	returnBook: function (book, lender) {
// 		let bookIndex = -1;
// 		for (let i = 0; i < this.books.length; i++) {
// 			if (book.toLowerCase() == this.books[i].toLowerCase()) {
// 				bookIndex = this.books.indexOf(this.books[i]);
// 			}
// 		}
// 		if (bookIndex != -1) {
// 			let bookReturned = this.books.splice(bookIndex, 1);
// 			let bookReturnedValue = bookReturned[bookReturned.length - 1];
// 			lender.retrieveBook(this.name, bookReturnedValue);
// 			console.log(bookToBeReturnedValue);
// 		} else {
// 			console.log("User does not have the book!");
// 		}
// 	},
// };

// 
//Creating library
// console.log(library1.getUsers())
