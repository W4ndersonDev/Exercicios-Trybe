# Do git init ao git push :arrow_up:
como criar um repositorio git?? :thinking:
1. crie um diretorio(mkdir)
2. use o comando git init em seu repositorio(praticamente usaremos o git clone em outros casos, git init pode causr alguns problemas, então só usaremos aqui)
3. verifique se está tudo ok com o git status.
4. voce pode criar algum arquivo ou mover, depois de um git status que irá pedir pra voce adicionar esse arquivo com o git add"arquivo"
5. apos o git add que adicionará seus arquivos em stagiing, é agora você pode commitar esses arquivos com o git commit -m "mensagem de alteração".
extra ( não é possivel dar commit em diretorios vazios, variaçaõ do git add. adicionar todos arquivos do diretorio onde vc se encontra git add . git add especificado use o *)
#  Conectar o local com o remoto
### Use o git remote add origin "url do repositorio remoto por ssh" para conectar o local com o remoto.
sendo o origin sendo um apelido para seu repositorio remoto, para verificar se tudo deu certo use o git remote -v
sempre usar o git commit para salvar alguma alteração no local, depois disso use o git push, se for o primeiro push da branch use o git push origin master url.
