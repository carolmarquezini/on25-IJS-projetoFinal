const { Usuario } = require('./usuario');

class Arquiteto extends Usuario {
    cau;

    constructor(id, nome, cpf, telefone, email, cau) {
        super(id, nome, cpf, telefone, email)
        if(!id || !nome || !cpf || !telefone || !email || !cau) {
            throw new Error ("Dados inválidos!");
        }
        this.cau = cau;
    }

}

module.exports = {
    Arquiteto
}
