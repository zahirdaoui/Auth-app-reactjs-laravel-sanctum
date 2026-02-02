const Form =({url,submitForm,method ,className,children})=>{
    return(
    <form action={url} onSubmit={submitForm} method={method} className={className}>
      {children}
    </form>
    );
}
export default Form