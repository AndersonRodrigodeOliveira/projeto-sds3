import BarChart from "components/BarCharts/Index";
import DataTable from "components/DataTable/Index";
import DonatChart from "components/DonutChart/Index";
import Footer from "components/Footer/Index";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <DonatChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
