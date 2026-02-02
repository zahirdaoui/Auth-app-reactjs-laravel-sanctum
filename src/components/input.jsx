
const Input =({type="text",name,placeholder ,error , status})=>{
    return <>
      <div>
       <input type={type} name={name} placeholder={placeholder}/>
       {status && <small className="text-danger">{error}</small>}
      </div>
    </>
}

export default Input