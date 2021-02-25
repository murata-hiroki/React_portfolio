import React,{useState} from 'react';

import jsonplaceholder from './apis/jsonplaceholder';
import Button from './compornents/button';
import Resources from './compornents/Resources';

const App = () =>{
  const [resources,setResources] = useState([]);

  const getPosts = async () => {
    try{
      const posts = await jsonplaceholder.get ('/posts');
      setResources (posts.data);
    }catch (err){
      console.log(err);
    }
  };

    const getAlbumns = async() => {
      try{
        const albums = await jsonplaceholder.get('/albums');
        setResources(albums.data);
      }catch(err){
        console.log(err);
      }
  };

  return (
    <div className='ui container' style = {{marginTop: '30px' }}>
      <Button onClick = {getPosts} color= 'blue'   text='posts' />
      <Button onClick ={getAlbumns} color= 'red'  text='album' />
      <Resources resources = {resources}/>
    </div>
  );
};

export default App;