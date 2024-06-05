import cloudinary from "./cloudinary";



export const UploadImage = async(file:File,folder:string)=> {
    
    const bufffer = await file.arrayBuffer();
    const bytes = Buffer.from(bufffer);



  return  new Promise<any>(async(resolve,reject)=>{
       await cloudinary.uploader.upload_stream({
            resource_type: "auto",
            folder: folder,
        },async (err,result)=> {
            if(err){
               return reject(err.message);
            }
           return resolve(result);
        }).end(bytes);
    })
}
export const DeleteImage = async(public_id:string)=> {
    
 return new Promise<any>(async(resolve, reject) => {
    try {
        const result = await cloudinary.uploader.destroy(public_id) ;
        return resolve(result);
    } catch (error:any) {
        reject(new Error(error.message))
    }
 })
}