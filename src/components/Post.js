import React from 'react';

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
                this.setState({ posts: jsonData })
            })
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