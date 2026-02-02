import Form from "../components/form";
import Button from "../components/button";
import Input from "../components/input";



const Register =()=>{
    return <>
      <div className="register-page">
      <div className="form">
        <Form method="post" className="register-form">
          <Input type="email"
             name="email" 
             placeholder="Ex:email@example.com" 
             error="This field is required" 
             status={true}
          />

          <Input type="email"
             name="Confirm email" 
             placeholder="Ex:email@example.com" 
             error="This field is required" 
             status={true}
          />

          <Input type="password" 
                name="Password" 
                placeholder="password"
                error="This field is required" 
                status={true}
          />

          <Input type="password" 
                name="Confirm_password" 
                placeholder="confirm your password"
                error="This field is required" 
                status={true}
          />

          <Button type={"submit"} 
                  text={"Register"}
          />
        </Form>
        <p className="message">Already registered? <a href="login">Sign In</a></p>
      </div>
</div>
    </>
}

export default Register;