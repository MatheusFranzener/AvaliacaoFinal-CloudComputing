let listaUsuarios = [];

async function listarUsuarios() {
    return listaUsuarios;
}

async function cadastrarUsuario(dados) {
    listaUsuarios.push(dados);
    return dados;
}

function verificarLogin(dados) {
    let idUsuario = dados.idUsuario;
    let senha = dados.senha;

    if (listaUsuarios.length != 0) {
        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].id == idUsuario) {
                if (listaUsuarios[i].senha == senha) {
                    console.log("Usuário: ", listaUsuarios[i]);
                    return true;
                }
            }
        }
    }

    return false;
}

module.exports = {
    listarUsuarios,
    cadastrarUsuario,
    verificarLogin
}