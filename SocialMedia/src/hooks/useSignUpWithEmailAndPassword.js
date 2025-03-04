import auth from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            console.log("Please fill the fields")
            return
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && erroe){
                console.log(error)
                return;
            } 
            if(newUser){
                const userDoc={
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullname:inputs.fullname,
                    bio:"",
                    profileURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now(),
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

  return {loading,error,signup}
}

export default useSignUpWithEmailAndPassword