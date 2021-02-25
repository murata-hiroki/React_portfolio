import React from 'react';

const Resources = ({resources}) => {
  return(
    <React.Fragment>
      {resources.map((resources)=>(
        <p key = {resources.id}>{resources.title}</p>
      ))}
    </React.Fragment>
  );
};

export default Resources;