import { useState } from "react";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { classList } from "../../utils/PostClasses";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const optionsDefault = {
    options: ['inline', 'blockType', 'list', 'history'],
    inline: {
      options: ['bold', 'italic', 'underline'],
    },
    blockType: {
      options: ['Normal', 'H2', 'H3', 'H4', 'H5', 'H6'],
    },
    list: {
      options: ['unordered', 'ordered'],
    },
    
    history: {
      options: ['undo', 'redo'],
    },
}

const EditorWYSWYG = (props) => {
    const { options = optionsDefault } = props;
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const blockStyleFn = (contentBlock) => {
        const classNames = classList[contentBlock.getType()];
        if ( classNames ) return classNames;

        return '';
    };

    return (
        <>
            <Editor 
                editorState={editorState}
                onEditorStateChange={setEditorState}
                blockStyleFn={blockStyleFn}
                wrapperClassName=""
                editorClassName="border border-slate-200 px-2 py-1 min-h-72"
                toolbarClassName="border border-slate-400 bg-slate-800"
                toolbar={options}
                />  
        </>
    )
}

export default EditorWYSWYG;