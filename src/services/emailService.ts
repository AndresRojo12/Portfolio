import emailjs from "@emailjs/browser";

export const sendEmail = async (
  data:any
)=>{

  return emailjs.send(

    import.meta.env.VITE_EMAIL_SERVICE,

    import.meta.env.VITE_EMAIL_TEMPLATE,

    data,

    import.meta.env.VITE_EMAIL_PUBLIC_KEY

  );

};