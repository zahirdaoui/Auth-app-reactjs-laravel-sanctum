import { useEffect, useState } from "react"
import api from "../hooks/axios";



const Profile=()=>{
    const [data , setData] = useState(null);

   /*  const fetchData =  */
    useEffect(()=>{
            const fetchProfile = async () => {
                try {
                const response = await api.get("profile");
                setData(response.data.data);
                console.log(response.data);
                } catch (err) {
                // Properly handle Axios errors
                console.log(err);
                }
            };

            fetchProfile(); 
    },[]);


    return <>
         <div>
            {console.log(localStorage.getItem("token"))}
            
 
                {data &&
                    <div className="card">
                        <i className="fas fa-arrow-left back-arrow"></i> 
                        <i className="fas fa-ellipsis-v three-dots"></i> 
                        <div className="name">Name: {data.name}</div>
                        <div className="name">Email : {data.email}</div>
                        <div className="name">Email verified at :{data.email_verified_at}</div>
                        <div className="name">Created at: {data.created_at}</div>
                        <div className="name">Updated at : {data.updated_at}</div>

                    </div>
                }
           </div>
    </>
}

export default Profile