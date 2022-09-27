import React,{
  useState
} from 'react'
import { useAuth } from '../context/AuthContext'
import { 
  FixedContainer, 
  Header,
  ToggleButton,
  Icon,
  SectionForm,
  Input,
  RadioInput,
  Label
} from '../styled/sidebar-styled'

import { createSection } from '../utils/DatabaseOperations';

export default function Sidebar(props) {

  const { currentUser } = useAuth();
  const [collapse, setCollapse] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);
  
  const [name, setName] = useState('');
  const [choice, setChoice] = useState("yes");
  const [color, setColor] = useState('#24ac4a');


  function handleRadio(e){
    setChoice(e.target.value);
  }

  function handleForm() {
    if(name !== ''){
      let editable = choice === 'yes' ? true : false;
      createSection( currentUser.uid ,name, editable);
      setName("");
    }else{
      alert('You must choose!');
    }
  }


  return (
    <FixedContainer collapse={collapse} mobile={props.mobile}>
      <Header collapse={collapse} mobile={props.mobile}>
       {
        collapse || props.mobile ? <h4> {currentUser.isAnonymous ? 'Anonymous' : currentUser.email}</h4> :
        <Icon> 🔧 </Icon>
       }
      </Header>
      <ToggleButton 
        data-description="Add column"
        collapse={collapse} 
        mobile={props.mobile}
        onClick={collapse ? 
        () => setToggleForm(!toggleForm) : 
        () => {setCollapse(!collapse); setToggleForm(!toggleForm);}}
      >
        <Icon>🗃️</Icon> 
        <p>Insert Section</p> 
      </ToggleButton>
      <SectionForm 
      collapse={toggleForm} 
      mobile={toggleForm && props.mobile} 
      onSubmit={async (e) => {
        e.preventDefault();
        handleForm();
      }}>
        <Label htmlFor="name">Section Name
          <Input 
          type="text" 
          id='name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          />
        </Label>
        <Label>
          Editable
          <RadioInput
            type="radio"
            value="yes"
            checked={choice === "yes"}
            onChange={handleRadio}
          />
          Yes
          <RadioInput
            type="radio"
            value="no"
            checked={choice === "no"}
            onChange={handleRadio}
          />
          No
        </Label>

        <button type="submit">create section</button>
      </SectionForm>

      <ToggleButton 
      data-description="Menu"
      collapse={collapse} 
      mobile={props.mobile}
      onClick={() => {
        setCollapse(!collapse); 
        props.toggleNavFunc();
        setToggleForm(false)
      }}>
        {
          collapse || props.mobile ? <Icon>⬅️</Icon> : <Icon>➡️</Icon>
        }
      </ToggleButton>
    </FixedContainer>
  )
}
