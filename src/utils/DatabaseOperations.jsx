import {
  doc,
  getDocs, 
  getDoc, 
  collection, 
  setDoc, 
  addDoc, 
  Timestamp,
  deleteDoc,
  query,
  orderBy,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  deleteField,
  where
} from "firebase/firestore";

import { db, auth } from "./init-firebase";

export const userCollectionRef = collection(db, 'users');


export async function getUserData(uid){
  const userDocRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userDocRef);
  if(userSnap.exists()){
    return userSnap.data();
  }else{
    return 'NOOOOO!'
  }
}

export async function insertCard(uid, content, order, section) {

  const userDocRef = doc(db, 'users', uid);
  const docSnap = await getDoc(userDocRef);

  if(docSnap.exists()){
    const cardRef = collection(userDocRef, 'cards');
    await addDoc(cardRef, {
      content: content,
      order: order,
      section_id : section,
      created: Timestamp.fromDate(new Date())
    }).then(res => {

    }).catch(err => console.log(err))
  }

}

export async function updateCard(uid, card_id, section_id){
  const userDocRef = doc(db, 'users', uid);
  const docRef = doc(userDocRef, 'cards', card_id);
  await updateDoc(docRef, { section_id })
  .then(res => {
    console.log('updating Card SUCCESS')
  }).catch(err => console.log(err));
}

export function deleteCard(uid, id){
  const userDocRef = doc(db, 'users', uid);
  const docRef = doc(userDocRef, 'cards', id);
  deleteDoc(docRef)
    .then(() => console.log('Document Deleted!'))
    .catch(error => console.log(error.message))
}

export async function getCards(uid){
    let datatosend = [];
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef)

    if(docSnap.exists()){
      const cardRef = collection(userDocRef, 'cards');
      // const q = query(cardRef, orderBy("created", "asc"))
      const cardSnap = await getDocs(cardRef);
      cardSnap.forEach(doc => {
        datatosend.push({
          id: doc.id,
          data: doc.data()
        })
      })
      return datatosend;
    }else{
      console.log('No such Document!')
    }
}

export async function addUserToDatabase(uid) {
  const userDocRef = doc(db, 'users', uid);
  await setDoc(userDocRef, { });
}


export async function createSection(uid, name, editable, id){
  
  const colorArray = ['#24ac4a',
   '#8c6824',
    '#6c24ac', '#38b1c1']
  
  const userDocRef = doc(db, 'users', uid);
  let color = Math.floor(Math.random() * colorArray.length);
  let sectionId = new Date().getTime();
  let objToUpdate = `sections.${sectionId}`
  await updateDoc(userDocRef, {
      [objToUpdate] : {
          section_name: name,
          editable : editable,
          color: colorArray[color],
          section_id : sectionId
        }
  }).then(res => {
    console.log('SUCCESS:', res)
  }).catch(err => console.log(err));
}

async function deleteAllCards(uid, section_id){
  const userDocRef = doc(db, 'users', uid);
  const cardRef = collection(userDocRef, 'cards');
  const q = query(cardRef, where("section_id", "==", section_id));
  const querySanpshot = await getDocs(q)
  querySanpshot.forEach(doc => {
    deleteCard(uid, doc.id);
  })
}

export async function deleteSection(uid, id){
  const userDocRef = doc(db, 'users', uid);
  deleteAllCards(uid, id);

  let objToDelete = `sections.${id}`;

  await updateDoc(userDocRef, {
    [objToDelete]: deleteField()
  }).then(res => {
    console.log('Deleted:', res)
  })
  .catch(err => console.log('delete errors:', err))
}

export async function moveCard(uid, sectionTo, card_id){
  
  updateCard(uid, card_id, sectionTo);

}