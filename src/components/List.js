import React, {Component} from 'react';

class List extends Component {
    constructor(){
        super();

        this.state = {
            movies: []
        }
    }

    render(){
        return(
            <div>List Component</div>
        )
    }
}

export default List


// import React, { Component } from 'react';

// class List extends Component {
//     constructor(){
//         super();
        
//         this.state = {
//             movies: []
//         }
//     }

//     render(){
//         return (
//             <div>
//                 List Component
//             </div>
//         )
//     }

// }

// export default List