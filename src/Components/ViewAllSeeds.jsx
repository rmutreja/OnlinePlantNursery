// import React from 'react'
// function ViewAllSeeds() {
//     return (
//         <div className="container">
//          <h3 className='text-primary text-center'>All Seeds Available</h3>   
//          <hr/>
//             <div>
                
//                 <table className='table table-bordered table-hover table-striped'>
//                     <thead className='bg-dark' style={{color:"gold"}}>
//                         <tr>
//                             <th>Seed ID</th>
//                             <th>Common Name</th>
//                             <th>Bloom Time</th>
//                             <th>Watering</th>
//                             <th>Difficulty Level</th>
//                             <th>Temperature</th>
//                             <th>Type</th>
//                             <th>Description</th>
//                             <th>Stock</th>
//                             <th>Cost</th>
//                             <th>Seeds per Packet</th>
//                             <th className="text-center">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td className="text-center">
//                             <button className='btn btn-danger'>Delete</button> |&nbsp;
//                                         <button className='btn btn-primary'>Update</button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 </div>   
//         </div>
//     )
// }
// export default ViewAllSeeds


import React from 'react'
import SeedService from '../Services/SeedService'
class ViewAllSeeds extends React.Component{
    constructor(props){
        super(props)
 
        this.state={
            seeds:[],
            error:''
        }
    }
    
     componentDidMount(){
         this.viewAllSeeds()
     }
 
     viewAllSeeds(){
         SeedService.viewAllSeeds()
         .then(response=>{
             this.setState({
                 seeds:response.data,
                 error:''
             })
         })
         .catch(err=>{
             console.log(err)
             this.setState({
                 seeds:[],
                 error:err.toString()
             })
         })
     }
 
     deleteSeed=(seedId)=>{
         SeedService.deleteSeed(seedId)
                 .then(response=>{
 
                 })
                 .catch(err=>{
                     console.log(err)
                 })
                 this.viewAllSeeds()
     }
     render()
     {return (
         <div className="container">
          <h3 className='text-primary text-center'>All Seeds Available</h3>   
             <hr/>
             <div>
                 
                 <table className='table table-bordered table-hover table-striped'>
                     <thead className='bg-dark' style={{color:"gold"}}>
                         <tr>
                         <th>Seed ID</th>
                            <th>Common Name</th>
                            <th>Bloom Time</th>
                            <th>Watering</th>
                            <th>Difficulty Level</th>
                            <th>Temperature</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Cost</th>
                            <th>Seeds per Packet</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.seeds.map(seed=>(
                                <tr>
                                    <td>{seed.seedid}</td>
                                    <td>{seed.commonName}</td>
                                    <td>{seed.bloomTime}</td>
                                    <td>{seed.watering}</td>
                                    <td>{seed.difficultyLevel}</td>
                                    <td>{seed.temperature}</td>
                                    <td>{seed.typeOfseeds}</td>
                                    <td>{seed.seedsDescription}</td>
                                    <td>{seed.seedsStock}</td>
                                    <td>{seed.seedsCost}</td>
                                    <td>{seed.seedsPerPacket}</td>
                                    <td>
                                    {/*<button className='btn btn-danger'>Delete</button>|&nbsp;
                                    <button className='btn btn-primary'>Update</button>*/}
                                    <button onClick={()=>this.deleteSeed(seed.seedid)} className='btn btn-danger'>Delete</button><button className='btn btn-primary'>Update</button>
                                   
                                   
                                   
                                    </td>
                                    </tr>
                            ) )
                        }
                       </tbody>
                       {/* <tbody>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">
                            <button className='btn btn-danger'>Delete</button> |&nbsp;
                                        <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                    </tbody> */}
                </table>
                </div>   
        </div>
          )}              
                        
        }
        export default ViewAllSeeds