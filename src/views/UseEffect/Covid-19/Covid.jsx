import { useEffect, useState } from 'react';
import useFetch from '../../../customize/fetch';
import moment from 'moment';
import './css/style.css'
import { CountDown, NewCountDown } from '../Countdown/Countdown';
export default function Covid() {
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const priorDate = moment().subtract(30, 'days')
    const {data: dataCovid, isLoading, isError} = 
    // useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-12-02T00:00:00Z') //fix cứng
    useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`) //fix mềm

    const onTimesup = () => {
        alert('times up')
      }
  return (
    <>  
        <CountDown onTimesup={onTimesup} />
        <span>---------------------</span>
        <NewCountDown onTimesup={onTimesup} />
        <div className='container'>
            <h1>A Fancy Table Covid</h1>

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
    </>

  )
}
