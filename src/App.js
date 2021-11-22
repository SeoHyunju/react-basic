import { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import './App.css';

class App extends Component{
  // 어떤 컴포넌트가 실행 될 때 render 보다 먼저 실행되면서 초기화 시켜주고 싶은 코드 작성
  constructor(props){
    super(props);
    //state값 초기화
    this.state = {
      subject:{
        title:'WEB',
        sub:'World wid Web!'
      }
    }
  }
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
      </div>
    )
  }
}

export default App;
