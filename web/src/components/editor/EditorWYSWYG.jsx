import { useState } from "react";
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { classList } from "../../utils/PostClasses";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from 'draft-js-export-html';

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
    const { options = optionsDefault, handlerChange, value, name, alto = 36 } = props;

    const contentBlocks = convertFromHTML(value);
    const contentState = ContentState.createFromBlockArray(contentBlocks);

    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(contentState));

    const blockStyleFn = (contentBlock) => {
        const classNames = classList[contentBlock.getType()] ? classList[contentBlock.getType()].class : undefined;
        if ( classNames ) return classNames;

        return '';
    };

    const onChange = (event) => {
        setEditorState(event)
        const html = stateToHTML(editorState.getCurrentContent());
        handlerChange({
            target: {
                name: name,
                value: html,
            }
        })
    }


    return (
        <>
            <Editor 
                editorState={editorState}
                onEditorStateChange={onChange}
                blockStyleFn={blockStyleFn}
                wrapperClassName=""
                editorClassName={`border border-slate-200 px-2 mt-1 min-h-${alto}`}
                toolbarClassName="border border-slate-400 bg-slate-800"
                toolbar={options}
                />  
        </>
    )
}

export default EditorWYSWYG;