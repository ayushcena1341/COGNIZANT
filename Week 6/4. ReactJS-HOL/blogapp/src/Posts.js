import React, { Component } from 'react'; // ✅ Required!
import Post from './Post';                // ✅ Post class

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error("Fetch failed");
        return response.json();
      })
      .then(data => {
        const postList = data.slice(0, 10).map(
          item => new Post(item.id, item.title, item.body)
        );
        this.setState({ posts: postList });
      })
      .catch(error => {
        alert("Error while fetching posts: " + error.message);
        console.error("Fetch error:", error);
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("A rendering error occurred: " + error.message);
    console.error("Render error:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <p style={{ color: 'red' }}>Something went wrong.</p>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts; // ✅ Export this to use in App.js
