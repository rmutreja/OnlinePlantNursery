import axios from 'axios'
class PlanterService
{
baseUrl='http://localhost:8080/planter'

// addPlanter(pheight,dholes,pcapa,pcolor,pshape,pstock,pcost)
// {
//     return axios.post(`${this.baseUrl}/addPlanter`,{pheight,dholes,pcapa,pcolor,pshape,pstock,pcost})
// }

// deletePlanter()
// {
//     return axios.delete(`${this.baseUrl}/deletePlanter/&{planterId}`)
// }

viewAllPlanters()
{
    return axios.get(`${this.baseUrl}/viewAllPlanters`)
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

export default new PlanterService()