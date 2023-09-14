const StaticsParameters = {
    MEAN:'mean',
    MEDIAN:'median',
    MODE:'mode'
}

const statisticalHeaders = [{header:'Flavanoids Mean',key:StaticsParameters.MEAN},{header:'Flavanoids Median',key:StaticsParameters.MEDIAN},{header:'Flavanoids Mode',key:StaticsParameters.MODE}];

const gammastatisticalHeaders = [{header:'Gamma Mean',key:StaticsParameters.MEAN},{header:'Gamma Median',key:StaticsParameters.MEDIAN},{header:'Gamma Mode',key:StaticsParameters.MODE}];

export{
    statisticalHeaders,
    gammastatisticalHeaders
}