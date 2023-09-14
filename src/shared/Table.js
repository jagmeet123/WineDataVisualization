import React from 'react'
import { roundOff } from './helper';

const Table = ({title,classHeaders,wineData,statisticalHeaders}) => {
  return (
    <>
       <div className='table-heading'>{title}</div>
       <table>
        <thead>
          <th>
            Measures
          </th>
          {classHeaders?.length>0 && classHeaders?.map((header,idx)=>(
            <th key={idx}>
               Class {header}
            </th>
            )
          )}
        </thead>
        <tbody>
          {statisticalHeaders?.map((statics,idx)=>{
            const {key,header} = statisticalHeaders[idx];
            return (    
              <tr>
                <td>{header}</td>
                <td>{roundOff(wineData?.[0]?.[key])}</td>
                <td>{roundOff(wineData?.[1]?.[key])}</td>
                <td>{roundOff(wineData?.[2]?.[key])}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table