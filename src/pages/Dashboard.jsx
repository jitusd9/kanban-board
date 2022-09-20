import React, {useEffect, useState} from 'react'
import { Main } from '../styled/app-styled'
import Loader from '../components/Loader'
import Heading from '../components/Header'
import Board from '../components/Board'
import { getUserData, getCards } from '../utils/DatabaseOperations'
import { useAuth } from '../context/AuthContext'
import { Container } from '../styled/app-styled'
import Section from '../components/Section'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../utils/init-firebase'
import Sidebar from '../components/Sidebar'


export default function Dashboard(props) {

  const { currentUser } = useAuth();
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [message, setMessage] = useState(null);

  async function userDetails(uid) {
    const userData = await getUserData(uid);

    let sectionArray = [];
    for (const key in userData.sections) {
      if (Object.hasOwnProperty.call(userData.sections, key)) {
        const element = userData.sections[key];
        sectionArray.push(element)
      }
    }
    setSections(sectionArray);
    sectionArray.length === 0 ? setMessage('Nothing to show') : setMessage(null);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    if(currentUser !== null){
      userDetails(currentUser.uid)
      .then(res => {})
      .catch(err => {
        console.log(err)
        setMessage(err.message);
        setLoading(false);
      })
    }
  },[])

  useEffect(() => {

    const userRef = doc(db, 'users', currentUser.uid);

    const unsubscribe = onSnapshot(userRef, doc => {
     if(doc.exists()){
      let sectionArray = [];
      let sectionsObj = doc.data().sections
      for (const key in sectionsObj) {
        if (Object.hasOwnProperty.call(sectionsObj, key)) {
          const element = sectionsObj[key];
          sectionArray.push(element)
        }
      }
      sectionArray.sort((a,b) => a.section_id - b.section_id)
      sectionArray.length === 0 ? setMessage('Nothing to show') : setMessage(null);
      setSections(sectionArray);
      }
    })

    return () => {
      unsubscribe();
    }

  },[])
  
  
  return (
     <>
      <Sidebar />
      <Main> 
      {
        loading ? <Loader /> : sections.length === 0 ? <p>{message}</p> :
        <Container>
          {
            sections.map((section,index) => {

              return(
                <Section 
                  key={section.section_id}
                  id={section.section_id}
                  idx={index}
                  title={section.section_name}
                  editable={section.editable}
                  bg={section.color}
                  options={sections}
                />
              )
            }
            )
          }
        </Container>
      }
        
      </Main>
     </>
  )
}
