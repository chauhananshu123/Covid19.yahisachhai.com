import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StateCard from './SubCompo/StateCard';



const Hero = () => {
    const [stateData, setStateData] = useState([])
    const [loading, setLoading] = useState(true);
   // document.getElementById("StateValue").innerHTML = "";

    useEffect(() => {
        axios({
            url: 'https://covidstat.info/graphql',
            method: 'post',
            data: {
                query: `
              query {
                country(name: "India") {
                  states {
                    state
                    cases
                    deaths
                    recovered
                    tests
                    todayCases
                    todayDeaths
                    todayRecovered
                  }
                }
              }
              
                `
            }
        }).then((result) => {
            const allState = result.data.data.country.states
            setStateData([...stateData, allState]);
            setLoading(false)

        }).catch((error) => {
            console.log(error)
        })

    }, [])



    return (
        <>
           {
               loading === true ? <div>
               <img src="https://media.giphy.com/media/swhRkVYLJDrCE/giphy.gif" alt="" height="590" width="100%" />
              </div> : 
               <div className="row Hero_eor">
               <StateCard stateData={stateData} />
         </div>
           }
       
     </>

    )
}

export default Hero;