interface User {
  id: string; // Replace with a function to generate unique IDs
  name: string;
}

const users: User[] = [
  // Replace with fetched or generated user data
  { id: "user1", name: "John Doe" },
  { id: "user2", name: "Jane Doe" },
  { id: "user3", name: "Alice Smith" },
  { id: "user4", name: "Bob Johnson" },
  { id: "user5", name: "Sarah Williams" },
];

export {
    users,
}