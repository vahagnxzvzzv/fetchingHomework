// import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Comments from '../Comments/Comments';
import Albums from '../Albums/Albums';



function RoutesPaths() {

  return (
    <div>
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/albums' element={<Albums />} />
      </Routes>
      <NavLink className='PostsLink' to={'/posts'} >Posts</NavLink>
      <NavLink className='CommentsLink' to={'/comments'} >Comments</NavLink>
      <NavLink className='AlbumsLink' to={'/albums'} >Albums</NavLink>
    </div>
  );
}

export default RoutesPaths;
