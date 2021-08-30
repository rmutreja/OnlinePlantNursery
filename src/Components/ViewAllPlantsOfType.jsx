import React from 'react'
function ViewAllPlantsOfType() {
    return (
        <div className="container">
         <h3 className='text-primary text-center'>All Plants of a Type</h3>   
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
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            this.state.customers.map(customer=>(
                                    <tr>
                                    <td>{customer.cid}</td>
                                    <td>{customer.cname}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.gender}</td>
                                    <td>
                                        <button onClick={()=>this.deleteCustomer(customer.cid)} className='btn btn-danger'>Delete</button> |
                                        <button className='btn btn-primary'>Update</button>
                                    </td>
                                    </tr>
                            ))
                        }
                    </tbody> */}
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

export default ViewAllPlantsOfType