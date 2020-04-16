import React, { Component } from "react";
import axios from "axios";
import Detail from './Detail';

class Home extends Component {

    state = {
        posts : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts : response.data.slice(0,15)
            })
        })
        .catch(error => {
            console.log(error);
        })
    }


    clickItem(id) {
        const postId = id;
        return postId;
    }
  render() {
      const { posts } = this.state;
      const postList = posts.length ? (
          posts.map(post => {
              return (
                  <div key={post.id} style={{border: '1px solid black', padding : '5px', margin: '5px'}}>
                    <h3 className="title" onClick={() => this.clickItem(post.id)}>{post.title}</h3>
                    <div className="body">{post.body}</div>
                  </div>
              )
          })
      ) : (
          <h3>Hiçbir bilgi yok.</h3>
      )
      console.log(posts);
    return (
    <div style={{width: '75%', margin: '0 auto'}}>
       {postList}
       <Detail clickItem={this.clickItem}></Detail>
    </div>
    )
  }
}

export default Home;
