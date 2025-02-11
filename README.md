# Facilita Tasks

## Descrição
Esta é uma aplicação de lista de tarefas (To-Do List) desenvolvida com Vue.js 3 e Vuex, utilizando Stylus para estilização. O objetivo é permitir que os usuários gerenciem suas tarefas de forma eficiente, com funcionalidades como adição, edição, remoção, marcação como concluída e busca.

## Funcionalidades
- 📌 **Listar tarefas**
- ➕ **Adicionar nova tarefa**
- ✏️ **Editar tarefa**
- ❌ **Excluir tarefa**
- ✅ **Marcar como concluída**
- 🔍 **Buscar tarefas pelo título e descrição**
- 📌 **Ordenação por prioridade (Urgente, Importante e Outras)**
- 💾 **Persistência dos dados no LocalStorage**
- 📱 **Responsividade total**

## Tecnologias Utilizadas
- Vue.js 3 + Vite
- Vuex (Gerenciamento de estado)
- Stylus (Pré-processador CSS)
- ECMAScript 6+
- LocalStorage para armazenamento de dados

## Configuração do Projeto
### 1️⃣ Clonar o Repositório
```sh
git clone https://github.com/hpedrobs/facilita-tasks.git
cd facilita-tasks
```

### 2️⃣ Instalar Dependências
```sh
npm install
```

### 3️⃣ Rodar o Projeto
```sh
npm run dev
```
Acesse no navegador: `http://localhost:5173/`

### 4️⃣ Outros Comandos Úteis

```sh
# Build do projeto para produção
npm run build

# Pré-visualizar a build
npm run preview

# Executar testes unitários
npm run test:unit

# Executar linting e corrigir problemas
npm run lint
```

## Estrutura do Projeto
```
facilita-tasks/
│── src/
│   ├── assets/       # Arquivos de mídia e imagens
│   ├── components/   # Componentes reutilizáveis
│   ├── router/       # Configuração de rotas
│   ├── styles/       # Estilos com Stylus
│   ├── views/        # Páginas da aplicação
│   ├── App.vue       # Componente raiz
│   ├── main.js       # Arquivo principal
│── src/
│── store/            # Gerenciamento de estado 
│── public/           # Arquivos estáticos
│── package.json      # Dependências do projeto
│── vite.config.js    # Configuração do Vite
│── README.md         # Documentação do projeto
```

## Deploy
O projeto será hospedado e o link de visualização será disponibilizado em breve.

## Autor
Pedro Henrique
