import React,{Component} from 'react'
class AddSeed extends Component{
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
            input["scname"] = "";
            input["bloom"] = "";
            input["watering"] = "";
            input["diff"] = "";
            input["temp"] = "";
            input["type"] = "";
            input["sdesc"] = "";
            input["sstock"] = "";
            input["scost"] = "";
            input["sper"] = "";
            this.setState({input:input});
      
            alert('New Plant Added');
        }
      }
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
     
        if (!input["scname"]) {
          isValid = false;
          errors["scname"] = "Please enter common name.";
        }
    
        if (!input["bloom"]) {
          isValid = false;
          errors["bloom"] = "Please choose bloom time.";
        }
    
        if (!input["watering"]) {
          isValid = false;
          errors["watering"] = "Please enter watering value.";
        }
   
        if (!input["diff"]) {
          isValid = false;
          errors["diff"] = "Please choose difficulty level.";
        }
    
        if (!input["temp"]) {
          isValid = false;
          errors["temp"] = "Please choose optimum seed temperature.";
        }
    
        if (!input["type"]) {
            isValid = false;
            errors["type"] = "Please enter seed type.";
          }
    
          if (!input["sdesc"]) {
            isValid = false;
            errors["sdesc"] = "Please enter the seed discription.";
          }
          if (!input["sstock"]) {
            isValid = false;
            errors["sstock"] = "Please enter number of seeds in stock.";
          } 
          if (!input["scost"]) {
            isValid = false;
            errors["scost"] = "Please enter cost of seed.";
          }
          
          if (!input["sper"]) {
            isValid = false;
            errors["sper"] = "Please choose seed per pack.";
          }
          
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    
    render(){
        return(
            <div className='container'>
                <h3 className='text-primary text-center'>Adding Seed</h3>
                <hr/>
                <form onSubmit={this.handleSubmit} >
                    <div className='form-group'>
                        <label for="scname">Commom Name </label>
                        <input className='form-control' name='scname' id='scname' value={this.state.input.scname}  onChange={this.handleChange} placeholder="Enter seed common name"/>
                        <div className="text-danger">{this.state.errors.scname}</div>
                    </div>

                    <div className='form-group'>
                        <label for="bloom">Bloom Time</label>
                        <select name='bloom' className='form-control' id='bloom' value={this.state.input.bloom}  onChange={this.handleChange} >
                            <option value=''>--Select Bloom Time--</option>
                            <option value='Morning'>Morning</option>
                            <option value='Afternoon'>Afternoon</option>
                            <option value='Evening'>Evening</option>
                            <option value='Night'>Night</option>

                        </select>
                        <div className="text-danger">{this.state.errors.bloom}</div>
                    </div>

                    <div className='form-group'>
                        <label for="watering">Watering</label>
                        <select name='watering' className='form-control'id='watering' value={this.state.input.watering}  onChange={this.handleChange} >
                            <option value=''>--Select Watering--</option>
                            <option value='More'>More</option>
                            <option value='Moderate'>Moderate</option>
                            <option value='Less'>Less</option>
                           
                        </select>
                        <div className="text-danger">{this.state.errors.watering}</div>
                    </div>

                    <div className='form-group'>
                        <label for="diff">Difficuilty Level</label>
                        <select name='diff' className='form-control'id='diff' value={this.state.input.diff}  onChange={this.handleChange} >
                            <option value=''>--Select Difficuilty Level--</option>
                            <option value='High'>High</option>
                            <option value='Moderate'>Moderate</option>
                            <option value='Low'>Low</option>
                           
                        </select>
                        <div className="text-danger">{this.state.errors.diff}</div>
                    </div>


                    <div className='form-group'>
                        <label for="temp">Temperature</label>
                        <select name='temp' className='form-control'id='temp' value={this.state.input.temp}  onChange={this.handleChange} >
                            <option value=''>--Select Temperature--</option>
                            <option value='High'>High</option>
                            <option value='Moderate'>Moderate</option>
                            <option value='Low'>Low</option>
                           
                        </select>
                        <div className="text-danger">{this.state.errors.temp}</div>
                    </div>

                    <div className='form-group'>
                        <label for="type">Seed Type</label>
                        <select name='type' className='form-control'id='type' value={this.state.input.type}  onChange={this.handleChange} >
                            <option value=''>--Select Type--</option>
                            <option value='mono'>Monocotyledonous</option>
                            <option value='di'>Dicotyledonous</option>
                         
                        </select>
                        <div className="text-danger">{this.state.errors.type}</div>
                    </div>

                    <div className='form-group'>
                        <label for="sdesc">Seed Description</label>
                        <input className='form-control' name='sdesc'id='sdesc' value={this.state.input.sdesc}  onChange={this.handleChange} placeholder="Enter seed description"/>
                        <div className="text-danger">{this.state.errors.sdesc}</div>
                    </div>


                    <div className='form-group'>
                        <label for="sstock">Seed Stock</label>
                        <input className='form-control' name='sstock'id='sstock' value={this.state.input.sstock}  onChange={this.handleChange} placeholder="Enter seeds in stock"/>
                        <div className="text-danger">{this.state.errors.sstock}</div>
                    </div>

                    <div className='form-group'>
                        <label for="scost">Seed Cost</label>
                        <input className='form-control' name='scost'id='scost' value={this.state.input.scost}  onChange={this.handleChange} placeholder="Enter cost of seed"/>
                        <div className="text-danger">{this.state.errors.scost}</div>
                    </div>

                    <div className='form-group'>
                        <label for="sper">Seed Per Pack</label>
                        <input className='form-control' name='sper'id='sper' value={this.state.input.sper}  onChange={this.handleChange} placeholder="Enter seeds per packet"/>
                        <div className="text-danger">{this.state.errors.sper}</div>
                    </div>

                    <div className="text-center">
                    <button className='btn btn-info mt-2'>Add Seed</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddSeed



// import React,{Component} from 'react'
// import SeedService from '../Services/SeedService';
// class AddSeed extends Component{
//     constructor() {
//     super();
//     this.state = {
//       input: {},
//       errors: {},
//       scname:'',
//       bloom:'',
//       watering:'',
//       diff:'',
//       temp:'',
//       type:'',
//       sdesc:'',
//       sstock:'',
//       scost:'',
//       sper:'',
//       msg:''
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
//         input["scname"] = "";
//         input["bloom"] = "";
//         input["watering"] = "";
//         input["diff"] = "";
//         input["temp"] = "";
//         input["type"] = "";
//         input["sdesc"] = "";
//         input["sstock"] = "";
//         input["scost"] = "";
//         input["sper"] = "";
//         this.setState({input:input});
  
//         alert('New Seed Added');
//         SeedService.addSeed(
//         this.state.scname,
//         this.state.bloom,
//         this.state.watering,
//         this.state.diff,
//         this.state.temp,
//         this.state.type,
//         this.state.sdesc,
//         this.state.sstock,
//         this.state.scost,
//         this.state.sper,
//         ).then(response=>
//           {
//             console.log(response.data)
//             this.setState({
//               msg:response.data,
//               scname:'',
//               bloom:'',
//               watering:'',
//               diff:'',
//               temp:'',
//               type:'',
//               sdesc:'',
//               sstock:'',
//               scost:'',
//               sper:'',
//               error:''
//             })
//           })
//           .catch(errors=>
//             {
//               console.log(errors)
//               this.setState({
//                 scname:'',
//                 bloom:'',
//                 watering:'',
//                 diff:'',
//                 temp:'',
//                 type:'',
//                 sdesc:'',
//                 sstock:'',
//                 scost:'',
//                 sper:'',
//                 error:errors.toString(),
//                 msg:''
//               })
//             })
//     }
//   }
//   validate(){
//     let input = this.state.input;
//     let errors = {};
//     let isValid = true;
 
//     if (!input["scname"]) {
//       isValid = false;
//       errors["scname"] = "Please enter Seed Common Name.";
//     }

//     // if (typeof input["username"] !== "undefined") {
//     //   const re = /^\S*$/;
//     //   if(input["username"].length < 6 || !re.test(input["username"])){
//     //       isValid = false;
//     //       errors["username"] = "Please enter valid username.";
//     //   }
//     // }

//     if (!input["bloom"]) {
//       isValid = false;
//       errors["bloom"] = "Please choose Bloom Time.";
//     }

//     // if (typeof input["email"] !== "undefined") {
        
//     //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//     //   if (!pattern.test(input["email"])) {
//     //     isValid = false;
//     //     errors["email"] = "Please enter valid Email address.";
//     //   }
//     // }

//     if (!input["watering"]) {
//       isValid = false;
//       errors["watering"] = "Please choose watering.";
//     }

//     // if (typeof input["phone"] !== "undefined") {
        
//     //   var pattern = new RegExp(/^[0-9\b]+$/);
//     //   if (!pattern.test(input["phone"])) {
//     //     isValid = false;
//     //     errors["phone"] = "Please enter only number.";
//     //   }else if(input["phone"].length != 10){
//     //     isValid = false;
//     //     errors["phone"] = "Please enter valid Mobile number.";
//     //   }
//     // }

//     if (!input["diff"]) {
//       isValid = false;
//       errors["diff"] = "Please choose difficulty level.";
//     }

//     if (!input["temp"]) {
//       isValid = false;
//       errors["temp"] = "Please choose temperature.";
//     }

//     // if (typeof input["password"] !== "undefined") {
//     //   if(input["password"].length < 6){
//     //       isValid = false;
//     //       errors["password"] = "Please add at least 6 charachter.";
//     //   }
//     // }

//     // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
//     //   if (input["password"] != input["confirm_password"]) {
//     //     isValid = false;
//     //     errors["password"] = "Passwords don't match.";
//     //   }
//     // }

//     if (!input["type"]) {
//         isValid = false;
//         errors["type"] = "Please enter type of seed.";
//       }

//       if (!input["sdesc"]) {
//         isValid = false;
//         errors["sdesc"] = "Please enter Seed Description.";
//       }
      
//       if (!input["sstock"]) {
//         isValid = false;
//         errors["sstock"] = "Please enter Seed Stock.";
      
//       if (!input["scost"]) {
//         isValid = false;
//         errors["scost"] = "Please enter Seed Cost.";
//       }
      
//       if (!input["sper"]) {
//         isValid = false;
//         errors["sper"] = "Please enter Seeds per Packet.";
//       } 

//     this.setState({
//       errors: errors
//     });

//     return isValid;
// }
//     render(){
//         return(
//             <div className='container'>
//                 <h3 className='text-primary text-center'>Adding Seed</h3>
//                 <hr/>
//                 <form method='post'>
//                     <div className='form-group'>
//                         <label>Commom Name </label>
//                         <input className='form-control' name='scname'/>
//                     </div>
//                     <div className='form-group'>
//                         <label>Bloom Time</label>
//                         <select name='bloom' className='form-control'>
//                             <option value=''>--Select Bloom Time--</option>
//                             <option value='Morning'>Morning</option>
//                             <option value='Afternoon'>Afternoon</option>
//                             <option value='Evening'>Evening</option>
//                             <option value='Night'>Night</option>

//                         </select>
//                     </div>

//                     <div className='form-group'>
//                         <label>Watering</label>
//                         <select name='watering' className='form-control'>
//                             <option value=''>--Select Watering--</option>
//                             <option value='More'>More</option>
//                             <option value='Moderate'>Moderate</option>
//                             <option value='Less'>Less</option>
                           
//                         </select>
//                     </div>

//                     <div className='form-group'>
//                         <label>Difficuilty Level</label>
//                         <select name='diff' className='form-control'>
//                             <option value=''>--Select Difficuilty Level--</option>
//                             <option value='High'>High</option>
//                             <option value='Moderate'>Moderate</option>
//                             <option value='Low'>Low</option>
                           
//                         </select>
//                     </div>


//                     <div className='form-group'>
//                         <label>Temperature</label>
//                         <select name='temp' className='form-control'>
//                             <option value=''>--Select Temperature--</option>
//                             <option value='High'>High</option>
//                             <option value='Moderate'>Moderate</option>
//                             <option value='Low'>Low</option>
                           
//                         </select>
//                     </div>

//                     <div className='form-group'>
//                         <label>Seed Type</label>
//                         <select name='type' className='form-control'>
//                             <option value=''>--Select Type--</option>
//                             <option value='mono'>Monocotyledonous</option>
//                             <option value='di'>Dicotyledonous</option>
                         
//                         </select>
//                     </div>

//                     <div className='form-group'>
//                         <label>Seed Description</label>
//                         <input className='form-control' name='sdesc'/>
//                     </div>


//                     <div className='form-group'>
//                         <label>Seed Stock</label>
//                         <input className='form-control' name='sstock'/>
//                     </div>
//                     <div className='form-group'>
//                         <label>Seed Cost</label>
//                         <input className='form-control' name='scost'/>
//                     </div>
//                     <div className='form-group'>
//                         <label>Seed Per Pack</label>
//                         <input className='form-control' name='sper'/>
//                     </div>

//                     <div className="text-center">
//                     <button className='btn btn-info mt-2'>Add Seed</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// }
// export default AddSeed