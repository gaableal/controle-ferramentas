# 🛠️ Sistema de Controle de Ferramentas

Este projeto é um sistema web desenvolvido para controle de ferramentas, permitindo o cadastro, consulta, edição e remoção de ferramentas, além de controle de usuários com autenticação.

## 📚 Tecnologias Utilizadas

- ✔️ **Frontend:** Angular (Standalone), TypeScript, HTML, SCSS, Bootstrap
- ✔️ **Backend:** Node.js, Express.js
- ✔️ **Banco de Dados:** MongoDB Atlas (Nuvem)
- ✔️ **Autenticação:** JWT (JSON Web Token)
- ✔️ **Deploy:** 
  - Frontend: [Vercel](https://vercel.com/)
  - Backend: [Render](https://render.com/)

## 🔐 Funcionalidades

- 🔑 Login e autenticação de usuários
- 🧑‍💼 Cadastro de usuários com senha criptografada
- 🛠️ Cadastro de ferramentas com nome, quantidade e imagem
- 📄 Listagem de ferramentas
- ✏️ Edição da quantidade de ferramentas
- ❌ Exclusão de ferramentas
- 🔒 Rotas protegidas, acessíveis apenas após login

## 🚀 Como Executar Localmente

### 🔧 Backend

1. Clone este repositório do backend:
```bash
git clone https://github.com/seu-usuario/backend.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env` com as informações:
```
MONGO_URI= sua-string-de-conexao-do-mongodb
JWT_SECRET= sua-chave-secreta
```

4. Execute o servidor:
```bash
node server.js
```

---

### 💻 Frontend

1. Clone este repositório do frontend:
```bash
git clone https://github.com/seu-usuario/frontend.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o frontend:
```bash
ng serve
```

Acesse no navegador:
```
http://localhost:4200
```

---

## 🌐 Deploy (Produção)

- 🔗 **Backend:** https://controle-backend-uo34.onrender.com
- 🔗 **Frontend:** https://frotend-m4m3.vercel.app

---

## 🎯 Melhorias Futuras

- 🔒 Reset de senha
- 📦 Upload de imagens para armazenamento externo
- 📊 Relatórios de uso de ferramentas
- ✅ Logout e expiração automática do token

---

## 🏆 Observação

Este sistema foi desenvolvido para uso interno na empresa, permitindo controle eficiente de ferramentas utilizadas no setor, com acesso restrito a usuários cadastrados.
