/**
 * demo_node - Main entry point
 * A simple Node.js project demonstrating basic structure and conventions
 */

/**
 * A placeholder function that performs a basic operation
 * @param {string} message - A message to process
 * @returns {string} The processed message
 */
function greetUser(message) {
  return `Hello, ${message}! Welcome to the demo_node project.`;
}

/**
 * Main function - entry point for the application
 */
function main() {
  console.log('Starting demo_node application...');
  console.log(greetUser('User'));
  console.log('Application completed successfully.');
}

// Run the main function
main();

// Export functions for use in other modules
module.exports = {
  greetUser,
  main,
};
