import React, { useState } from "react";

const JsonFormat = () => {
    const [text, setText] = useState("");
    const [jsonData, setJsonData] = useState();
    /**
     * updateText - function fire on change event and allows you to write custom text or anything to the the first textarea
     * @param {*} event 
     */
    const updateText = (event) => {
        let updatedText = event.target.value;
        setText(updatedText);
    }
    /**
     * formatJson - function formats the JSON present in the first text area and return it to second text area.
     */
    const formatJson = () => {
        const regex = /^\s*(\{.*\}|\[.*\])\s*$/;
        if (!regex.test(text)) {
            setText("Please Enter Valid JSON Data");  // Fail the basic check
        }
        try {
            JSON.parse(text);  // Attempt to parse the JSON
            let prettyJson = JSON.stringify(JSON.parse(text),null,2);
            setJsonData(prettyJson);
        } catch (e) {
            setJsonData("Please Enter Valid JSON Data");  // If parsing fails, it's not valid JSON
        }
    }
    /**
     * clearText function reloads the text from the first text area
     */
    const clearText = () =>{
        setText("");
    }
    /**
     * copyPrettyJson function copy the formatted JSON - SO you can easily paste it anywhere
     */
    const copyPrettyJson = () => {
        let prettyJsonData = document.getElementById("copyJson");
        prettyJsonData.select();
        navigator.clipboard.writeText(prettyJsonData.value);
    }
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">JSON Formatter</h1>
                    <p className="lead">Format and Copy you JSON</p>
                </div>
            </div>
            <textarea className="text-area form-control" id="textArea" rows="8" value={text} onChange={updateText} placeholder="Enter you JSON data here..."></textarea>
            <button type="button" className="btn btn-primary my-2" onClick={formatJson}>
                Format JSON
            </button>
            <button type="button" className="btn btn-warning my-2 mx-5" onClick={clearText}>
                Clear textarea
            </button>
            <div className="my-5">
                <textarea className="text-area form-control" id="copyJson" rows="8" value={jsonData}></textarea>
                <button type="button" className="btn btn-success my-2" onClick={copyPrettyJson}>
                    Copy Formatted JSON
                </button>
            </div>
        </div>
    )
}

export default JsonFormat;