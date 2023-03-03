import { useState, useEffect, useRef } from "react";
import { registerUser } from "../utils/authUser";

function signup() {

  const [user, setUser] = useState({
    name:"",
    email: "",
    password: ""
  });

  const { name,email, password } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async e => {
   
    e.preventDefault();

    await registerUser(user, setErrorMsg, setFormLoading);
  };
  return (

    <div className="bg-sky-900 flex justify-center m-0 items-center h-screen ">

    
  <div className='relative w-[45vh]   sm:w-[80vh]'>
  <div className="absolute top-0 left-0 rounded-br-full bg-gradient-to-tl  from-cyan-400 to-transparent w-32 h-32"></div>
  <div className=" absolute bottom-0 right-0 rounded-tl-full bg-gradient-to-b from-purple-400 to-transparent w-32 h-32 "></div>
  {/* <div className=" absolute border-4 border-solid border-violet-900 rounded-full w-full h-1/4 transform rotate-45 bottom-40 left-0 "></div>
  <div className=" absolute border-4 border-solid border-blue-600 rounded-full w-full h-[22%] transform rotate-45 bottom-[165px] left-0   "></div>
  <div className=" absolute border-4 border-solid border-green-700 rounded-full w-full h-[18%] transform rotate-45 bottom-[173px] left-0   "></div>
  <div className="absolute border-4 border-solid border-orange-600 rounded-full w-full h-[12%] transform rotate-45 bottom-[185px] left-0    "></div>
  <div className="absolute border-4 border-solid border-red-600 rounded-full w-full h-[8%] transform rotate-45 bottom-[194px] left-0  "></div>
  <div className="absolute border border-solid border-white rounded-full w-full h-[1px] transform rotate-45 bottom-[208px] left-0 bg-white "></div>
    */}
    <form      onSubmit={handleSubmit} className=' bg-opacity-10  flex flex-col justify-center  w-full h-full backdrop-blur border border-solid border-opacity-20 border-white rounded-lg px-14 py-5  bg-purple-400   '>
        <h3 className='font-medium text-base text-white '>Signup Here</h3>
        <label  >Name</label>
        <input  name="name"
              value={name}
              onChange={handleChange} 
              className="p-2 rounded-full mt-2 font-medium outline-none border focus:outline-none focus:ring focus:ring-violet-300  " type="text" placeholder="Email or Phone" id="username"/>

        <label  >Email</label>
        <input  name="email"
              value={email}
              onChange={handleChange} 
              className="p-2 rounded-full mt-2 font-medium outline-none border focus:outline-none focus:ring focus:ring-violet-300  " type="text" placeholder="Email or Phone" id="username"/>

        <label >Password</label>
       <div className="relative mt-2   rounded-full w-full">
       <img   onClick={() => setShowPassword(!showPassword)} className="absolute h-6 w-6 top-3 right-2 " src={showPassword?"/view.png":"hide.png"} />
        <input 
        className="p-2  w-full rounded-full font-medium outline-none border focus:outline-none focus:ring focus:ring-violet-300   " 
        name="password"
        icon={{
            name: "eye",
            circular: true,
            color: "teal",
            link: true,
            onClick: () => setShowPassword(!showPassword)
          }}
          iconPosition="left"
          type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
                placeholder="Password" id="password"/>
                  
                  </div>  

        <button className="bg-violet-500 mt-4 p-2 rounded font-medium hover:bg-violet-600 active:bg-blue-400 focus:outline-none focus:ring focus:ring-violet-300">Sign Up</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>  </div>
    </div>
  
  )
}

export default signup