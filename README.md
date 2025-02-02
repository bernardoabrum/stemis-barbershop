# Barbearia Stemis

## Após baixar o zip do projeto e estar no diretório "stemis-application", instale as dependências do projeto:
### (garanta que você tem o node instalado para poder usar o comando "npm")
```
npm install
```

### Acesse a url do vercel onde a aplicação está hospedada, pode ser qualquer uma destas:
```
https://stemis-application.vercel.app/authenticate
https://stemis-application-bernardo-brums-projects.vercel.app/
https://stemis-application-bernardoabrum-bernardo-brums-projects.vercel.app/
```

### O banco de dados é local pelo json-server, você precisa dele rodando para poder acessar:
#### (as url's estão configuradas na porta 3000)
```
json-server --watch db.json --port 3000

```

### Agora, você pode criar ou acessar uma conta pelo Vercel, lembrando que deixei uma conta com permissão de barbeiro (email: admin, senha: admin), para após ter alguns agendamentos como cliente, possa acessar, e manipular informações como os serviços.