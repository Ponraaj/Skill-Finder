import { createContext, useEffect, useState ,useContext} from "react"
import supabase from "../helpers/supabase"
import {  useNavigate } from "react-router-dom"

const AuthContext = createContext({
  session:null,
  user:null,
  signOut:()=>{}
})

export const AuthProvider = ({children})=>{
  const [user,setUser] = useState(null)
  const [session,setSession] = useState(null)
  const [loading,setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(()=>{

    const setData = async()=>{
      const {data:{session},error} = await supabase.auth.getSession();
      if(error) throw error
      
      setSession(session)
      setUser(session?.user)
      setLoading(false)
    }

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user)
      setLoading(false)
  });

  setData()

  return ()=>{
    listener.subscription.unsubscribe()
  }

  },[])

  const value={
    session,
    user,
    signOut:  ()=> {
      
      supabase.auth.signOut()
      localStorage.clear()
      navigate('/login')
    }
  }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
);
}

export const useAuth = () => {
  return useContext(AuthContext);
};