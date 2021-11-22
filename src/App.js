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
      mode:'read',
      selected_content_id:2,
      subject:{
        title:'WEB',
        sub:'World wid Web!'
      },
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:"HTML", desc:'HTML is for informatcion'},
        {id:2, title:"CSS", desc:'CSS is for design'},
        {id:3, title:"JavaScript", desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i]
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
      
    }
    return(
      <div className="App">
        {/* <Subject title="WEB" sub="world wide web!"></Subject> */}
        
        {/* <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault()
            //this.state.mode = 'welcome'
            this.setState({
              mode:'welcome'
            })
            
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={function(){ this.setState({mode : 'welcome'}) }.bind(this)}>

        </Subject>

        <TOC 
          data={this.state.contents} 
          onChangePage={function(id){
            this.setState({
              mode:'read', 
              selected_content_id:Number(id)
            })
            
          }.bind(this)}>
        </TOC>

        <Content 
          title={_title} 
          desc={_desc} 
        >

        </Content>
      </div>
    )
  }
}

export default App;
