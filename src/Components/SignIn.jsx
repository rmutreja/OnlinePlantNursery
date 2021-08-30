import React from 'react';
import '../style.css'
import bg1 from "../images/bg1.jpg"
class SignIn extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     //For a given function, creates a bound function that has the same body as the original function. 
     //The this object of the bound function is associated with the specified object, and has the specified initial parameters.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["username"] = "";
        input["password"] = "";
       
        this.setState({input:input});
  
        alert('SignIn Form is submitted');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof input["username"] !== "undefined") {
        const re = /^\S*$/;
        if(input["username"].length < 6 || !re.test(input["username"])){
            isValid = false;
            errors["username"] = "Please enter valid username.";
        }
      }
  
     
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      // if (!input["confirm_password"]) {
      //   isValid = false;
      //   errors["confirm_password"] = "Please enter your confirm password.";
      // }
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"].length < 6){
            isValid = false;
            errors["password"] = "Please add at least 6 charachter.";
        }
      }
  
     
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
//   render() {
//     return (
//       <div >
//           <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
//           <div class="container h-100">
//           <div class="row d-flex justify-content-center align-items-center h-100">
//           <div class="col-lg-12 col-xl-11">
//           <div class="card text-black" style={{ borderradius: "25px" }}>
//           <div class="card-body p-md-5">
//           <div class="row justify-content-center">
//           <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//           <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">SignIn</p>
         
//         <form onSubmit={this.handleSubmit} class="mx-1 mx-md-4" >
// input-sm chat-input
  
//           <div class="container">
//             <label for="username">Username:</label>
//             <input 
//               type="text" 
//               name="username" 
//               value={this.state.input.username}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter username" 
//               id="username" />
  
//               <div className="text-danger">{this.state.errors.username}</div>
//           </div>
  
          
   
//           <div class="container">
//             <label for="password">Password:</label>
//             <input 
//               type="password" 
//               name="password" 
//               value={this.state.input.password}
//               onChange={this.handleChange}
//               class="form-control" 
//               placeholder="Enter password" 
//               id="password" />
  
//               <div className="text-danger">{this.state.errors.password}</div>
//           </div>
  
          
//           <div className="text-center mt-2">   
//           <input type="submit" value="Submit" class="btn btn-success" />
//           </div>
//         </form>
//       </div>
//       </div>
//       </div>
//                                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

//                                         <img src={W3} class="img-fluid" alt="Sample image" />

//                                      </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
   
//     );
//   }
// }
  
// export default SignIn;


// import React from 'react';
// import '../style.css'
// import bg1 from "../images/bg1.jpg"
// class SignIn extends React.Component {
//     constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {}
//     };
//      //For a given function, creates a bound function that has the same body as the original function. 
//      //The this object of the bound function is associated with the specified object, and has the specified initial parameters.
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
     
//   handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;
  
//     this.setState({
//       input
//     });
//   }
     
//   handleSubmit(event) {
//     event.preventDefault();
  
//     if(this.validate()){
//         console.log(this.state);
  
//         let input = {};
//         input["username"] = "";
//         input["password"] = "";
       
//         this.setState({input:input});
  
//         alert('SignIn Form is submitted');
//     }
//   }
  
//   validate(){
//       let input = this.state.input;
//       let errors = {};
//       let isValid = true;
   
//       if (!input["username"]) {
//         isValid = false;
//         errors["username"] = "Please enter your username.";
//       }
  
//       if (typeof input["username"] !== "undefined") {
//         const re = /^\S*$/;
//         if(input["username"].length < 6 || !re.test(input["username"])){
//             isValid = false;
//             errors["username"] = "Please enter valid username.";
//         }
//       }
  
     
  
//       if (!input["password"]) {
//         isValid = false;
//         errors["password"] = "Please enter your password.";
//       }
  
//       if (!input["confirm_password"]) {
//         isValid = false;
//         errors["confirm_password"] = "Please enter your confirm password.";
//       }
  
//       if (typeof input["password"] !== "undefined") {
//         if(input["password"].length < 6){
//             isValid = false;
//             errors["password"] = "Please add at least 6 charachter.";
//         }
//       }
  
//       if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
//         if (input["password"] != input["confirm_password"]) {
//           isValid = false;
//           errors["password"] = "Passwords don't match.";
//         }
//       }
  
//       this.setState({
//         errors: errors
//       });
  
//       return isValid;
//   }
     
  render() {
    return (
<div style={{ backgroundImage: `url(${bg1})` }}>        
{/* <!-- Page Content --> */}
<div class="container">
    <div class="row">
        <div class="col-md-offset-5 col-md-4 text-center">
            <h1 class='text-white'>Unique Login Form</h1>
            <br></br>
            <br></br>
              <div class="form-login">
                <h4>Secure Login</h4>

                <form onSubmit={this.handleSubmit} >
              <div>
            <label for="username">Username:</label>
                <input type="text" id="username" name="username" value={this.state.input.username}
              onChange={this.handleChange} class="form-control"
               placeholder="Enter Username"/>
              <div className="text-warning">{this.state.errors.username}</div>
              </div>

                <br></br>

                <div>
            <label for="password">Password:</label>
                <input type="password" id="password" name="password" value={this.state.input.password}
              onChange={this.handleChange} class="form-control"
               placeholder="Enter Password"/>
               <div className="text-warning">{this.state.errors.password}</div>
              </div>

                <br></br>
                <div class="wrapper">
                        <span class="group-btn">
                            <a href="#" class="btn btn-danger btn-md">login <i class="fa fa-sign-in"></i></a>
                        </span>
                </div>
                </form>
            </div>
        </div>
    </div>
    <br></br>
    {/* <!--footer--> */}
    {/* <div class="footer text-white text-center">
        <p>© 2020 Unique Login Form. All rights reserved | Design by <a href="https://freecss.tech">Free Css</a></p>
    </div> */}
    {/* <!--//footer--> */}
</div>

    </div>
   
    );
  }
}
  
export default SignIn;