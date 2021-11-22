import React, {Component} from "react";

// Subject component 만들겠다.
class Subject extends Component{
    // class 안엔 function 생략 가능
    render(){
      return(
        // 하나의 최상의 태그로 시작해야한다.
        <header>
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
      
    }
  }

export default Subject;