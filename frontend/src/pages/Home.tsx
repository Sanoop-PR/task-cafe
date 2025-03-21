import MenuLists from '../components/MenuLists'
import Header from '../components/Header'
// import NavBar from '../components/NavBar'
import MenusSection from '../components/MenusSection'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            {/* <NavBar /> */}
            <Header />
            <MenuLists />
            <MenusSection />
            <Footer />
        </>
    )
}

export default Home