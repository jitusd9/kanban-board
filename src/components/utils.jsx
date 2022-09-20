import { Button, Dialog } from "../styled/card-styled";

function ControlButton(props){

  return(
    <Button title="move to" id={props.cardId} onClick={(e) => { props.func(props.section,e)}}>
      move to ➡️{props.children}
    </Button>
  )
}


function DialogBox(props){
  return(
    <Dialog>
      {
        props.children
      }
    </Dialog>
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

// copied from https://betterprogramming.pub/detecting-external-links-in-a-paragraph-of-text-with-javascript-automatically-3c15537f4997

function CheckUrlsInParagraph(textToCheck) {
  var expression = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w\-]*)?(\?[^\s]*)?/gi;

  var regex = new RegExp(expression);
  var match = ''; var splitText = []; var startIndex = 0;


  while ((match = regex.exec(textToCheck)) != null) {

    splitText.push({text: textToCheck.substr(startIndex, (match.index - startIndex)), type: 'text'});

    let cleanedLink = textToCheck.substr(match.index, (match[0].length));

    cleanedLink = cleanedLink.replace(/^https?:\/\//,'');
    splitText.push({text: cleanedLink, type: 'link'});

    startIndex = match.index + (match[0].length);

  }

  if(startIndex < textToCheck.length){
    splitText.push({text: textToCheck.substr(startIndex), type: 'text'});
  }

  return splitText;

}

export { MoveCard, ControlButton, DialogBox, CheckUrlsInParagraph }