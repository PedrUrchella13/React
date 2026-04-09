//SERVIDOR DE CHAT EM TEMPO REAL
//esse servidor gerencia as conexões de usuários e distribui mensagens
//Tecnologias usadas:
//--Express: Framework web para http
//-Socket.io: Comunicação bidirecional em tempo reak via WebSocket

const app = required("express")(); //Importa a biblioteca Express
const server = require("http").createServer(app)//Importa o modulo http nativo do node.js - necessário para o funcionamento do Socket.io
const io = require("socket.io")(server, { //Importa o Socket.io e configura para o servidor
    // CORS (Cross-Origin resource Sharing): permite que clientes de outros domínios se conectem 
    //Altera o IP para o IP da máquina que esta rodando
    cors: { origin: "https://localhost:5173"} //
    //Exemplo: "http://localhost:5173"para desenvolvimento local
    //Exemplo: "http://ipmuitolegal:5173"para desenvolvimento local
})

const PORT = 3001; //Porta na qual o servidor recebe conexões

//EVENT LISTENER: Quando um cliente efetivamente se conecta
io.on("connection", (socket)=>{
    //"socket"representa a conexão de um único cliente
    //cada cliente que se conecta recebe um novo objeto "socket"
    //socket.id: ID único do cliente (gerado automaticamente)
    //socket.data: Objeto de armazenamento de dados do cliente (username,etc)
    socket.on("set_username", (username)=>{
        //Armazena o nome do usuário no objeto socket para uso posterior
        socket.data.username = username;
        //Registra no console que um usuário se conectou
        username(username, socket.id);
    });
    //Usuário se disconecta
    socket.on("disconnect", (reason) =>{
        console.log(`Usuário ${socket.data.username} desconectado! Sua ID era ${socket.id}`);
        console.log(`Motivo da desconexão: ${reason}`);
    });
    //Servidor recebe as mensagens
    socket.on("message", (text)=>{
        //Quando um cliente envia uma mensagem, o servidor:
        //1 - Cria um objeto com dados da mensagem
        //2 - Envia para todos os clientes conectados usando io.emit()
        //3 - Isso permite que todos vejam a mensagem em tempo real
        io.emit("receive_message", {
            text,
            authorId: socket.id,
            author: socket.data.username,
        });
        console.log(`Usuário ${socket.data.username} enviou uma mensagem`);
    })
});

//Registra no console quando um novo usuário se conecta
const userName = (username, id) => {
    console.log(`Usuário ${username} conectado com o seguinte Id: ${id}`);
};
//Iniciando o servidor
server.listen(PORT, () =>{
    console.log(`Servidor está ativo na porta ${PORT}`)
    console.log(`Cliente deve conectar em http://seu-ip:${PORT}`)
})