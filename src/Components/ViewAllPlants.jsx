import React from 'react'
import PlantService from '../Services/PlantService'
class ViewAllPlants extends React.Component {
    
   constructor(props){
       super(props)

       this.state={
           plants:[],
           error:''
       }
   }
   
    componentDidMount(){
        this.viewAllPlants()
    }

    viewAllPlants(){
        PlantService.viewAllPlants()
        .then(response=>{
            this.setState({
                plants:response.data,
                error:''
            })
        })
        .catch(err=>{
            console.log(err)
            this.setState({
                plants:[],
                error:err.toString()
            })
        })
    }

    deletePlant=(plantId)=>{
        PlantService.deletePlant(plantId)
                .then(response=>{

                })
                .catch(err=>{
                    console.log(err)
                })
                this.viewAllPlants()
    }
    
    render()
    {return (
        <div className="container">
         <h3 className='text-primary text-center'>All Plants Available</h3>   
            <hr/>
            <div>
                
                <table className='table table-bordered table-hover table-striped'>
                    <thead className='bg-dark' style={{color:"gold"}}>
                        <tr>
                            <th>Plant ID</th>
                            <th>Common Name</th>
                            <th>Height</th>
                            <th>Plant Spread</th>
                            <th>Bloom Time</th>
                            <th>Usage</th>
                            <th>Difficulty Level</th>
                            <th>Temperature</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Cost</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.plants.map(plant=>(
                                    <tr>
                                        <td>{plant.plantId}</td>
                                    <td>{plant.commonName}</td>
                                    <td>{plant.plantHeight}</td>
                                    <td>{plant.plantSpread}</td>
                                    <td>{plant.bloomTime}</td>
                                    <td>{plant.typeOfPlant}</td>
                                    <td>{plant.difficultyLevel}</td>
                                    <td>{plant.temperature}</td>
                                    <td>{plant.medicinalOrCulinaryUse}</td>
                                    <td>{plant.plantDescription}</td>
                                    <td>{plant.plantsStock}</td>
                                    <td>{plant.plantCost}</td>
                                                       
                                    <td>
                            {/* <button className='btn btn-danger'>Delete</button> |&nbsp;
                                        <button className='btn btn-primary'>Update</button> */}
                                    
                                        <button onClick={()=>this.deletePlant(plant.plantId)} className='btn btn-danger'>Delete</button>|
                                        <button className='btn btn-primary'>Update</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                                  </table>
                </div>   
        </div>
    )
                }
}

export default ViewAllPlants