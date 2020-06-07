import React from 'react';


const DistrictCard = ({State,districtData})=>{
 // var MainData = []
  // console.log(districtData)
  
 // document.getElementById("StateValue").innerHTML = State;
  
    return(
        <>
         
         {
               districtData.map((newVla,i)=>(
               
          
         
          <div className="col-sm-4 " key={i}  >
                    <div className="card mt-4 mb-4" >
                        <div className="card-body" id="repetMe">
                            <h5 className="card-title main_title">{newVla.district}</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-danger">Confirmed</td>
                                        <td className="text-primary">Active</td>
                                        <td className="text-success">Recovered</td>
                                        <td className="deacead">Deceased</td>
                                    </tr>
                                    <tr>
                                        <td className="main_confirmed_oo"> <span className="text-danger main_confirmed">+ {newVla.todayCases} </span><br /><b> {newVla.cases} </b></td>
                                        <td className="main_confirmed_oo"> <span className="make_white"> . </span> <br></br> {newVla.active} </td>
                                        <td className="main_confirmed_oo"> <span className="text-success main_confirmed">+ {newVla.todayRecovered} </span><br /> {newVla.recovered} </td>
                                        <td className="main_confirmed_oo"> <span className="text-dark main_confirmed">+ {newVla.todayDeaths} </span> <br /> {newVla.deaths} </td>
                                    </tr>
                                </tbody>
                            </table>
                          
                        </div>
                    </div>
                </div>
        ))
         }          

        </>
    )
}

export default DistrictCard;