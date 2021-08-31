// import React from 'react'
// function ViewAllPlanters() {
//     return (
//         <div className="container">
//          <h3 className='text-primary text-center'>All Planters Available</h3>   
//             <hr/>
//             <div>
                
//                 <table className='table table-bordered table-hover table-striped'>
//                     <thead className='bg-dark' style={{color:"gold"}}>
//                         <tr>
//                             <th>Planter ID</th>
//                             <th>Height</th>
//                             <th>Capacity</th>
//                             <th>Drainage Holes</th>
//                             <th>Color</th>
//                             <th>Shape</th>
//                             <th>Stock</th>
//                             <th>Cost</th>
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

// export default ViewAllPlanters


// import { render } from '@testing-library/react'
import React from 'react'
import PlanterService from '../Services/PlanterService'
class ViewAllPlanters extends React.Component{

    constructor(props){
        super(props)
 
        this.state={
            planters:[],
            error:''
        }
    }
    componentDidMount(){
        this.viewAllPlanters()
    }

         viewAllPlanters(){
        PlanterService.viewAllPlanters()
        .then(response=>{
            this.setState({
                planters:response.data,
                error:''
            })
        })
        .catch(err=>{
        console.log(err)
        this.setState({
        planters:[],
        error:err.toString()
    })
})
}
    deletePlanter=(planterId)=>{
    PlanterService.deletePlanter(planterId)
            .then(response=>{

            })
            .catch(err=>{
                console.log(err)
            })
            this.viewAllPlanters()

}

render() 
{return (
        <div className="container">
         <h3 className='text-primary text-center'>All Planters Available</h3>   
            <hr/>
            <div>
                
                <table className='table table-bordered table-hover table-striped'>
                    <thead className='bg-dark' style={{color:"gold"}}>
                        <tr>
                            <th>Planter ID</th>
                            <th>Height</th>
                            <th>Capacity</th>
                            <th>Drainage Holes</th>
                            <th>Color</th>
                            <th>Shape</th>
                            <th>Stock</th>
                            <th>Cost</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.planters.map(planter=>(

                        <tr>
                            <td>{planter.planterId}</td>
                            <td>{planter.planterheight}</td>
                            <td>{planter.planterCapacity}</td>
                            <td>{planter.drinageHoles}</td>
                            <td>{planter.planterColor}</td>
                            <td>{planter.planterShape}</td>
                            <td>{planter.planterStock}</td>
                            <td>{planter.planterCost}</td>
                            
                            
                            <td className="text-center">
                            <button className='btn btn-danger'>Delete</button> |&nbsp;
                                    <button className='btn btn-primary'>Update</button>
                            </td>
                        </tr>
                        ))
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
    )
                }
}

export default ViewAllPlanters