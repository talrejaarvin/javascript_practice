const data = {
  libraryName: "Central Library",
  address: {
    street: "123 Library Lane",
    city: "Booktown",
    state: "Readsylvania",
    zip: "12345",
  },
  departments: [
    {
      name: "Circulation",
      manager: {
        firstName: "Emily",
        lastName: "Reader",
        email: "emily.reader@library.com",
      },
      contactNumber: "123-456-7890",
    },
    {
      name: "Reference",
      manager: {
        firstName: "John",
        lastName: "Dewey",
        email: "john.dewey@library.com",
      },
      contactNumber: "123-456-7891",
    },
    {
      name: "Children's Literature",
      manager: {
        firstName: "Clara",
        lastName: "Bell",
        email: "clara.bell@library.com",
      },
      contactNumber: "123-456-7892",
    },
    {
      name: "Archives",
      manager: {
        firstName: "Alice",
        lastName: "History",
        email: "alice.history@library.com",
      },
      contactNumber: "123-456-7893",
    },
  ],
  catalog: [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "1234567890",
      availability: true,
      category: ["Fiction", "Classic"],
    },
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      isbn: "0987654321",
      availability: true,
      category: ["Non-Fiction", "Technology", "Education"],
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      isbn: "1122334455",
      availability: true,
      category: ["Fiction", "Classic"],
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      isbn: "2233445566",
      availability: true,
      category: ["Non-Fiction", "Science"],
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      isbn: "3344556677",
      availability: false,
      category: ["Fiction", "Fantasy"],
    },
  ],
  events: [
    {
      title: "Summer Reading Program",
      date: "2024-06-01",
      ageGroup: "Children",
      description: "A summer-long reading program for children ages 5-12.",
    },
    {
      title: "Author Meet and Greet",
      date: "2024-07-15",
      author: "J.K. Rowling",
      description:
        "A special event with J.K. Rowling to discuss her books and writing process.",
    },
  ],
  members: [
    {
      memberID: "001",
      name: "Sarah Booklover",
      email: "sarahb@bookmail.com",
      booksBorrowed: [
        {
          isbn: "1234567890",
          borrowDate: "2024-03-15",
          returnDate: "2024-04-15",
        },
      ],
    },
    {
      memberID: "002",
      name: "Tom Readwell",
      email: "tomr@readmail.com",
      booksBorrowed: [
        {
          isbn: "3344556677",
          borrowDate: "2024-03-20",
          returnDate: "2024-04-20",
        },
        {
          isbn: "2233445566",
          borrowDate: "2024-03-20",
          returnDate: "2024-04-20",
        },
      ],
    },
  ],
};

module.exports = { data };
