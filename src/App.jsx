import { useState, useEffect } from 'react'
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [previewExpanded, setPreviewExpanded] = useState(false);

  useEffect(() => {
    const defaultMarkdown =
      "# Welcome to my React Markdown Previewer!\n" +
      "## This is a sub-heading...\n" +
      "### And here's some other cool stuff:\n" +
      "Heres some code,\n `<div>This is code</div>`, between 2 backticks.\n" +
      "```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}  \n}\n```\n" +
      "You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~." +
      "There's also [links](https://www.google.com/), and\n> Block Quotes!\n" +
      "- And of course there are lists.\n" +
      "  - Some are bulleted.\n" +
      "    - With different indentation levels.\n" +
      "      - That look like this.\n " +
      "1. And there are numbered lists too.\n" +
      "1. Use just 1s if you want!\n " +
      "1. And last but not least, let's not forget embedded images:\n" +
      "\n\n![Markdown Logo](https://th.bing.com/th/id/OIP.bo-9Gk0DsJpyHsKnvpZa_gHaEj?rs=1&pid=ImgDetMain)";
    setText(defaultMarkdown);
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const toggleEditorExpand = () => {
    setEditorExpanded((prev) => !prev);
  };
  const togglePreviewExpand = () => {
    setPreviewExpanded((prev) => !prev);
  };

  return (
    <div id="container">
      <div id="editor-part">
        <div className="header">
          <p className="header-text">Editor</p>

          <FontAwesomeIcon
            icon={editorExpanded ? faMinimize : faMaximize}
            onClick={toggleEditorExpand}
          />
        </div>
        <textarea
          id="editor"
          value={text}
          onChange={handleChange}
          style={{ height: editorExpanded ? "100vh" : "400px" }}
        />

      </div>
      <div id="preview-header" 
        >
        <div className="header">
          <p className="header-text">Preview</p>
          <FontAwesomeIcon
            icon={previewExpanded ? faMinimize : faMaximize}
            onClick={togglePreviewExpand}
          />
        </div>
        <div
          id="preview"
          style={{ height: previewExpanded ? "auto" : "400px" }}
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        />

      </div>
    </div>
  );
}

export default App
