import React from "react";
// Importa o React.
function Dashboard() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Bem-vindo ao Dashboard!</h1>
            {/* Exibe uma mensagem de boas-vindas para o usuário */}
            <p>Você realizou login com sucesso.</p>
        </div>
    );
}
export default Dashboard;
// Exporta o componente Dashboard para ser usado no App.