let riders = [];
let drivers = [];

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

// src/services/api.js

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