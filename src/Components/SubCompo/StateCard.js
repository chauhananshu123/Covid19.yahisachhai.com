import React from 'react';
import {Link} from 'react-router-dom';




const StateCard = ({ stateData }) => {
    
    return (
        <> {
            stateData.map((StData, i) => (
                StData.map((MainStData, i) => (

                    <div className="col-sm-4 " key={i} >
                        <div className="card mt-4 mb-4" >
                            <div className="card-body" id={`repetMe`+i}>
                                <h5 className="card-title main_title">{MainStData.state}</h5>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="text-danger">Confirmed</td>
                                            <td className="text-primary">Active</td>
                                            <td className="text-success">Recovered</td>
                                            <td className="deacead">Deceased</td>
                                        </tr>
                                        <tr>
                                            <td className="main_confirmed_oo"> <span className="text-danger main_confirmed">+ {MainStData.todayCases}</span><br /><b> {MainStData.cases}</b></td>
                                            <td className="main_confirmed_oo" id={`main_c`+i}> <span className="make_white"> . </span> <br></br>{parseInt(MainStData.cases) - parseInt(MainStData.recovered) - parseInt(MainStData.deaths)}</td>
                                            <td className="main_confirmed_oo" id={`main_d`+i}> <span className="text-success main_confirmed">+ {MainStData.todayRecovered}</span><br /> {MainStData.recovered}</td>
                                            <td className="main_confirmed_oo"> <span className="text-dark main_confirmed">+ {MainStData.todayDeaths}</span> <br /> {MainStData.deaths}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-center" id={ `show_district`+i } > <Link to={"/distric/"+MainStData.state}  className="btn btn-primary btn_dist"  > View-district-wise </Link></p>
                            </div>
                        </div>
                    </div>
                ))

            ))
        }

        </>
    )
}
export default StateCard;