import React, { useState } from "react";
// Importa React e o Hook useState para gerenciar estados.
import { useNavigate } from "react-router-dom";
// Importa o Hook useNavigate para redirecionar o usuário para outras páginas.
function Login() {
    const [usuario, setUsuario] = useState("");
    // Estado para armazenar o nome de usuário digitado no campo de entrada.
    const [senha, setSenha] = useState("");
    // Estado para armazenar a senha digitada no campo de entrada.

    const [mensagem, setMensagem] = useState("");
    // Estado para armazenar mensagens de validação ou sucesso.
    const navigate = useNavigate();
    // Hook do React Router que permite redirecionar o usuário.
    const autenticar = () => {
        // Recupera as credenciais salvas no Local Storage.
        const credenciaisSalvas = JSON.parse(localStorage.getItem("credenciais")) || {};
        // Se não houver credenciais salvas, retorna um objeto vazio.
        // Verifica se o nome de usuário e senha correspondem às credenciais salvas.
        if (usuario === credenciaisSalvas.usuario && senha === credenciaisSalvas.senha) {
            setMensagem("Login realizado com sucesso!");
            // Exibe uma mensagem de sucesso se as credenciais forem válidas.
            // Redireciona para o Dashboard após 1,5 segundos.
            setTimeout(() => navigate("/dashboard"), 1500);
        } else {
            setMensagem("Usuário ou senha incorretos.");
            // Exibe uma mensagem de erro se as credenciais não forem válidas.
        }
    };
    const cadastrar = () => {
        if (usuario.trim() === "" || senha.trim() === "") {
            setMensagem("Por favor, preencha todos os campos.");
            // Exibe uma mensagem pedindo para preencher os campos caso estejam vazios.
            return;
            // Interrompe a execução da função.
        }
        // Salva as credenciais no Local Storage.
        localStorage.setItem("credenciais", JSON.stringify({ usuario, senha }));
        setMensagem("Usuário cadastrado com sucesso!");
        // Exibe uma mensagem de sucesso ao cadastrar.
    };
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Tela de Login</h1>
            <div style={{ marginBottom: "20px" }}>
                {/* Campo de entrada para o nome de usuário */}
                <input
                    type="text"
                    placeholder="Digite seu usuário"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    // Atualiza o estado `usuario` com o valor digitado no campo.
                    style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                />

                <br />
                {/* Campo de entrada para a senha */}
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    // Atualiza o estado `senha` com o valor digitado no campo.
                    style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                />
                <br />
                {/* Botão para autenticar o login */}
                <button
                    onClick={autenticar}
                    // Chama a função `autenticar` ao clicar no botão.
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginRight: "10px",
                    }}
                >
                    Login
                </button>
                {/* Botão para cadastrar um novo usuário */}
                <button
                    onClick={cadastrar}
                    // Chama a função `cadastrar` ao clicar no botão.
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#008CBA",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Cadastrar
                </button>
            </div>
            {/* Exibe a mensagem de validação ou sucesso */}
            {mensagem && (
                <p
                    style={{
                        color: mensagem.includes("sucesso") ? "green" : "red",

                        // Define a cor verde para mensagens de sucesso e vermelho para mensagens de erro.
                    }}
                >
                    {mensagem}
                </p>
            )}
        </div>
    );
}
export default Login;
// Exporta o componente Login para ser usado no App.