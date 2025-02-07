# Firebase Firestore add() method returns undefined docRef.id

This repository demonstrates a bug in Firebase Firestore where the `add()` method sometimes returns an undefined `docRef.id`, causing errors in subsequent code. 

The `bug.js` file contains the problematic code snippet. The `bugSolution.js` file provides a solution to this issue. 

**Steps to Reproduce:**

1.  Set up a Firebase project and initialize Firestore.
2.  Run `bug.js`.  Observe the behavior where `docRef.id` might sometimes be undefined. 

**Solution:** 
The solution provided in `bugSolution.js` uses the `then()` method to properly capture the returned document reference and handle potential errors.