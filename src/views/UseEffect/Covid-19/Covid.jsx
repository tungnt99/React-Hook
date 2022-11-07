import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/style.css'
import moment from 'moment';

export default function Covid() {
    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getDataCovid = async() => {
        // setTimeout(async() => {
            try{
            let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2022-11-06T00:00:00Z&to=2021-04-01T00:00:00Z')
            let data = res && res.data ? res.data : [];
            if(data && data.length>0){
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY');
                    return item;
                })
                data = data.reverse()
            }
            setDataCovid(data);
            setIsLoading(false);
            setIsError(false);
        }
        catch(e) {
            setIsError(true);
            setIsLoading(false);
        }
        // }, 3000)

    }
    getDataCovid();
    
}, [])
  return (

    <div className='container'>
        <h1>A Fancy Table</h1>

        <table id="customers">
            <thead>
                <tr>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody className='data-body'>
                {isError === false && isLoading === false && dataCovid && dataCovid.length>0 && dataCovid.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{item.Confirmed}</td>
                            <td>{item.Deaths}</td>
                            <td>{item.Active}</td>
                            <td>{item.Recovered}</td>
                            <td>{item.Date}</td>

                        </tr>
                    )
                })}
                {isLoading === true && <tr >
                    <td colspan='5' className='text-center'>Loading data...</td>
                    </tr>
                }
                   {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Something wrong... </td>
                        </tr>
                    }   

            </tbody>
       
        </table>

    </div>
  )
}
