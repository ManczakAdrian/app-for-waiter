import AllTables from "./components/features/AllTables/AllTables";
import { Container } from "react-bootstrap";
import Footer from "./components/pages/Footer/Footer";
import NotFound from "./components/pages/Not Found/Not Found";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./components/views/Header/Header";


const App = () => {
  return (
    <main>
      <Container>

        <Header />
        <Routes>
          <Route path="/" element={<AllTables />} />
          <Route path="/table/:tableId" element={<UpdateTable />} />
          <Route path="/table/add" element={<AddTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Container>

    </main>


  );
}

export default App;
