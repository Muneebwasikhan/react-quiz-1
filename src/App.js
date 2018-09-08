import React, { Component } from 'react';
import NameComp from './components/nameComp';
import Login from './screens/Login';
import './App.css';
import AddForm from './screens/AddForm';
import Image from './screens/image'
import SuhanaButton from './components/button'
import QuizListScreen from './screens/quizListScreen'
import OpenQuiz from './screens/openQuiz'

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: false,
      imageShow : true,
      bulbOn: false,
      quizList:[
        {name: "JavaScript",questions: 20,time: "50 min"},
        {name: "HTML",questions: 50,time: "30 min"},
        {name: "CSS",questions: 30,time: "20 min"},
        {name: "React",questions: 60,time: "60 min"},
        {name: "MongoDb",questions: 50,time: "50 min"}
      ],
      listDis : true,
      openQuizPage: {}
    }
    this.disableList = this.disableList.bind(this);
    this.back = this.back.bind(this);
  }
  
  toggleImage(bool){
    const { bulbOn } = this.state;  
    this.setState({
      bulbOn: bool }) 
    
  }
  onLogin=()=>{
    this.setState({
      user: true
    })
  }
  disableList(res){
    const { listDis,openQuizPage,quizList } = this.state; 

    this.setState({
      listDis: false,
      openQuizPage: quizList[res]
    })
    console.log(res);
  }
  back(){
    const { listDis } = this.state; 

    this.setState({
      listDis: true,
      
    })
  }
  render() {
    const { user,imageShow,bulbOn,quizList,listDis,openQuizPage } = this.state;  
   return (
     <div class="container">
      {/* {!user && <Login login={this.onLogin}></Login>}
      {user && <AddForm></AddForm>}
      <hr />
      <SuhanaButton text='show image' toggle={() => this.toggleImage(true)} />
      <SuhanaButton text='hide image' toggle={() => this.toggleImage(false)} />
      <Image bulbOn={bulbOn} /> */}

      <hr />

      {listDis && <QuizListScreen quizList={quizList} listDisa={this.disableList} />}
      {!listDis && <OpenQuiz openQuizPage={openQuizPage} back={this.back}/>}
     </div>
     
   );
  }
}

export default App;
