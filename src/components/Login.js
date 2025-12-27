import { checkValidData } from "../utils/vaildate.js";
import Header from "./Header.js";
import{ useState , useRef} from "react";
import { auth } from "../utils/firebase.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { BG_URL, USER_AVATAR } from "../utils/constants.js";

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage]= useState(null);
   
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
 
  const dispatch = useDispatch();



  const handleButtonClick =()=>{
    //validate the dorem data 
    //checkvalidateDAta
     
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value , password.current.value);
    setErrorMessage(message);
    if(message) return ;

    if(!isSignInForm){
      //sign Up logic 
      createUserWithEmailAndPassword(auth, 
        email.current.value,
        password.current.value)
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
  displayName:name.current.value ,
   photoURL: USER_AVATAR,
}).then(() => {
   const {uid , email , displayName , photoURL} = auth.currentUser;
   dispatch(
    addUser({
      uid:uid,
      email:email,
      displayName:displayName,
      photoURL:photoURL
    })
  );
    
}).catch((error) => {
 setErrorMessage(error.message);
});
  })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    
   });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
}
  }
   const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <img
        src={BG_URL}
        alt="logo"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
      <form onSubmit={(e)=> e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl text-white mb-2 m-4">{isSignInForm ? " Sign In" : " Sign Up"}</h1>
         {!isSignInForm && (<input
         ref={name}
            type="text"
            placeholder="full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />)}
          <input
          ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
         
          <input 
          ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? " Sign In" : " Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up " : " Already registered ? Sign In Now"}</p>
        </form>
      
    </div>
  );
};

export default Login;