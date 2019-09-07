import React, { Component } from 'react';
import Posts from './Posts/Posts';
import styles from './Blog.module.css';
import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  

  
 

  render () {
    

    return (
      <div>
        <header className={styles.Blog}>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
