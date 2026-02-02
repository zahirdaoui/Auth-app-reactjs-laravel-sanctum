
import { useState } from "react";
import Button from "../components/button";
import Form from "../components/form"
import Input from "../components/input";
import api from "../hooks/axios";
const Login =()=>{
    const [values , setValues] = useState({email:"" , password:""});
    const [errors , setErrors]= useState({});
    
    function validate(){
      const errs = {};
      if(!values.email) errs.email ="Email is required";
      if(!/\S+@\S+\.\S+/.test(values.email)) errs.email = "Invalid email";
      if (values.password.length < 6) errs.password = "Min 6 chars";
      setErrors(errs);
      return Object.keys(errs).length === 0;
    }

    async function handleSubmit(e){
      e.preventDefault();
      console.log("hello daoui");
      console.log(errors);
      console.log(values);
      if(!validate())return;
      try{
        const response = await api.post("login",values);
        console.log(response.data);
      }catch(err){
        if(err.email) setErrors({...errors,email:err.email})
            /* if (err.response && err.response.data) {
              console.log("Server error message:", err.response.data.error); // <- your message
              return err.response.data.error;
            } else {
              console.log("Network or other error:", err.message);
              return err.message;
            } */
      }

    }
    return <>
    <div className="login-page">
      
  <div className="form">

    <Form submitForm={handleSubmit} url="" method="post" className="login-form">
      <Input type="text"
             name="email" 
             placeholder="ex:email@example.com" 
               error={errors.email} 
             status={errors.email}
             change={(e)=>{setValues({...values,email:e.target.value})}}
      />

      <Input type="password" 
             name="password" 
             placeholder="password"
               error={errors.password} 
             status={errors.password}
             change={(e)=>{setValues({...values,password:e.target.value})}}
      />

      <Button type={"submit"} 
              text={"login"}
      />
     </Form>
    <p className="message">Not registered? <a href="/register">Create an account</a></p>
  </div>
</div>
    </>
}

export default Login;