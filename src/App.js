import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importa o React Router para criar e gerenciar rotas entre páginas.
import Login from "./Login"; // Importa o componente de Login.
import Dashboard from "./Dashboard"; // Importa o componente de Dashboard.
function App() {
    return (
        <Router>
            {/* O Router encapsula todas as rotas da aplicação */}
            <Routes>
                {/* Define a rota para a tela de login */}
                <Route path="/" element={<Login />} />
                {/* Define a rota para a tela de dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}
export default App;
// Exporta o componente App para ser usado como ponto principal da aplicação.