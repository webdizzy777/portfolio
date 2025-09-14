import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <main className="flex-fill">
      <Home></Home>
      </main>s
      <Footer></Footer>
    </div>
  )
}

export default App
