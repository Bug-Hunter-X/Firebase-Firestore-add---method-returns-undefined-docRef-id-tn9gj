const db = getFirestore();

// ... other code ...

db.collection('myCollection').add({ field: 'value' })
  .then(docRef => {
    if(docRef.id) {
      console.log('Document written with ID: ', docRef.id);
    } else {
      console.error('docRef.id is undefined. Check your Firebase setup and rules.');
    }
  })
  .catch(error => {
    console.error('Error adding document: ', error);
  });