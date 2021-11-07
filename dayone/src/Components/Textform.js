import React from 'react'
import { useState } from 'react'
const Textform = (props) => {






    const [text, setText] = useState('');



    const handleUpclick = (e) => {
        // input.value
        setText(e.target.value)
    }


    const handleOnChange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const convertLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const removespace = () => {
        // let newText = text.trim();
        // setText(newText);
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
    }
   const copyText = () =>{

        var copyText = document.getElementById("input");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Text Copied !");
    }
    const clearall = () =>{

        var texvalue =text;
        texvalue='';
        setText(texvalue);
    }

    return (
        <>

            <form style={props.mystyle}>

                <div className="m-5" >
                    <label htmlFor="exampleInputPassword1" className="form-label">TextChanger </label>
                    <textarea className="form-control purple-border" id="input" rows="5" onChange={handleUpclick} value={text} />
                    <b className=" btn btn-outline-primary btn-sm " onClick={copyText} >CopyText</b>

                </div>
                <div className="m-5" >
                    <b className="btn btn-primary m-1" onClick={handleOnChange} >UpperCase</b>
                    <b className="btn btn-primary m-1  " onClick={convertLowercase} >LowerCase</b>
                    <b className="btn btn-primary m-1" onClick={removespace} >CutsSpaces</b>
                    <b className="btn btn-primary m-1" onClick={clearall} >Clear All</b>

                </div>
                <div className="m-5" >
                    <label htmlFor="exampleInputPassword1" className="form-label">Text Summary </label>
                    <p>Number Of letter - {text.length}</p>
                    <p>Number Of Word - {text.split(" ").length}</p>


                </div>
                <div className="m-5" >
                <label htmlFor="exampleInputPassword1" className="form-label">Preview -</label><br/>
                   <p >{text}</p>


                </div>
            </form>


        </>
    )
}

export default Textform
