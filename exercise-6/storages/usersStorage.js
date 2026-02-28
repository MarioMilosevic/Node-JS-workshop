// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();

// Add user details
// Expand the User model we created to include more details. Implement the following fields and validations to your model:

// Email (required, must be formatted properly)
// Age (optional, must be a number between 18 and 120)
// Bio (optional, maximum 200 characters)
// Don’t forget to update the view to display these new fields!

// Implement searching
// What if we want to search for a specific user in a list of thousands? We’ll need a new route and view that lets clients search our list of users.

// Add a form with a GET method (in createUser.ejs or another view) which accepts a name or email (or both!)
// Create a new route /search which accepts a GET request.
// Add the search logic to your controller which searches your list for a matching user. Form data that has been sent via a GET request will not be available via req.body. You will need to use req.query instead.
// Your GET request should handle searching for the user and then render the search result.
// Display the search results in a new view: search.ejs.
