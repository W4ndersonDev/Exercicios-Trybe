#Na trybe a gente aprende o controle de acesso aos arquivos unix, MAS.. pra simplificar esse conteudo temos a cauculadora de permições :lock_with_ink_pen:      
##Vamos lá :wink:.
- Primeiro para acessar outros tipos de informações de arquivos você tem algumas opções como, ls -l, ll, ls -la. etc.
as permiçoes serão imprimidas mais ou menos assim -rw-rw-r--
sendo
- r = read/ler que seria a visualização do arquivo, e seu valor numerico para a cauculadora de permiçoes 4.
- w = write/escrever que seria a edição modificação do arquivo, seu valor numerico 2.
- x = execute/execucão de arquivo, seu valor seria 1.(use o cd para executar um arquivo)
##O hifén no inicio significa que e um arquivo, ja o D seria um diretorio.
##A sequencia -/d = diretorio ou arquivo, rw- = 1 permição do usuario, rw- = 2 permição do grupo, r-- = 3 outros usuarios.
#Vamos ao cauculo :grinning:
- use o chmod e some os valores que será atribuido no usuario sendo usuario 1 grupo 2 outros 3.
exemplo para ler, escrever e executar a soma de todos os valores seria 7, e para o user ter todo o acesso ficaria assim.
- chmod 7
###E assim por diante, exemplo
- chmod 740 eu.txt seria -rwxrw----, nesse caso eu poderia executar, ler e editar o arquivo o grupo poderia ler e edidtar e os outros users não teriam acesso ao meu arquivo.
