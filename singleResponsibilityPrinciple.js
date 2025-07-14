// ❌ Bad Example – Violates SRP:
class UserManager {
    addUser(){
        // Logic to add a user
    }

    sendWelcomeEmail(user){
        // Logic to send a welcome email
    }

    saveToDatabase(user){
        // Logic to save user data to the database
    }

}
// This is class handles user logic, email logic,and database logic. - 3 responsibilities 

// ✅ Good Example – Follows SRP:
class UserManager {
    addUser(user){
        // Logic to add a user
    }
}
class EmailService {    

      sendWelcomeEmail(user) {
    // logic to send email
  }
}
class DatabaseService {
  saveToDatabase(user) {
    // logic to save to DB
  }
}
// This separates user management, email sending, and database operations into distinct classes, each with a single responsibility.

// Usage
const userManager = new UserManager();
const emailService = new EmailService();
const databaseService = new DatabaseService();

const user = { name: "John Doe" };
userManager.addUser(user);
emailService.sendWelcomeEmail(user);
databaseService.saveToDatabase(user);