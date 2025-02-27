import { db } from '@/utils/db'
import React from 'react'
import EditorBlock from './_components/editor-block'

const SingleDocumentPage = async ({params}) => {
    const getDocument = await db.document.findUnique({
        where:{
            id: params.documentId
        }
    })
  return (
    
    <div><EditorBlock/></div>
  )
}

export default SingleDocumentPage