import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import UniversityPage from "./pages/UniversityPage";
import Popup from "./components/popup/Popup";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main>
          <UniversityPage/>
          <Popup />
      </Main>
    </div>
  );
}

export default App;
