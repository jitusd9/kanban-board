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

export default function Sidebar() {

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
    <FixedContainer collapse={collapse}>
      <Header collapse={collapse}>
        <Icon> 🔧 </Icon>
        <h4> {currentUser.email}</h4>
      </Header>
      <ToggleButton 
        data-description="Add column"
        collapse={collapse} 
        onClick={collapse ? 
        () => setToggleForm(!toggleForm) : 
        () => {setCollapse(!collapse); setToggleForm(!toggleForm);}}
      >
        <Icon>🗃️</Icon> 
        <p>Insert Section</p> 
      </ToggleButton>
      <SectionForm collapse={toggleForm}  onSubmit={async (e) => {
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
      onClick={() => {setCollapse(!collapse); setToggleForm(false)}}>
        {
          collapse ? <Icon>⬅️</Icon> : <Icon>➡️</Icon>
        }
      </ToggleButton>
    </FixedContainer>
  )
}
