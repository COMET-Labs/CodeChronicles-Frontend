import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-iplastic";
import "ace-builds/src-noconflict/ext-language_tools"

function onChange(newValue) {
    console.log("change", newValue);
  }
  

function CodeEditor({language, fontSize=20, theme="Dark"}) {
    return (
        <AceEditor
            mode={language}
            theme={theme==="Dark"?"monokai":"iplastic"}
            onChange={onChange}
            name="editor"
            placeholder="Write Your Code Here"
            height="500px"
            width="900px"
            fontSize={fontSize}
            editorProps={{ $blockScrolling: true }}
            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true
            }}
        />
    );
}

export default CodeEditor;





