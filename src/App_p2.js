import React, { useState } from "react";
// Importa React e o Hook `useState` para gerenciar os estados dos campos.
function App() {
    // Estado para armazenar o nome de usuário digitado no campo de entrada.
    const [usuario, setUsuario] = useState("");
    // Estado para armazenar a senha digitada no campo de entrada.
    const [senha, setSenha] = useState("");
    // Estado para armazenar a mensagem de validação ou sucesso.
    const [mensagem, setMensagem] = useState("");
    // Função chamada quando o usuário clica no botão de login.
    const autenticar = () => {
        // Recupera as credenciais salvas no Local Storage.
        const credenciaisSalvas = JSON.parse(localStorage.getItem("credenciais")) || {};
        // Se não houver credenciais salvas, retorna um objeto vazio.
        // Verifica se o nome de usuário e a senha fornecidos correspondem aos valores salvos.
        if (usuario === credenciaisSalvas.usuario && senha === credenciaisSalvas.senha) {
            setMensagem("Login realizado com sucesso!");
            // Exibe uma mensagem de sucesso se as credenciais forem válidas.
        } else {
            setMensagem("Usuário ou senha incorretos.");
            // Exibe uma mensagem de erro caso as credenciais não correspondam.
        }
    };
    // Função chamada quando o usuário clica no botão de cadastro.
    const cadastrar = () => {
        // Verifica se os campos de usuário ou senha estão vazios.
        if (usuario.trim() === "" || senha.trim() === "") {
            setMensagem("Por favor, preencha todos os campos.");
            // Exibe uma mensagem pedindo para preencher os campos.
            return;
            // Interrompe a execução da função se houver campos vazios.
        }
        // Salva as credenciais no Local Storage como um objeto JSON.
        localStorage.setItem("credenciais", JSON.stringify({ usuario, senha }));
        setMensagem("Usuário cadastrado com sucesso!");
        // Exibe uma mensagem de sucesso ao cadastrar o usuário.
    };
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Tela de Login</h1>

            <div style={{ marginBottom: "20px" }}>
                {/* Campo de entrada para o nome de usuário */}
                <input
                    type="text" // Define o tipo de entrada como texto.
                    placeholder="Digite seu usuário" // Texto exibido quando o campo está vazio.
                    value={usuario} // Controla o valor do campo com o estado `usuario`.
                    onChange={(e) => setUsuario(e.target.value)}
                    // Atualiza o estado `usuario` sempre que o valor do campo muda.
                    style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                />
                <br />
                {/* Campo de entrada para a senha */}
                <input
                    type="password" // Define o tipo de entrada como senha (oculta os caracteres).
                    placeholder="Digite sua senha" // Texto exibido quando o campo está vazio.
                    value={senha} // Controla o valor do campo com o estado `senha`.
                    onChange={(e) => setSenha(e.target.value)}
                    // Atualiza o estado `senha` sempre que o valor do campo muda.
                    style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                />
                <br />
                {/* Botão para autenticar o login */}
                <button
                    onClick={autenticar}
                    // Chama a função `autenticar` quando o botão é clicado.
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50", // Cor de fundo verde.
                        color: "white", // Texto branco.
                        border: "none", // Remove a borda padrão.
                        borderRadius: "5px", // Bordas arredondadas.
                        cursor: "pointer", // Exibe um cursor de ponteiro ao passar o mouse.
                        marginRight: "10px", // Espaçamento entre os botões.
                    }}
                >
                    Login
                </button>
                {/* Botão para cadastrar novo usuário */}
                <button
                    onClick={cadastrar}
                    // Chama a função `cadastrar` quando o botão é clicado.
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#008CBA", // Cor de fundo azul.
                        color: "white", // Texto branco.
                        border: "none", // Remove a borda padrão.
                        borderRadius: "5px", // Bordas arredondadas.
                        cursor: "pointer", // Exibe um cursor de ponteiro ao passar o mouse.
                    }}

                >
                    Cadastrar
                </button>
            </div>
            {/* Exibe a mensagem de validação ou sucesso */}
            {mensagem && ( // Renderiza a mensagem apenas se houver conteúdo em `mensagem`.
                <p
                    style={{
                        color: mensagem.includes("sucesso") ? "green" : "red",
                        // Define a cor verde para mensagens de sucesso e vermelho para erros.
                    }}
                >
                    {mensagem}
                </p>
            )}
        </div>
    );
}
export default App;