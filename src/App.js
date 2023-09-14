import './App.css';
import { useEffect, useState } from 'react';
import WineData from './dataSet/Wine-Data.json'
import { calculateGamma, getStatisticalMeasures, groupBy } from './shared/helper';
import Table from './shared/Table';
import { gammastatisticalHeaders, statisticalHeaders } from './shared/constants';

function App() {
  const [wineData,setWineData] = useState([]);
  const [wineGammaData,setWineGammaData] = useState([]);
  const [classHeaders,setClassHeaders] = useState([]);

  useEffect(()=>{
    if(WineData){
      let groupedWineData = groupBy(WineData,'Alcohol');

      setClassHeaders(Object.keys(groupedWineData));
 
      // Table 1
      const values = Object?.values(groupedWineData);
      const wineStatisticalMeasures = values?.map((data)=>{
        return getStatisticalMeasures(data,'Flavanoids');
      });

      setWineData(wineStatisticalMeasures);

      // Table 2
      const gammaStatisticalMeasures = values?.map((data)=>{
        const gammaData = calculateGamma(data);
        return getStatisticalMeasures(gammaData,'Gamma');
      });
      setWineGammaData(gammaStatisticalMeasures);
    } 
  },[]);

  return (
    <div className="App">
      <Table title="Table 1" classHeaders={classHeaders} wineData={wineData} statisticalHeaders={statisticalHeaders} />
      <Table title="Table 2" classHeaders={classHeaders} wineData={wineGammaData} statisticalHeaders={gammastatisticalHeaders} />
    </div>
  );
}

export default App;
