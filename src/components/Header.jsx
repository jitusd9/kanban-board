import React from 'react'
import {  Header, Input } from "../styled/App-styled";

export default function Heading() {

  const [edit, doEdit] = React.useState(false);
  const [inputTxt, setTxt] = React.useState("Kanban Board @jitendra");

  function editHeader(){
    doEdit(true);
  }

  function handleChange(e){
    console.log(e.target.value);
    setTxt(e.target.value);
  }

  function saveHeader(e){
    if (e.key === "Enter" && !e.shiftKey){
      localStorage.setItem('item', JSON.stringify(items));
      doEdit(false);
    }
  }

  return (
    <Header>
    {
      edit ? <Input type="text" value={inputTxt} onChange={handleChange} onKeyDown={saveHeader} /> : 
      <h1 onDoubleClick={editHeader}> { inputTxt !== "" ? inputTxt : "Kanban Board @jitendra"} </h1>
    }
    </Header>
  )
}
