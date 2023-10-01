import Navbar from "./components/Navbar/Navbar";
import { Layout } from "antd";
import "./App.css";
import Steps from "./components/Steps/Steps";
import ContextProvider from "./context/ContextProvider";
import Application from "./components/Application/Application";

function App() {
    return (
        <Layout className="app">
            <Navbar />
            <div className="container">
                <header className="header">
                    <Steps />
                </header>
                <main className="main">
                    <ContextProvider>
                        <Application />
                    </ContextProvider>
                </main>
            </div>
        </Layout>
    );
}

export default App;
