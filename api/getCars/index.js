const cars = require('./cars.json');
module.exports = async function (context, req) {
    
    if(req.method==="GET"){
        context.res.json(cars);
        
    }
    
    else if (req.method==="POST"){
        if (req.headers.function === "addNewCar"){
            console.log(req);
            const newCar = req.body;
            console.log(newCar);
            cars.push(newCar);
            context.res.json(newCar);
        }
        else if (req.headers.function === "deleteCar"){
            const id = req.body.id;
            cars.splice(id, 1);
            context.res.json({ message: `Car with id ${id} deleted` });
        }
    }

    

}