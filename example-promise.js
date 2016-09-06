//CALLBACK Example
function getWeather(location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getWeather('San Francisco', function(err, tempt){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', tempt)
  }
});
//PROMISE Example
function getWeatherPromise(location){
  return new Promise(function(reslove, reject){
    reslove(80);
    reject('City not exist');
  });
}

getWeatherPromise('San Francisco').then(function(tempt){
  console.log('success', tempt);
},function(err){
  console.log('error', err);
})

//Another Example of Promise with Addition
function addPromise(a,b){
  return new Promise(function(reslove,reject){
    if(typeof a ==='number' && typeof b === 'number'){
      reslove(a+b);
    }else{
      reject('A and B Should be numeric value')
    }
  });
}

//Test Positive case
addPromise(7,7).then(function(sum){
  console.log('Addition', sum);
}, function(err){
  console.log('Error', err)
})

//Test Negatice case
addPromise('A',7).then(function(sum){
  console.log('Addition', sum);
}, function(err){
  console.log('Error', err)
})

//Test advance numeric case
addPromise(-1,7.10).then(function(sum){
  console.log('Addition', sum);
}, function(err){
  console.log('Error', err)
})
