import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import styled from 'styled-components'
import DOMPurify from 'dompurify';
import './Note.css';
import NoteNav from './NoteNav.js'

const EditorCont = styled.div`
  margin-top: .5em;
`

const NoteCont = styled.div`
`

function Note(){
  const  [convertedContent, setConvertedContent] = useState(null);
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  )
  
  function handleEditorChange(state){
    setEditorState(state);
    convertContentToHTML();
  }

  function convertContentToHTML() {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  
  // function createMarkup(html) {
  //   return  {
  //     __html: DOMPurify.sanitize(html)
  //   }
  // }
  
  return (
    <NoteCont>
      <NoteNav />
      <EditorCont>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}
      </EditorCont>
    </NoteCont>
  )
}
    



  
export default Note