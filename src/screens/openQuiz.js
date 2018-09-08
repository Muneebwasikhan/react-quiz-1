import React, { Component } from 'react';
class OpenQuiz extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        const { openQuizPage,back } = this.props;
        console.log(openQuizPage);
        return ( 
            <div>
                <h1>{openQuizPage.name}</h1><h2>{openQuizPage.questions} Questions</h2><h3>{openQuizPage.time}</h3><h1>------</h1>
                <hr />
                <button onClick={back}>Back to list</button>
            </div>
            
         );
    }
}
 
export default OpenQuiz;