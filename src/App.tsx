import Application from "./components/Application/Application";
import Navbar from "./components/Navbar/Navbar";
import { Layout } from "antd";
import "./App.css";
import Steps from "./components/Steps/Steps";

function App() {
    return (
        <Layout className="app">
            <Navbar />
            <div className="container">
                <header className="header">
                    <Steps />
                </header>
                <main className="main">
                    <Application />
                </main>
            </div>
        </Layout>
    );
}

export default App;
