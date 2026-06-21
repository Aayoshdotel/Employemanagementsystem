import { useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStorage } from "./utils/localStorage"

function App(){
  const[ user, setUser ] = useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState(null)
  const [refresh, setRefresh] = useState(false);

 useEffect(()=>{
  const loggedinuser = localStorage.getItem('loggedinuser')
  if(loggedinuser){
    try {
      const userData = JSON.parse(loggedinuser)
      setUser({role: userData.role})

      if (userData.role === "employee") {
        const { Employees } = getLocalStorage()
        const employee = Employees.find((e) => {
          return e.email === userData.email || e.id === userData.data?.id
        })

        setLoggedInUserData(employee || userData.data)
      }
    } catch {
      localStorage.removeItem('loggedinuser')
    }
  }
 },[])

  const handleLogin = (email, password)=>{
    const { Employees, Admins } = getLocalStorage()

    const admin = Admins.find((e) => {
      return email === e.email && password === e.password
    })

    if(admin || (email === "admin@me.com" && password === "123")){
      setUser({role:'admin'})
      setLoggedInUserData(null)
      localStorage.setItem('loggedinuser', JSON.stringify({role:'admin'}))
    }
    else if(Employees){
      const employee = Employees.find((e)=>{
      return email === e.email && password === e.password
  })
      if(employee){
        setUser({role:'employee'})
        setLoggedInUserData(employee)
        localStorage.setItem('loggedinuser', JSON.stringify({role:'employee',email:employee.email}))
      } else {
        alert('invalid credencials')
      }
    }
    else{
      alert('invalid credencials')
    }

  }

  return (
  <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user.role === "admin" ? (
      <AdminDashboard refresh = {refresh} setRefresh = {setRefresh} changeUser = {setUser} data ={user.role}/>
    ) : (
      user.role === 'employee' ? <EmployeeDashboard refresh = {refresh} changeUser = {setUser} data = {loggedInUserData}/> : null
    )}
  </>
);
}
export default App
