import { useState,useEffect } from 'react';
import {db} from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore';

export const useFetchDocument = (docCollection,id)=>{

  const [document,setDocument] = useState(null)
  const [errors,setErrors] = useState(null)
  const [loading,setLoading] = useState(null)

  const [cancelled,setCancelled] = useState(false)

  
  useEffect(()=>{
    async function loadDoc (){
      if(cancelled) return

      setLoading(true)

      try {
        const docRef = await doc(db,docCollection,id) 
        const docSnap = await getDoc(docRef)

        setDocument(docSnap.data())

        setLoading(false)
      } catch (error) {
        console.log(error)
        setErrors(error.message)
        setLoading(false)
      }

    }

    loadDoc()
  },[docCollection, cancelled, id])


  useEffect(()=>{
    return ()=> setCancelled(true)
  },[])


  return {document,loading,errors}
}