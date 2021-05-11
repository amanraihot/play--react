import logo from './logo.svg';
import'./style.css';
import { render } from '@testing-library/react';
import { useState } from 'react';

const App = () => {
    
    return (
        <>
    <ContactCard
    avatar="https://via.placeholder.com/150"
    name="Jenny Han"
    email="jenny.han@notreal.com"
    age={25}
    />

  <ContactCard
  avatar="https://via.placeholder.com/150"
  name="Jason Long"
  email="jason.long@notreal.com"
  age={45}
 />

<ContactCard
  avatar="https://via.placeholder.com/150"
  name="Peter Pan"
  email="peter.pan@neverland.com"
  age={100}
/>
</>
      );
}
const ContactCard = props => {
    const[showAge,setShowAge] = useState(false);
    return (
      <div className="contact-card">
        <img src={props.avatar} alt="profile" />
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <button onClick = {()=>setShowAge(!showAge)}>
              Toggle Age
          </button>
          {showAge == true? <p>Age:{props.age}</p>:null}
        </div>
      </div>
    );
  };

export default App;