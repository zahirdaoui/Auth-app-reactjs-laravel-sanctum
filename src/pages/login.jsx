
import Button from "../components/button";
import Form from "../components/form"
import Input from "../components/input";
const Login =()=>{
    return <>
    <div className="login-page">
      
  <div className="form">

    <Form url="/register" method="post" className="login-form">

      <Input type="text"
             name="email" 
             placeholder="ex:email@example.com" 
             error="this field is required" 
             status={true}
      />

      <Input type="password" 
             name="password" 
             placeholder="password"
             error="this field is required" 
             status={true}
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