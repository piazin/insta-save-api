# insta-save-api

## Descrição

Uma API simples para salvar reels do Instagram.

## Funcionalidades.

- Retornar link direto para download do vídeo.

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/insta-save-api.git`
2. Navegue até o diretório do projeto: `cd insta-save-api`
3. Instale as dependências: `pnpm install`

## Uso

1. Inicie o servidor: `pnpm run start:dev`
2. Faça uma requisição POST para `http://localhost:3000/reels` com o seguinte corpo:

```json
{
  "reelsUrl": "https://www.instagram.com/p/XXXXXXXXXXX/"
}
```

1. A resposta será um objeto JSON contendo o link direto para download do vídeo:

```json
{
  "reels": {
    "downloadLink": "https://www.instagram.com/p/XXXXXXXXXXX/download",
    "thumbnailLink": "https://www.instagram.com/p/XXXXXXXXXXX/download"
  }
}
```

## Licença

[MIT License](https://opensource.org/licenses/MIT).
