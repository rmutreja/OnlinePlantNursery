import React from 'react'
function ViewPlanterByShape() {
    return (
        <div className="container">
         <h3 className='text-primary text-center'>Planter by Shape</h3>   
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
                            <th>Stock</th>
                            <th>Cost</th>
                            {/* <th className="text-center">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td className="text-center">
                            <button className='btn btn-danger'>Delete</button> |&nbsp;
                                        <button className='btn btn-primary'>Update</button>
                            </td> */}
                        </tr>
                    </tbody>
                </table>
                </div>   
        </div>
    )
}

export default ViewPlanterByShape