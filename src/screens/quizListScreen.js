import React, { Component } from 'react';
class QuizListScreen extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        const { quizList,listDisa } = this.props;
        console.log(listDisa);
        return ( <div>
            {quizList.map((res,index) => {
                console.log(res);
                  return (<div><h1>{res.name}</h1><button onClick={() => listDisa(index)}>Open</button><hr /></div>);
                //   
                // quizList={quizList} index={index}
            })}
            </div>
         );
    }
}
 
export default QuizListScreen;