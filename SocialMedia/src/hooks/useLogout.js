import { auth } from '../firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast'; 
import useAuthStore from '../store/authStore';

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore(state => state.logout)

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info')
            logoutUser();
            // showToast('', 'User is logged out.', "success")
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }
  return {handleLogout, isLoggingOut, error}
}

export default useLogout