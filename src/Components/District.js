import React, { useEffect,useState,useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DistrictCard from './SubCompo/DistrictCard';
import {StateContext} from '../Context/StateContext';
import {Add} from '../Context/actio.type';
import  {v4} from 'uuid';

const District = () => {
    const { dist } = useParams();
    const [districtData, SetDistrictData] = useState([]);
    const [loading, SetLoading] = useState(true);
    const {dispatch} = useContext(StateContext);
    const updateState = ()=>{
          const data = {
            Maindata : dist,
            id : v4()
          }
         dispatch({
           type : Add,
           payload : data
         })
    }
   
    const districtGrapgql = ()=>{
      axios({
        url: 'https://covidstat.info/graphql',
        method: 'post',
        data: {
            query: `
            query {
                country(name: "India") {
                  states {
                    state
                    districts {
                      district
                      cases
                      todayCases
                      deaths
                      todayDeaths
                      recovered
                      todayRecovered
                      active
                    }
                  }
                }
              }
          
            `
        }
    }).then((result) => {
        const allDistrict = result.data.data.country.states
     var mainValue =  allDistrict.filter(obj=>{
            return obj.state === dist;
        })
        SetDistrictData(mainValue[0].districts)
       //console.log(mainValue[0].districts)
       SetLoading(false);
   

    }).catch((error) => {
        console.log(error)
    })
    }
    useEffect(() => {
      districtGrapgql();
      updateState();

    }, [])
   

    return (
        <>
            {
               loading === true ? <div>
               <img src="https://media.giphy.com/media/swhRkVYLJDrCE/giphy.gif" alt="" height="590" width="100%" />
              </div> :
              <div className="row Hero_eor">
                <DistrictCard State={dist} districtData={districtData} />
            </div>
           }
       
            

        </>
    )
}
export default District;