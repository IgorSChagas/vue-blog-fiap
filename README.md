# 📝 Vue Blog - PrimeVue + Vite

Este é um projeto de blog front-end construído com [Vue 3](https://vuejs.org/), utilizando [Vite](https://vitejs.dev/) como bundler, [PrimeVue](https://primevue.org/) como biblioteca de UI e [Tailwind CSS](https://tailwindcss.com/) para estilização utilitária.  
A proposta do projeto é exibir posts de forma organizada e responsiva com design moderno, utilizando componentes de UI reutilizáveis como _Accordion_ para facilitar a leitura.

---

## 🚀 Funcionalidades

- Listagem de posts simulada a partir de dados locais.
- Cada post é exibido em um **Accordion** com título e descrição.
- Navegação para a página do post (estrutura preparada).
- Visual moderno e responsivo com **PrimeVue Theme Aura**.
- Estrutura ideal para expansão com API ou CMS.

---

## 📦 Tecnologias utilizadas

| Tecnologia   | Finalidade                            |
| ------------ | ------------------------------------- |
| Vue 3        | Framework principal                   |
| Vite         | Bundler moderno e rápido              |
| PrimeVue     | Componentes UI acessíveis e elegantes |
| PrimeIcons   | Ícones utilizados nos botões e UI     |
| Tailwind CSS | Estilização responsiva e utilitária   |
| Vue Router   | Gerenciamento de rotas                |

---

## ✅ Pré-requisitos

- Node.js `>= 18.x`
- Yarn ou NPM instalados
- Git (opcional, mas recomendado)

---

## 🛠️ Instalação e uso

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/vue-blog-primevue.git
cd vue-blog-primevue
```

### 2. Instale as dependências

```bash
# Usando Yarn
yarn install

# ou usando NPM
npm install
```

### 3. Rode o projeto localmente

```bash
yarn dev
# ou
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 🧱 Estrutura de Pastas

```
src/
├── components/       # Componentes reutilizáveis (como PostCard.vue)
├── screens/          # Telas principais (ex: Home.vue)
├── router/           # Arquivo de rotas
├── data/             # Simulação de dados (posts.js)
├── App.vue           # Componente raiz
├── main.js           # Ponto de entrada da aplicação
```

---

## 🔗 Deploy

Este projeto pode ser facilmente publicado com [Vercel](https://vercel.com/) ou [Netlify](https://netlify.com/).

### Exemplo com Vercel:

- Faça login em https://vercel.com/
- Clique em **New Project** e importe o repositório do GitHub
- Defina:
  - **Framework Preset:** Vite
  - **Build Command:** `vite build`
  - **Output Directory:** `dist`
- Clique em **Deploy**

---

## 📄 Licença

Este projeto está sob a licença MIT.
