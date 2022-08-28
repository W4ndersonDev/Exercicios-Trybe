# Baixar repositorios online com o git clone.

### Caso queira copiar repositorios gits já criados no git-hub, existe um comando chgamado git-clone que irá fazer isso por você, a sintaxe desse codigo é essa:
- git clone url(do repositorio git, recomendamos a chave ssh)

# Git log & Git Remove.
 - git log = esse comando serve para ver o historico de modificações do repositorio git.
 - git remove(rm) = para remover um arquivo git 
 ### Para restaurar algo que já foi removido.
 git log --diff-filter=D --summary.
 Apśo o comando pegar o nome do commit que você quer restaurar, os 4 primeiros caracteres.
 Agora use o git checkout 3243(os 4 primeiros numeros)~1
 s