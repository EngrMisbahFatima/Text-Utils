import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        const newText = text.toLocaleLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        const newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

   return (
    <>
    <div className='px-5'>
        <div className="mt-5 pt-2" >
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={props.themeStyle}></textarea>
            </div>
            <button className="btn btn-primary mx-2" disabled="text.length===0" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" disabled="text.length===0" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" disabled="text.length===0" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="mt-5">
            <h4>Text Summary</h4>
            <p className='mb-0'>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{(0.0042 * text.split(/\s+/).filter((element) => {return element.length!==0}).length)} read time.</p>
        </div>
        <div>
            <h3>{text.length > 0 ? 'Preview': ''}</h3>
            <p>{text.length > 0 ? text: ''}</p>
        </div>
    </div>
    </>
    )
}