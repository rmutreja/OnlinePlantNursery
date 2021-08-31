// import React from 'react'
// function ViewPlant() {
//     return (
//         <div>
//          <h3 className='text-primary text-center'>Plant by ID</h3>   
//             <hr/>
//         </div>
//     )
// }

// export default ViewPlant





// import { throwStatement } from '@babel/types'
// import axios from 'axios'
// import React,{useState,useEffect} from 'react'

// function ViewPlant(){
//     const [plant,SetPlant]=useState({})
//     const[plantId,setPlantId]=setState(0)
//     const[error,setError]=useState('')
//     useEffect(()=>
//     {
//         axios.get(`http://localhost:8080/plant/viewPlantById/${plantId}`)
//         throwStatement(response=>
//             {
//                 SetPlant(response.data)
//             }
//             )
//             .catch(err=>
//                 {
//                     console.log(err)
//                     setError(err.toString())
//                 })
//     },[cid]
//     )
//     let data1=
//     <div className='form-group'>
//         <label>Plant Id</label>
//         <input value={plantId} onChange={(e)=>setPlantId(e.target.value)} className='form-control'/>
//         <hr/>
        
//         <h4>Plant Id : {plant.plantId}</h4>
//         <h4>Plant Height : {plant.pheight}</h4>
//     </div>


//     let data2=
//     <div className='form-group'>
//         <label>Plant Id</label>
//         <input value={plantId} onChange={(e)=>setPlantId(e.target.value)} className='form-control'/>
//         <hr/>
//         <h5 className='text-danger'>error && error</h5>
        
//     </div>
    
//     if(error=='')
//     {
//         return data1
//     }
//     else{
//         return data2
//     }
    

   
    
    
// }
// export default ViewPlant


import { throwStatement } from '@babel/types'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import PlantService from '../Services/PlantService'
function ViewPlant(){
    const [plant,setPlant]=useState({})
    const[plantId,setPlantId]=useState(0)
    const[error,setError]=useState('')
    useEffect(()=>
    {
        // axios.get(`http://localhost:8080/plant/viewPlantById/${plantId}`)
        PlantService.ViewPlant(plantId)
        .then(response=>
            {
                setPlant(response.data)
            }
            )
            .catch(err=>
                {
                    console.log(err)
                    setError(err.toString())
                })
    },[plantId]
    )
    let data1=
    <div className='container'>
    <div className='form-group'>
        <label>Plant Id</label>
        <input value={plantId} onChange={(e)=>setPlantId(e.target.value)} className='form-control'/>
        <hr/>
        <h4>Plant Id : {plant.plantId}</h4>
        <h4>Plant Height : {plant.pheight}</h4>
    </div>
    </div>


    let data2=
    <div class='container'>
    <div class="form-group">
        <label>Plant Id</label>
        <input value={plantId} onChange={(e)=>setPlantId(e.target.value)} class='form-control'/>
        <hr/>
        <h5 className='text-danger'>{error && error}</h5>
        
    </div>
    </div>

    
    if(error=='')
    {
        return data1
    }
    else{
        return data2
    }
    

   
    
    
}
export default ViewPlant