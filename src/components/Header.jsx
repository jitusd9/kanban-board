import React from 'react'
import {  Header, Input, ThemeButton } from "../styled/app-styled";

function getLocalHeading(){
  const heading = localStorage.getItem("heading");
  if(heading) return heading;
}

export default function Heading(props) {

  let oldHeading = getLocalHeading()

  const editRef = React.useRef(null);
  const [edit, doEdit] = React.useState(false);
  const [inputTxt, setTxt] = React.useState(oldHeading ? oldHeading : "Kanban Board @jitendra");

  function editHeader(){
    doEdit(true);
  }

  function handleChange(e){
    setTxt(e.target.value);
  }

  function saveHeader(e){
    if (e.key === "Enter" && !e.shiftKey){
      localStorage.setItem('heading', inputTxt);
      doEdit(false);
    }
  }

  React.useEffect(() => {
    if(edit){
      editRef.current.focus();
      editRef.current.select();
    }
  },[edit])

  return (
      <Header>
        {
          edit ? <Input ref={editRef} type="text" value={inputTxt} onChange={handleChange} onKeyDown={saveHeader} /> : 
          <h1 title="Double click and edit" onDoubleClick={editHeader}> { inputTxt !== "" ? inputTxt : "Kanban Board @jitendra"} </h1>
        }
        <ThemeButton onClick={props.toggleTheme} >🎨</ThemeButton>
      </Header>
  )
}
