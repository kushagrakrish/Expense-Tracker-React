import "./App.css";
import AddTransaction from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TranscationList } from "./components/TranscationList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TranscationList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
