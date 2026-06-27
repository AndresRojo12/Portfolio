const onSubmit = async (
 data:ContactFormData
)=>{

 try{

   await sendEmail(data);

   reset();

 }catch(error){

   console.log(error);

 }

}