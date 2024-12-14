import React, { useState, useEffect } from "react";

function App() {
    // Estado para armazenar a tarefa que está sendo digitada pelo usuário.
    const [tarefa, setTarefa] = useState("");
    // Estado para armazenar a lista de tarefas. Inicialmente, é uma lista vazia.
    const [listaTarefas, setListaTarefas] = useState([]);
    // useEffect para carregar as tarefas salvas no Local Storage quando o aplicativo inicia.
    useEffect(() => {
        const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
        // Recupera as tarefas do Local Storage e converte de string JSON para um array.
        if (tarefasSalvas) {
            setListaTarefas(tarefasSalvas); // Atualiza o estado com as tarefas recuperadas.
        }
    }, []);
    // A lista vazia `[]` faz com que o efeito seja executado apenas uma vez, ao carregar o componente
    
    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
        // Converte a lista de tarefas para JSON e a salva no Local Storage.
    }, [listaTarefas]);


    // O efeito será executado sempre que o estado `listaTarefas` mudar.
    // Função chamada quando o usuário clica no botão "Adicionar".


    const adicionarTarefa = () => {
        if (tarefa.trim() === "") {
            // Validação: Verifica se o campo está vazio ou contém apenas espaços.
            alert("Por favor, insira uma tarefa.");
            return;
        }
        // Adiciona a nova tarefa à lista de tarefas.
        setListaTarefas([...listaTarefas, tarefa]);
        // Limpa o campo de entrada após adicionar a tarefa.
        setTarefa("");
    };
    
    // Função para remover uma tarefa com base no índice.
    const removerTarefa = (index) => {
        const novaLista = listaTarefas.filter((_, i) => i !== index);
        // Cria uma nova lista, excluindo a tarefa no índice especificado.

        setListaTarefas(novaLista); // Atualiza o estado com a nova lista.
    };
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Lista de Tarefas</h1>
            {/* Campo de entrada para digitar uma nova tarefa */}
            <div>
                <input
                    type="text"
                    placeholder="Digite uma tarefa" // Texto exibido quando o campo está vazio
                    value={tarefa} // Valor do campo controlado pelo estado `tarefa`
                    onChange={(e) => setTarefa(e.target.value)} // Atualiza o estado `tarefa' ao digitar

                    style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
                />
                {/* Botão para adicionar a tarefa à lista */}
                <button
                    onClick={adicionarTarefa} // Chama a função `adicionarTarefa` ao clicar
                    style={{
                        marginLeft: "10px",
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Adicionar
                </button>
            </div>
            <h2>Suas Tarefas</h2>
            {/* Lista de tarefas */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {listaTarefas.map((item, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        {item}
                        {/* Exibe o nome da tarefa */}
                        <button
                            onClick={() => removerTarefa(index)} // Remove a tarefa ao clicar
                            style={{
                                marginLeft: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#f44336",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >

                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;