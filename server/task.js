const { BmiChart } = require('./chartData');

function BmiComputation(data = []) {
    for (let ele of data) {
        const weightKg = Number(ele.WeightKg);
        const heightCm = Number(ele.HeightCm);
        if(!heightCm || !weightKg) {
          ele.status = 'Error';
          ele.message = 'Incomplete Data';
        } else if(heightCm < 0 || weightKg < 0) {
          ele.status = 'Error';
          ele.message = 'Invalid Data';
        } else {
          const BMI = weightKg / Math.pow((heightCm / 100), 2);
          ele.BMI = Number(BMI.toFixed(2));
          const selectedBmiObj =  BmiChart.find(e => {
            if(BMI >= e.from && BMI <= e.to) {
              return true;
            }
          });
          if(selectedBmiObj) {
            ele.category = selectedBmiObj.category;
            ele.healthRisk = selectedBmiObj.healthRisk;
          }
          ele.status = 'Success';
          ele.status = 'Success';
        }
    }
    return data;
}

process.on('message',(obj)=> {
    if(obj.message === 'start') {
        const result = BmiComputation(obj.data);
        process.send(result);
    }
})