# Assessment - 1 and 2
- product catalog for a car dealership  - BMI

# Client
Step 1
```
npm i
```
Step 2
```
npm start
```

# Server
Step 1
```
cd /server
```

Step 2
```
npm i
```

Step 3
```
npm strat
```

Endpoint
```
Post http://localhost:3001/bmi
```
Request Body 
```
{
	"data": [{
		"Gender": "Male",
		"HeightCm": 171,
		"WeightKg": 96
	}, {
		"Gender": "Male",
		"HeightCm": 161,
		"WeightKg": 85
	}, {
		"Gender": "Male",
		"HeightCm": 180,
		"WeightKg": 77
	}, {
		"Gender": "Female",
		"HeightCm": 166,
		"WeightKg": 62
	}, {
		"Gender": "Female",
		"HeightCm": 150,
		"WeightKg": 70
	}, {
		"Gender": "Female",
		"HeightCm": 167,
		"WeightKg": 82
	}, {
		"Gender": "Male",
		"HeightCm": 180,
		"WeightKg": 79
	}]
}
```

Response
```
{
    "status": "Success",
    "result": [
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96,
            "BMI": 32.83,
            "category": "Moderately obese",
            "healthRisk": "Medium risk",
            "status": "Success"
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85,
            "BMI": 32.79,
            "category": "Moderately obese",
            "healthRisk": "Medium risk",
            "status": "Success"
        },
        {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 77,
            "BMI": 23.77,
            "category": "Normal weight",
            "healthRisk": "Low risk",
            "status": "Success"
        },
        {
            "Gender": "Female",
            "HeightCm": 166,
            "WeightKg": 62,
            "BMI": 22.5,
            "category": "Normal weight",
            "healthRisk": "Low risk",
            "status": "Success"
        },
        {
            "Gender": "Female",
            "HeightCm": 150,
            "WeightKg": 70,
            "BMI": 31.11,
            "category": "Moderately obese",
            "healthRisk": "Medium risk",
            "status": "Success"
        },
        {
            "Gender": "Female",
            "HeightCm": 167,
            "WeightKg": 82,
            "BMI": 29.4,
            "category": "Overweight",
            "healthRisk": "Enhanced risk",
            "status": "Success"
        },
        {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 79,
            "BMI": 24.38,
            "category": "Normal weight",
            "healthRisk": "Low risk",
            "status": "Success"
        }
    ]
}
```
