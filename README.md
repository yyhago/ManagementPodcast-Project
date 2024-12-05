# ManagementPodcast 🎙️📺

## Descrição
ManagementPodcast é uma API RESTful para gerenciamento e consulta de episódios de podcasts, oferecendo funcionalidades de listagem e filtragem.

## 🎯 Objetivo
Criar uma API robusta para organização e consulta de episódios de podcasts, permitindo filtros precisos e recuperação de informações.

## 🖼️ Screenshots

![Postman Filter](/pictureScreen/Filter.png)
![Postman List](/pictureScreen/List.png)

## ✨ Funcionalidades Principais
- Listagem completa de episódios
- Filtro por nome de podcast
- Categorização de podcasts

## 🚀 Estrutura de Dados
```typescript
interface PodcastModel {
    videoID: string;
    podcastName: string; 
    episode: string;
    coverImage: string;
    link: string;
    categories: string[];
}
```

## 🔍 Endpoints
- `GET /api/list`: Retorna todos os episódios
- `GET /api/episode?p=NomePodcast`: Filtra episódios por nome de podcast

## 🛠️ Tecnologias
- TypeScript
- Node.js
- Arquitetura REST

## 📦 Instalação
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm start`

## 📋 Configuração
- Defina a porta no arquivo `.env`
- Configure as variáveis de ambiente necessárias


## 🤝 Contribuições
Contribuições são bem-vindas. Por favor, abra uma issue ou envie um pull request.
```
