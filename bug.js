const db = getFirestore();

// ... other code ...

db.collection('myCollection').add({ field: 'value' })
  .then(() => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(error => {
    console.error('Error adding document: ', error);
  });