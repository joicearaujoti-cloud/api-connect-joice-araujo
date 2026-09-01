const { usuarios, adicionarUsuario } = require('../data/data');

// Criar usuário
const cadastrarUsuario = (req, res) => {
    const { nome, email } = req.body;

    // Validação
    if (!nome || !email) {
        return res.status(400).json({
            error: 'Os campos nome e email são obrigatórios.'
        });
    }

    const novoUsuario = adicionarUsuario(nome, email);

    res.status(201).json({
        data: novoUsuario
    });
};

// Listar usuários
const listarUsuarios = (req, res) => {
    res.status(200).json({
        data: usuarios
    });
};

// Buscar usuário por ID
const buscarUsuarioPorId = (req, res) => {
    const id = Number(req.params.id);

    const usuario = usuarios.find(usuario => usuario.id === id);

    if (!usuario) {
        return res.status(404).json({
            error: 'Usuário não encontrado.'
        });
    }

    res.status(200).json({
        data: usuario
    });
};

module.exports = {
    cadastrarUsuario,
    listarUsuarios,
    buscarUsuarioPorId
};