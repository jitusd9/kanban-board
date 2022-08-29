import React from "react"
import Board from "./components/Board"
import { Main, Container } from "./styled/App-styled";
import Heading from "./components/Header";

function App() {

  let initialArr = []
  const storedItems = JSON.parse(localStorage.getItem('items'));

  if(storedItems) {
    initialArr = storedItems;
  }

  const [items, setItemArr] = React.useState(initialArr);

  function AddItem(txtObj){
    setItemArr((old) => [...old, txtObj]);
  }
  
  function DeleteItem(id=items.length - 1){

    let newItems = items.filter((itemObj,index) => {
      return index !== id ? itemObj : null
    });
    
    setItemArr(newItems);

  }
  
  React.useEffect(() => { 

    localStorage.setItem('items', JSON.stringify(items));

  },[items])


  

  return (
    <Main>
      <Heading />
      <Container>
        <Board title="To-Do" editable hex="#9371ff" addFunc={AddItem} delFunc={DeleteItem} list={items}/>
        <Board title="Doing" hex="#ffd400" />
        <Board title="Done 🎉" hex="#18c448" />
        <Board title="Later" editable hex="#50626f" />
      </Container>
    </Main>
  )
}

export default App
