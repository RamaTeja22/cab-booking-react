let riders = [];
let drivers = [];
let rides = [];

const MAX_PICK_UP_DISTANCE = 10;

export const registerRider = async(riderData) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!riderData?.name || !riderData?.email || !riderData?.phone){
                reject("All Fields are required");
                return;
            }
            const newRider ={
                id: riders.length +1,
                ...riderData
            }
            riders.push(newRider);
            resolve(newRider);
        },500)
    })
}

export const registerDriver = async(driverData) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(!driverData?.name || !driverData?.phone || !driverData?.vehicleNo){
                reject("Mandatory Fields cannot be empty")
                return;
            }
            const newDriver = {
                id: drivers.length + 1,
                ...driverData
            }
            drivers.push(newDriver);
            resolve(newDriver);
        },500)
    })
}

export const updateDriverLocation = async (driverId, newLocation) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const driver = drivers.find(d => d.id === driverId);
      if (!driver) {
        reject(new Error('Driver not found'));
        return;
      }
      driver.location = newLocation;
      resolve(driver);
    }, 500);
  });
};

export const toggleDriverAvailability = async (driverId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const driver = drivers.find(d => d.id === driverId);
      if (!driver) {
        reject(new Error('Driver not found'));
        return;
      }
      driver.available = !driver.available;
      resolve(driver);
    }, 500);
  });
};

export const getAvailableDrivers = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>
            resolve(drivers.filter(d=>d.available)),300)
    })
}

export const bookRide = async({riderId, x, y}) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const requestedRider = riders?.find((rider)=> rider.id === riderId)
            if(!requestedRider){
                reject('Rider Not Found')
                return;
            }

            const availableDrivers = getAvailableDrivers();

            const eligibleDrivers = availableDrivers?.map((driver)=>{
                const dx = driver.location.x - x
                const dy = driver.location.y - y
                const distance = Math.sqrt(dx*dx + dy*dy)
                return {...driver,distance}
            }).filter((driver)=>driver.distance<=MAX_PICK_UP_DISTANCE)

            if(eligibleDrivers.length === 0){
                reject(new Error('No available Drivers nearby'))
                return;
            }

            eligibleDrivers.sort((a,b)=>a.distance-b.distance)

            const selectedDriver = eligibleDrivers[0];
            selectedDriver.available = false;
            const newRide = {
                id: drivers.length + 1,
                riderId,
                driverId: selectedDriver.id,
                startTime: new Date(),
                endTime: null,
                startLocation: {x,y},
                endLocation : null
            }
            rides.push(newRide)
            resolve({ride: newRide, driver: selectedDriver})
        },800)
    })
}

export const endRide = async (rideId, endLocation) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ride = rides.find(r => r.id === rideId);
      if (!ride) {
        reject(new Error('Ride not found'));
        return;
      }
      if (ride.endTime) {
        reject(new Error('Ride already ended'));
        return;
      }

      ride.endTime = new Date();
      ride.endLocation = endLocation;

      // Mark driver as available again
      const driver = drivers.find(d => d.id === ride.driverId);
      if (driver) {
        driver.available = true;
      }

      resolve(ride);
    }, 500);
  });
};

export const getRideHistory = async (riderId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const riderExists = riders.some(r => r.id === riderId);
      if (!riderExists) {
        reject(new Error('Rider not found'));
        return;
      }

      const history = rides.filter(r => r.riderId === riderId);
      resolve(history);
    }, 300);
  });
};