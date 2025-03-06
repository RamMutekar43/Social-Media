import {toaster, Toaster} from '../components/ui/toaster'

const useShowToast = () => {

    const showToast = (title, description, type)=>{
        toaster.create({
            title : title,
            description : description,  
            type : type,
            duration : 9000,
            isClosable : true
        })
    }
  return showToast
}

export default useShowToast