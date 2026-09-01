const usuarios = [];

let proximoId = 1;

const adicionarUsuario = (nome, email) => {
    const novoUsuario = {
        id: proximoId++,
        nome,
        email
    };

    usuarios.push(novoUsuario);

    return novoUsuario;
};

module.exports = {
    usuarios,
    adicionarUsuario
};