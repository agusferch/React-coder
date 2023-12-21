import NavBarComponent from "../components/NavBarComponents/NavBarComponent"

const MainLayout = ({children}) => {
return (
    <div style={{width:'100vw', height:'100vh'}}>
        <NavBarComponent/> 
        {children}
        <footer>Este es el footer</footer>
    </div>
)
}

export default MainLayout