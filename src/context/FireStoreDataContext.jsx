import { createContext, useState, useEffect } from 'react';

import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  where,
  query,
} from 'firebase/firestore';

import { firestoreDB, storageDocs } from '../firebase/firebaseConfig';

import {
  ref,
  uploadBytes,
  getBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

export const FireStoreDataContext = createContext();

const FireStoreDataProvider = (props) => {


  const [items, setItems] = useState([])
console.log(items)
  const itemCollection = collection(firestoreDB, 'caza')

  
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getDocs(itemCollection)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log('No results!');
        }

        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(documents);
      })
      .catch((err) => {
        console.log('Error searching items', err);
      });

    isMounted = false;
  }, [toggle]);

  //============================= images functions ===========================//



  //============================= images functions end ===========================//

  const deleteById = async (id) => {
    const aDoc = doc(firestoreDB, 'caza', id);
    try {
      await deleteDoc(aDoc);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <FireStoreDataContext.Provider
      value={{
        items,
        deleteById,
        setToggle,
        toggle,
      }}
    >
      {props.children}
    </FireStoreDataContext.Provider>
  );
};

export default FireStoreDataProvider;
