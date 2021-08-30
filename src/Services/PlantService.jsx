import axios from 'axios'
class PlantService
{
baseUrl='http://localhost:8080/plant'

addPlant(pheight,spread,pname,btime,ptype,pdesc,pstock,pcost,diff,temp,medi)
{
    return axios.post(`${this.baseUrl}/addPlant`,{pheight,spread,pname,btime,ptype,pdesc,pstock,pcost,diff,temp,medi})
}

deletePlant()
{
    return axios.delete(`${this.baseUrl}/deletePlant/&{plantId}`)
}

viewAllPlants()
{
    return axios.get(`${this.baseUrl}/viewAllPlants`)
}

// ViewPlantByName()
// {
//     return axios.get(`${this.baseUrl}/viewPlantByCommonName`)
// }

// ViewPlant()
// {
//     return axios.get(`${this.baseUrl}/viewPlantById`)
// }

// ViewAllPlantsOfType()
// {
//     return axios.get(`${this.baseUrl}/viewALLPlantsByTypeOfPlant`)
// }

}

export default new PlantService()