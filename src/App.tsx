import ApplicationFormAttributes from "./components/ApplicationFormAttributes/ApplicationFormAttributes";
import ContextProvider from "./context/ContextProvider";

function App() {
    return (
        <>
            <ContextProvider>
                <ApplicationFormAttributes />
            </ContextProvider>
        </>
    );
}

export default App;
