export const COMPANY_NAME = ""
export const MAIN_EMAIL = ""
export const LOCATION = "Hatheru Court, Lavington, Nairobi"
export const WHATSAPP_NUMBER = ""
export const PHONE_NUMBER = ""


export const signupFormFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
    },
    {
      name: "businessName",
      label: "Business Name",
      type: "text",
    },
    {
      label: "Business Code",
      name: "vendor",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
    },
  ] as {name:string,label:string,type:string}[];

  