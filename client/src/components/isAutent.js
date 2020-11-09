



export default function isAutent(){
    return(
        //!! Bolean return true false
        !!localStorage.getItem('token')
    );
}

