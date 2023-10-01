import Application from "./components/Application/Application";
import Navbar from "./components/Navbar/NavBar";
import { Layout, theme } from "antd";
const { Header } = Layout;
import "./App.css";

function App() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="app">
            <Navbar />
            {/* <Application /> */}

            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
            </Layout>
        </Layout>
    );
}

export default App;
