import React from 'react';
import "../css/Style.scss";
import "../css/Blog.scss";

class Posts extends React.Component {
    // constructor initializes state
    constructor( props ) {
        super( props );

        this.state = {
            posts:[],
            loading: true
        }
    }
    // get json data
    componentDidMount() {
        fetch( 'https://jsonplaceholder.typicode.com/posts')
            .then( response => response.json() )
            .then( json => console.log(json))
            .then( jsonData => {
                this.setState({ posts: jsonData, loading: false })
            })
    }

    renderPostItems() {
        const postData = this.state.posts;
        // check that we have any posts
        if ( postData.length ) {
            // if have posts, 
            return postData.map( post => (
                <article className="post-card post tag-navigation tag-scroll-up tag-bootstrap tag-jquery tag-css">
                    <a className="post-card-image-link" href="/navigation-on-scroll/">
                        <div className="post-card-image" style={{ backgroundImage: "url(https://storage.googleapis.com/kolosekblog/2018/01/navigation_scroll.png)"}}></div>
                    </a>
                        <div className="post-card-content">
                            <a className="post-card-content-link" href="/navigation-on-scroll/">
                                <header className="post-card-header">
                                    <span className="post-card-tags">tags go here</span>
                                    <h3 className="post-card-title">{post.title}</h3>
                                </header>
                                <section className="post-card-excerpt">
                                    <p>{post.body}</p>
                                </section>
                            </a>
                            <footer className="post-card-meta">
                                <img className="author-profile-image" src="https://storage.googleapis.com/kolosekblog/2018/02/tatjana.jpg" alt="Tatjana B."/>
                                <span className="post-card-author">{post.id}</span>
                            </footer>
                        </div>
                </article>
            ) )
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Posts;