import React from 'react';
import "../css/Style.css";
import "../css/Blog.scss";

className Posts extends React.Component {
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
                <div className="blog-header">
						<div className="blog-article header-article">
							<div className="blog-big__title">Esteem</div>
							<div className="blog-menu small-title date">12.06.2021</div>
						</div>
					<div className="blog-article">
						<img src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
						<h2>Sharing The <span>Widespread</span> Acclaim About Motivation</h2>
						<div className="blog-detail">
							<span>By Richard Carnation</span>
							<span>5 Min Read</span>
						</div>
						<p>Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional</p>
						<a href="#">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-corner-down-right" viewBox="0 0 24 24">
								<path d="M15 10l5 5-5 5" />
								<path d="M4 4v7a4 4 0 004 4h12" />
							</svg>
								See More
						</a>
					</div>
				</div>
            ) )
        }
    }
    render() {
        return (
            <>
            This is a post.
            </>
        )
    }
}

export default Posts;