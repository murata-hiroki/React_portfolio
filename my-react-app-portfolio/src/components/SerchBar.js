import React,{useState} from 'react';

const SerchBar = ({onSubmit})=>{
  const [term,SetTerm] = useState('');
    const onFormSubmit = (event) =>{
    event.preventDefault();
    onSubmit(term)
  };
          return(
            <div className ='ui segment'>
              <form onSubmit = {onFormSubmit} className="ui form">
            <div className="field">
              <label>image Search</label>
              <input type="text" name="Serch" placeholder="" value={term} onChange={(event)=>{
                SetTerm(event.target.value);
                }}
                />
            </div>
            </form>
            </div>
    );
};

export default SerchBar;