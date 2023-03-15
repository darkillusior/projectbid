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
    <div className="signup">
    <section>
    <div class="colour"></div>
    <div class="colour"></div>
    <div class="colour"></div>
    <div class="box">
        <div class="square" style={{"--i": "0"}}></div>
        <div class="square" style={{"--i": "1"}}></div>
        <div class="square" style={{"--i": "2"}}></div>
        <div class="square" style={{"--i": "3"}}></div>
        <div class="square" style={{"--i": "4"}}></div>
        <div class="container signup-container">
            <div class="form">
                <h2>Signup Form</h2>
                <form  onSubmit={handleSubmit} >
        <div className="input__box">
        <label  >Name</label>
        <input  name="name"
              value={name}
              onChange={handleChange} 
             className="input__box" type="text" placeholder="Email or Phone" id="username"/>
        </div>

        <div className="input__box">
        <label  >Email</label>
        <input  name="email"
              value={email}
              onChange={handleChange} 
              className="p-2 rounded-full mt-2 font-medium outline-none border focus:outline-none focus:ring focus:ring-violet-300  " type="text" placeholder="Email or Phone" id="username"/>
        </div>
        <div className="input__box">
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
          iconposition="left"
          type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
                placeholder="Password" id="password"/>
                  
                  </div>  </div>

                  <div class="input__box">
                        <input type="submit" value="Signup" />
                    </div>
          <div className="input__box">
            <div className="btn">
            <img src="/google.svg" alt="" />
              <span>Signup with Google</span>
            </div>
          </div>
        <p class="forget">
                        Forgot Password? <a href="#">Click Here</a>
                    </p>
                    <p class="forget">
                        Already have an account? <a href="/login">Sign In</a>
                    </p>
    </form>
            </div>
        </div>
    </div>
</section>
</div>
  
  )
}

export default signup