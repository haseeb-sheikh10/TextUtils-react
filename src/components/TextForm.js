import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };

    // const handleCapClick = () => {
        // let str = text.toString;
        // let newText = str.replace(
            // function()
            // .charAt(0).toUpperCase + text.substring(1).toLowerCase);
        // setText(newText);
    // };

    
    const [text, setText] = useState("");
    return (
    <>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        {/* <button className="btn btn-danger mx-2" onClick={handleCapClick}>Convert to Cap Case</button> */}
        <button className="btn btn-secondary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text===""?'0':text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text === ""?'Enter text above to preview it here':text}</p>
    </div>
    </>
  ); 
}