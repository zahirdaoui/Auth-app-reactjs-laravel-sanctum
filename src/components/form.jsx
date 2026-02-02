const Form =({url,method , callBack,className,children})=>{
    return(
    <form action={url} method={method} className={className}>
      {children}
    </form>
    );
}

export default Form