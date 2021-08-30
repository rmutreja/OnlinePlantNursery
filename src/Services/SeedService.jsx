import axios from 'axios'
class SeedService
{
baseUrl='http://localhost:8080/seed'

// addSeed(scname,bloom,watering,diff,temp,type,sdesc,sstock,scost,sper)
// {
//     return axios.post(`${this.baseUrl}/addSeed`,{scname,bloom,watering,diff,temp,type,type,sdesc,sstock,scost,sper})
// }

//deleteSeed()
//{
    //return axios.delete(`${this.baseUrl}/deleteSeed`)
//}

viewAllSeeds()
{
    return axios.get(`${this.baseUrl}/viewAllSeeds`)
}

// ViewSeedByName()
// {
//     return axios.get(`${this.baseUrl}/viewSeedbyCommonName`)
// }

// ViewSeed()
// {
//     return axios.get(`${this.baseUrl}/viewSeedById`)
// }

// ViewAllSeedsOfType()
// {
//     return axios.get(`${this.baseUrl}/viewALLSeedsByTypeOfSeed`)
// }

}

export default new SeedService()