import { useState,useEffect } from 'react';
import {db} from '../firebase/config'
import { collection,query,orderBy, onSnapshot, where } from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null)=>{

  const [documents,setDocuments] = useState(null)
  const [errors,setErrors] = useState(null)
  const [loading,setLoading] = useState(null)

  const [cancelled,setCancelled] = useState(false)

  
  useEffect(()=>{
    async function loadingData (){
      if(cancelled) return

      setLoading(true)

      const collectionRef = await collection(db, docCollection)

      try {
        let q 

        q = await query(collectionRef, orderBy('createdAt', 'desc'))

        await onSnapshot(q, (querySnapshot)=> {

          setDocuments(
            querySnapshot.docs.map(doc=>({
              id: doc.id,
              ...doc.data()
            }))
          )

        })

        setLoading(false)

      } catch (error) {
        console.log(error)
        setErrors(error.message)
        setLoading(false)
      }
    }

    loadingData()
  },[docCollection, search, uid, cancelled])


  useEffect(()=>{
    return ()=> setCancelled(true)
  },[])


  return {documents,loading,errors}
}