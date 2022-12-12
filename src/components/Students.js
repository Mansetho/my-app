import React, { Component } from 'react'

class Students extends Component{
  constructor(props){
      super()


      this.state = {
          name:props.name,
          fullName:"",
          CoursePersued:"",
          age:"",
        
      }

  }

  myCourses = () => {
      this.setState({
          fullName:this.props.fullName,
          CoursePersued:this.props.CoursePersued,
          age:this.props.age,
      })
  }


  render(){
      return(
          <div>
              <h1>{this.state.name}</h1>
              <button onClick={()=>this.myCourses()}>more...</button>
              <p>Full Name: {this.state.fullName}</p>
              <p>CoursePersued: {this.state.CoursePersued}</p>
              <p>i am: {this.state.age} years old</p>
              
          </div>
      )            
  }
}

export default Students