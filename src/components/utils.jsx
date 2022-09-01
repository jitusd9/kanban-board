import { Button } from "../styled/card-styled";

function ControlButton(props){

  return(
    <Button title="move to" id={props.cardId} onClick={(e) => {props.func(props.board,e)}}>
      {props.txt}
    </Button>
  )
}


function MoveCard(list, index){
  console.log('🏋️ Doing...', list[index])
  let cardToMove;
  let newList = list.filter((todoObj,idx) => {
    if(idx == index){
      cardToMove = todoObj
    }
    return idx != index ? todoObj : null
  });

  return {newList, cardToMove};

}

export { MoveCard, ControlButton }