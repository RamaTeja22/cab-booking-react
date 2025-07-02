let riders = [];
let drivers = [];

export const registerRider = async(riderData) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!riderData.name || !riderData.email || !riderData.phone){
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