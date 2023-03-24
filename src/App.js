import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/';
import Controls from './layouts/components/Controls';
import { privateRoutes } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {privateRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Comp = route.component;
                        return (
                            <Route
                                path={route.path}
                                key={index}
                                element={
                                    <div>
                                        <Layout>
                                            <Comp />
                                        </Layout>
                                        <div className="control_music">
                                            <Controls />
                                        </div>
                                    </div>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
