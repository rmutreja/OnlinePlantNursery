// import React,{Component} from 'react'
// class AddPlanter extends Component{
//     constructor() {
//         super();
//         this.state = {
//           input: {},
//           errors: {}
//         };
//          //For a given function, creates a bound function that has the same body as the original function. 
//          //The this object of the bound function is associated with the specified object, and has the specified initial parameters.
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
         
//       handleChange(event) {
//         let input = this.state.input;
//         input[event.target.name] = event.target.value;
      
//         this.setState({
//           input
//         });
//       }
         
//       handleSubmit(event) {
//         event.preventDefault();
      
//         if(this.validate()){
//             console.log(this.state);
      
//             let input = {};
//             input["pheight"] = "";
//             input["spread"] = "";
//             input["pname"] = "";
//             input["btime"] = "";
//             input["ptype"] = "";
//             input["pdesc"] = "";
//             input["pstock"] = "";
//             input["pcost"] = "";
//             input["diff"] = "";
//             input["temp"] = "";
//             input["medi"] = "";
//             this.setState({input:input});
      
//             alert('New Plant Added');
//         }
//       }
//       validate(){
//         let input = this.state.input;
//         let errors = {};
//         let isValid = true;
     
//         if (!input["pheight"]) {
//           isValid = false;
//           errors["pheight"] = "Please enter plant height.";
//         }
    
//         if (!input["spread"]) {
//           isValid = false;
//           errors["spread"] = "Please choose plant spread.";
//         }
    
//         if (!input["pname"]) {
//           isValid = false;
//           errors["pname"] = "Please enter plant common name.";
//         }
    
//         if (!input["btime"]) {
//           isValid = false;
//           errors["btime"] = "Please choose bloom time.";
//         }
    
//         if (!input["ptype"]) {
//           isValid = false;
//           errors["ptype"] = "Please enter plant type.";
//         }
        
//         if (!input["pdesc"]) {
//             isValid = false;
//             errors["pdesc"] = "Please enter plant description.";
//           }
    
//           if (!input["pstock"]) {
//             isValid = false;
//             errors["pstock"] = "Please enter number of plants in stock.";
//           }
          
//           if (!input["pcost"]) {
//             isValid = false;
//             errors["pcost"] = "Please enter cost of the plant.";
//           }
          
//           if (!input["diff"]) {
//             isValid = false;
//             errors["diff"] = "Please choose difficulty level.";
//           }
          
//           if (!input["temp"]) {
//             isValid = false;
//             errors["temp"] = "Please choose optimum plant temperature.";
//           } 
    
//           if (!input["medi"]) {
//             isValid = false;
//             errors["medi"] = "Please choose plant usage.";
//           }
          
//         this.setState({
//           errors: errors
//         });
    
//         return isValid;
//     }
   
//     render(){
//         return(
//             <div className='container'>
//                 <h3 className='text-primary text-center'>Adding Planter</h3>
//                 <hr/>
//                 <form method='post'>
//                     <div className='form-group'>
//                         <label>Planter Height</label>
//                         <input className='form-control' name='pheight'/>
//                     </div>
                   
                    
//                     <div className='form-group'>
//                         <label>Planter Capacity</label>
//                         <input className='form-control' name='pname'/>
//                     </div>

//                     <div className='form-group'>
//                         <label>Drainage Holes</label>
//                         <select name='spread' className='form-control'>
//                             <option value=''>--Select No. of Holes--</option>
//                             <option value='High'>High</option>
//                             <option value='Medium'>Medium</option>
//                             <option value='Low'>Low</option>
                         
//                         </select>
//                     </div>

//                     <div className='form-group'>
//                         <label>Planter Color</label>
//                         <select name='btime' className='form-control'>
//                             <option value=''>--Select Color--</option>
//                             <option value='Morning'>Brown</option>
//                             <option value='Afternoon'>Grey</option>
//                             <option value='Evening'>Black</option>
//                             {/* <option value='Night'>Night</option> */}

//                         </select>
//                     </div>

//                     <div className='form-group'>
//                         <label>Planter Shape</label>
//                         <input className='form-control' name='ptype'/>
//                     </div>

//                     <div className='form-group'>
//                         <label>Planter Stock</label>
//                         <input className='form-control' name='pstock'/>
//                     </div>
//                     <div className='form-group'>
//                         <label>Planter Cost</label>
//                         <input className='form-control' name='pcost'/>
//                     </div>
//                     <div className="text-center">
//                     <button className='btn btn-info mt-2'>Add Planter</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default AddPlanter


import React,{Component} from 'react'
class AddPlanter extends Component{
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
            input["pheight"] = "";
            input["dholes"] = "";
            input["pcapa"] = "";
            input["pcolor"] = "";
            input["pshape"] = "";
            input["pstock"] = "";
            input["pcost"] = "";
            //input["pdesc"] = "";
            //input["diff"] = "";
            //input["temp"] = "";
            //input["medi"] = "";
            this.setState({input:input});
      
            alert('New Planter Added');
        }
      }
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
     
        if (!input["pheight"]) {
          isValid = false;
          errors["pheight"] = "Please enter planter height.";
        }
    
        if (!input["dholes"]) {
          isValid = false;
          errors["dholes"] = "Please choose no.of holes.";
        }
    
        if (!input["pcapa"]) {
          isValid = false;
          errors["pcapa"] = "Please enter planter capacity.";
        }
    
        if (!input["pcolor"]) {
          isValid = false;
          errors["pcolor"] = "Please choose planter color.";
        }
    
        if (!input["pshape"]) {
          isValid = false;
          errors["pshape"] = "Please enter planter shape.";
        }
        
         if (!input["pstock"]) {
            isValid = false;
            errors["pstock"] = "Please enter number of planters in stock.";
          }
          
          if (!input["pcost"]) {
            isValid = false;
            errors["pcost"] = "Please enter cost of the planter.";
          }

          /*if (!input["pdesc"]) {
            isValid = false;
            errors["pdesc"] = "Please enter plant description.";
          }
          
         if (!input["diff"]) {
            isValid = false;
            errors["diff"] = "Please choose difficulty level.";
          }
          
          if (!input["temp"]) {
            isValid = false;
            errors["temp"] = "Please choose optimum plant temperature.";
          } 
    
          if (!input["medi"]) {
            isValid = false;
            errors["medi"] = "Please choose plant usage.";
          }*/
          
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
   
    render(){
        return(
            <div className='container'>
                <h3 className='text-primary text-center'>Adding Planter</h3>
                <hr/>
                <form onSubmit={this.handleSubmit} >
                    <div className='form-group'>
                        <label>Planter Height</label>
                       <input className='form-control' name='pheight' id='pheight' value={this.state.input.pheight}  onChange={this.handleChange} placeholder="Enter planter height"/>
                    <div className="text-danger">{this.state.errors.pheight}</div>
                    </div>
                   
                    
                    <div className='form-group'>
                        <label>Planter Capacity</label>
                        <input className='form-control' name='pcapa' id='pcapa' value={this.state.input.pcapa}  onChange={this.handleChange} placeholder="Enter planter capacity"/>
                    <div className="text-danger">{this.state.errors.pcapa}</div>
                    </div>

                    <div className='form-group'>
                        <label>Drainage Holes</label>
                        <select name='dholes' id='dholes' className='form-control'value={this.state.input.dholes}  onChange={this.handleChange}>
                            <option value=''>--Select No. of Holes--</option>
                            <option value='High'>High</option>
                            <option value='Medium'>Medium</option>
                            <option value='Low'>Low</option>
                         
                        </select>
                        <div className="text-danger">{this.state.errors.dholes}</div>
                    </div>

                    <div className='form-group'>
                        <label>Planter Color</label>
                        <select name='pcolor' className='form-control'value={this.state.input.pcolor}  onChange={this.handleChange}>
                            <option value=''>--Select Color--</option>
                            <option value='Morning'>Brown</option>
                            <option value='Afternoon'>Grey</option>
                            <option value='Evening'>Black</option>
                            {/* <option value='Night'>Night</option> */}

                        </select>
                        <div className="text-danger">{this.state.errors.pcolor}</div>
                    </div>

                    {/* <div className='form-group'>
                        <label>Planter Shape</label>
                        <select className='form-control' name='pshape' id='pshape' value={this.state.input.pshape}  onChange={this.handleChange} placeholder="Enter Shape of Planter"/>
                        <div className="text-danger">{this.state.errors.pshape}</div>
                    </div> */}

                    <div className='form-group'>
                        <label>Planter Shape</label>
                        <input className='form-control' name='pshape' id='pshape' value={this.state.input.pshape}  onChange={this.handleChange} placeholder="Enter shape of planter"/>
                    <div className="text-danger">{this.state.errors.pshape}</div>
                    </div>

                    <div className='form-group'>
                        <label>Planter Stock</label>
                        <input className='form-control' name='pstock' id='pstock' value={this.state.input.pstock}  onChange={this.handleChange} placeholder="Enter stock available"/>
                    <div className="text-danger">{this.state.errors.pstock}</div>
                    </div>


                    <div className='form-group'>
                        <label>Planter Cost</label>
                        <input className='form-control' name='pcost' id='pcost' value={this.state.input.pcost}  onChange={this.handleChange} placeholder="Enter cost of planter"/>
                    <div className="text-danger">{this.state.errors.pcost}</div>
                    </div>

                    <div className="text-center">
                    <button className='btn btn-info mt-2'>Add Planter</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddPlanter