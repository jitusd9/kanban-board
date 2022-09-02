import React from 'react'
import Section from './Section'
import { MoveCard } from './utils';
import { Container } from '../styled/app-styled'

function getLocalData(){
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  const storedLater = JSON.parse(localStorage.getItem('later'));
  const storedDoing = JSON.parse(localStorage.getItem('doing'));
  const storedDone = JSON.parse(localStorage.getItem('done'));

  let todos = storedTodos ? storedTodos : []
  let later = storedLater ? storedLater : []
  let doing = storedDoing ? storedDoing : []
  let done = storedDone ? storedDone : []

  return {todos, later, doing, done}; 
}

function Board(){

  let initialData = getLocalData();
  const [todos, setTodos] = React.useState(initialData.todos);
  const [later, setLater] = React.useState(initialData.later);
  const [doing, setDoing] = React.useState(initialData.doing);
  const [done, setDone] = React.useState(initialData.done);

  const boardArr = [todos, doing, done, later];

  function AddTodo(todoObj){
    setTodos((old) => [...old, todoObj]);
  }

  function AddLater(inputObj) {
    setLater((old) => [...old, inputObj])
  }
  
  function DeleteTodo(id=todos.length - 1){
    let newTodo = todos.filter((todoObj,index) => {
      return index !== id ? todoObj : null
    });
    setTodos(newTodo);
  }
  

  function DeleteLater(id=later.length - 1){
    let newLater = later.filter((obj, index) => {
      return index !== id ? obj : null
    })
    setLater(newLater);
  }

  function DeleteDoing(id=doing.length - 1){
    let newTodo = doing.filter((todoObj,index) => {
      return index !== id ? todoObj : null
    });
    setDoing(newTodo);
  }

  function DeleteDone(id=done.length - 1){
    let newTodo = done.filter((todoObj,index) => {
      return index !== id ? todoObj : null
    });
    setDone(newTodo);
  }

  function changeParent(index,newlist){

    switch (index) {
      case 0:
        setTodos(newlist);
        break;
      case 1: 
        setDoing(newlist);
        break;
      case 2:
        setDone(newlist);
        break;
      case 3: 
        setLater(newlist);
    }
  }

  function handleMoveCard(parent, e){

  }

  // button controls 
  function moveToDoing(parent, e){
    let newValues = MoveCard(boardArr[parent],e.target.id);
    changeParent(parent, newValues.newList)
    setDoing((old) => [...old, newValues.cardToMove]);
  }

  function moveToDone(parent, e){
    let newValues = MoveCard(boardArr[parent],e.target.id);
    changeParent(parent, newValues.newList)
    setDone((old) => [...old, newValues.cardToMove]);
    console.log(done);
  }

  function moveToLater(parent, e){
    let newValues = MoveCard(boardArr[parent],e.target.id);
    changeParent(parent, newValues.newList)
    setLater((old) => [...old, newValues.cardToMove])
  }

  function moveToTodo(parent, e){
    let newValues = MoveCard(boardArr[parent],e.target.id);
    changeParent(parent, newValues.newList)
    setTodos((old) => [...old, newValues.cardToMove])
  }


  React.useEffect(function storeLater(){
    localStorage.setItem('later', JSON.stringify(later));
  },[later])

  React.useEffect(function storeTodo(){ 
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  React.useEffect(function storeDoing(){ 
    localStorage.setItem('doing', JSON.stringify(doing));
  },[doing])

  React.useEffect(function storeDone(){ 
    localStorage.setItem('done', JSON.stringify(done));
  },[done])



  return(
    <Container>
      <Section 
        id={0}
        title="To-Do" 
        editable hex="#9371ff" 
        addFunc={AddTodo} 
        delFunc={DeleteTodo} 
        list={todos}
        controls={[moveToDoing, moveToDone, moveToLater]}
      />
      
      <Section 
        id={1}
        title="Doing" 
        hex="#ffd400" 
        custom="doing"
        delFunc={DeleteDoing}
        list={doing}
        controls={[moveToTodo, moveToDone, moveToLater]}
      />

      <Section 
        id={2}
        title="Done 🎉" 
        hex="#18c448" 
        custom="done"
        list={done}
        delFunc={DeleteDone}
        controls={[moveToTodo, moveToDoing, moveToLater]}
      />
      
      <Section 
        id={3}
        title="Later" 
        editable 
        hex="#50626f" 
        addFunc={AddLater} 
        delFunc={DeleteLater} 
        list={later}
        custom="later"
        controls={[moveToTodo, moveToDone, moveToDoing]}
      />
    </Container>
  )
}

export default Board