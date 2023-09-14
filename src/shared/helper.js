const groupBy = (arr, key) => {
    return arr?.reduce((grouped, item) => {
      const keyValue = item[key];
  
      if (!grouped[keyValue]) {
        grouped[keyValue] = [];
      }
  
      grouped[keyValue].push(item);
      return grouped;
    }, {});
}

function calculateGamma(dataset) {
    return dataset?.map((entry) => {
      const { Ash, Hue, Magnesium } = entry;
      const gamma = (Ash * Hue) / Magnesium;
      return { ...entry, Gamma: gamma };
    });
}

// Calculate mean
function calculateMean(classData,key){
    const count = classData.length;
    return classData.reduce((acc, currentVal) => acc + Number(currentVal[key]), 0) / count;
}

// Calculate median
function calculateMedian(classData,key){
    const count = classData.length;
    const sortedData = classData.sort((a, b) => Number(a[key]) - Number(b[key]));
    console.log('sortedData',sortedData.map((e)=> e[key]).join(','))
    return count % 2 === 0
        ? (sortedData[count / 2 - 1][key] + sortedData[count / 2][key]) / 2
        : sortedData[Math.floor(count / 2)][key];
}

// Calculate mode
function CalculateMode(classData,key){
    const modeMap = {};
    let mode = null;
    let maxCount = 0;
    classData.forEach((row) => {
      const value = row[key];
      if (!modeMap[value]) 
        modeMap[value] = 0;
      
      modeMap[value]++;
      if (modeMap[value] > maxCount) {
        maxCount = modeMap[value];
        mode = value;
      }
    });
    return mode;
}

const getStatisticalMeasures = (classData,key) => {
    const mean = calculateMean(classData,key);
    const median = calculateMedian(classData,key);
    const mode = CalculateMode(classData,key);
    return {
        mean,
        median,
        mode
    };
}

const roundOff = (value)=>{
   return Number(value)?.toFixed(3);
}

export {
    groupBy,
    getStatisticalMeasures,
    calculateGamma,
    roundOff,
}