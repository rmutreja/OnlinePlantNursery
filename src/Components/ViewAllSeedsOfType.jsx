import React from 'react'
function ViewAllSeedsOfType() {
    return (
        <div className="container">
         <h3 className='text-primary text-center'>All Seeds of a Type</h3>   
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
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Cost</th>
                            <th>Seeds per Packet</th>
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

export default ViewAllSeedsOfType