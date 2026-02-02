
const Input =({type="text",change,name,placeholder ,error , status})=>{
    return <>
      <div>
       <input onChange={change} type={type} name={name} placeholder={placeholder}/>
       {status && <small className="text-danger">{error}</small>}
      </div>
    </>
}

export default Input