import { firestore, auth } from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { setDoc, doc, collection, getDocs, query, where} from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';


const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, , loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state =>  state.login)

    const signup = async (inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            showToast("Error", "Please fill all the fields", "error");
            return
        }

        const userRef =  collection(firestore,'users');
        const q = query(userRef, where("username", "==", inputs.username));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
            showToast("Error", "Username already exist.", "error");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                showToast("Error", error.message, "error")
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

                await setDoc(doc(firestore, 'users',newUser.user.uid),userDoc);
                localStorage.setItem("user-info",JSON.stringify(userDoc));
                loginUser(userDoc)
            }
        } catch (error) {
            showToast("Error", error.message, "error")
            console.log(error)
        }
    }

  return {loading,error,signup};
}

export default useSignUpWithEmailAndPassword;