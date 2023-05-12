# Pong

O PONG (Plataforma Online de Games), como o próprio nome propõe, é uma plataforma de jogos, na qual o usuário pode, dependendo do game, jogar tanto no próprio navegador, quanto pode baixar o game para uso em sua máquina.

A plataforma possui games para mobile e PC, tanto gratuitos quanto pagos.

Ademais, o PONG possui um sistema de streaming, no qual usuários podem fazer live de gameplay e, obviamente, assistir.

Responsáveis:
- Monique
- Thayane
- Thiago
- Adriano Padovesi
- Gustavo Henrique
- Gustavo Formagio

--------
## Table of Contents

- [Dev Guide](#dev-guide-)
  - [Git and Github](#git-and-github)
    - [What is Git](#what-is-git)
    - [What is GitHub](#what-is-github)
    - [Git Essentials](#git-essentials)
  - [Starting a screen development](#starting-a-screen-development)
  - [Color system](#color-system)
    - [CSS Variables](#css-variables)
    - [Background](#background)
    - [Text](#text)
    - [General Components](#general-components)
  - [Text Font](#text-font)
--------

# Dev Guide </>

## Git and Github

### What is Git
Git é uma ferramenta de controle de versões de arquivo. Com ele, cada desenvolvedor de um time pode fazer alterações nos mesmos arquivos do projeto concomitantemente, sem remover ou mudar o que o outro dev alterou/está alterando.

Além disso, o Git mostra algo parecido com um histórico de alterações, o que possibilita ter registrado o que foi editado no código, quando e por quem. Assim, há um "controle de versionamento" super simples e fácil do código do projeto.

### What is GitHub
O GitHub é um repositório de projetos gerenciados com Git, mas também pode ser chamado de "rede social dos desenvolvedores". Na prática, pode ser interpretado apenas como uma interface gráfica para visualizar o que foi feito com o Git e, assim, administrar, rastrear e colaborar melhor nas alterações dos projetos. 

Seguindo essa lógica, é possível ter uma visão melhor das "branches" criadas, dos "commits" dados, também criar "pull requests" e, por exemplo, pode-se comparar o código de momentos (versões) diferentes. 

Tal como dito anteriormente, o GitHub serve apenas para uma visualização gráfica melhor. Portanto, ele não é a única ferramenta que poderia ser usada para isso. Tentando trazer para uma analogia de fotos, é como se o código fosse imagens, o Git fosse o jeito de salvar e de manter um histórico dessas imagens após serem editadas e, por fim, o GitHub seria apenas um "visualizador" das imagens, tal como sua própria galeria, ou o Google Photos, por exemplo, no qual é possível "administrar" as imagens apagando, editando, compartilhando somente para pessoas específicas e etc.

### Git Essentials
Alguns conceitos de Git e de desenvolvimento em equipe importantes para saber inicialmente são:
- **Commit**: é o ato de salvar/registrar suas alterações **na máquina local**. É esse 'salvamento' que ficará no histórico de commits, ou histórico de alterações.
- **Revert**: é o ato de reverter um commit, desfazendo as alterações realizadas nele.
- **Push**: é o ato de "fazer o upload" dos seus commits para o repositório e deixá-las públicas para os outros devs verem. 
- **Branch**: é uma versão do código. Você pode criar a própria branch e todas as suas alterações ficarão somente nessa sua branch, até o momento em que você "mergear" em outra branch.
- **Merge**: é a mesclagem de branches. Um momento em que pega-se uma versão do código e junta com outra versão, criando assim uma única versão unificada, com tudo o que as outras tinham individualmente.
- **Pull**: é o ato de atualizar a branch em que você está, puxando todos os novos commits que não tem na máquina local. Imagine que você clonou uma branch há 1 semana e que, nesse interim, alguém já realizou alguns commits. Dando um pull, tais commits são trazidos, deixando a branch local atualizada com a branch do repositório.
- **Pull Request**: representa um "pedido" de merge entre branches. Tal pedido é avaliado pelos outros devs do time e, caso eles aprovem, o merge é feito.
- **Code Review**: é a revisão de código do outro dev. Após o desenvolvimento, é necessário gerar uma "PR" (pull request) para os outros devs do time avaliarem o código e pontuarem os devidos ajustes ou sugestões. Tendo realizado os ajustes, o código é aprovado para merge.

Para começar a usar o Git, é necessário fazer a instalação. Basta pesquisar, por exemplo, 'git download' no google, abrir o site e escolher a versão mais adequada para o seu sistema operacional.

Passado o processo de instalação, apenas para confirmar que de fato instalou, abra o CMD ou o Powershell e digite ``git --version``.

Caso dê algum erro, é porque não está instalado. Caso tenha dado tudo certo, então é hora de configurar a sua conta do GitHub no Git. Para tal, execute os seguintes comandos:
```powershell
echo 'A flag --global serve para configurar a conta na máquina inteira, ao invés de somente no diretório em que está'
git config --global user.mail 'email-do-github@example.com'
git config --global user.name 'Nome de usuário da tua conta do GitHub'
```
Ainda não é necessário providenciar a senha, mas eventualmente, provavelmente na hora de clonar o repositório privado do PONG, será necessário realizar o login completo.

O passo seguinte é o de "clonagem" do repositório. Para isso, execute:
```powershell
git clone <link http ou ssh pego no repositório>
```
Então, para criar a própria branch e entrar nela, execute:
```powershell
echo 'Para apenas visualizar a branch em que está atualmente:'
git branch

echo 'Criar a branch:'
git branch <nome-da-sua-branch>

echo 'Entrar na branch criada:'
git checkout <nome-da-sua-branch>

echo 'Ou criar e entrar de uma vez':
git checkout -b <nome-da-sua-branch>
```
Apenas para confirmar se entrou na branch certa, execute um ``git branch`` novamente.
Feito isso, altere, adicione ou remova algo do código para usar como exemplo de alteração para commit.

Para ver o status das alterações até então feitas e rastreadas, execute ``git status``. Este comando lhe mostrará quais arquivos foram adicionados/removidos/alterados e quais alterações já foram commitadas.

Agora é o momento de salvar as alterações e mandá-las para o repositório:
```powershell
echo 'Deixar todos os arquivos da pasta atual (o ponto significa pasta atual) prontos para commit'
git add .

echo 'Salvar os arquivos alterados no Git local.
	  A flag -m serve para descrever o commit'
git commit -m 'Descrição do commit'

echo 'Salvar os arquivos no Git do GitHub, ou seja, no repositório'
git push origin <nome-da-sua-branch>
```
Et voilà ! A branch com as alterações agora se encontra no GitHub!

## Starting a screen development

Para iniciar a criação de uma nova página, é recomendado o fazer na sua própria branch. Então, caso ainda não tenha clonado, clone o repositório do GitHub, execute os comandos para criar e entrar na sua branch e siga os próximos passos:

Dentro do diretório 'pages', há o arquivo 'template.html'. Tal arquivo é usado como base para o desenvolvimento das telas, pois ele possui a navbar e footer padrão.

Caso seja necessário criar arquivos .js ou .css para a página em desenvolvimento, a criação deve ser feita na devida **pasta de css e javascript encontrada em './assets'**. Além disso, também é recomendado **usar o mesmo nome para todos os arquivos**, de modo que não haja confusão posteriormente. Portanto, caso, por exemplo, o nome do arquivo da página seja 'pagina.html', o .js e .css são, respectivamente, 'pagina.js' e 'pagina.css' (siga o exemplo do index.html).

A estilização dos componentes das telas deve seguir o padrão da PONG. Os components são majoritaritamente arredondados. A seção [Color system](#color-system) tem o detalhamento de como usar as cores certas em cada situação.

De maneira geral, os principais componentes – como buttons, inputs, divs e texts – , possuem/possuirão estilos padronizados por classes usadas em todo o projeto.

## Color system
### CSS Variables

As variáveis citadas nesta seção são encontradas no './assets/css/template.css'

ㅤA organização das variáveis de cores foi feita de modo a flexibilizar uma eventual implementação da feature de dark/light mode switch. Desse modo, segue a explicação do funcionamento delas:

ㅤ**As com sufixo 'dark' ou 'light' na verdade são constantes**, elas não variam. Isso porque representam  as cores que foram definidas pelos designers para serem usadas no app. Desse modo, tais constantes apenas serão o valor das variáveis principais, que por sua vez variarão de acordo com o theme switching.

ㅤAdemais, é necessário supracitar que **apenas deve-se usar as variáveis sem sufixo (as principais)** como cores de componentes, pois são as únicas que de fato variam de acordo com o tema.

Exemplo prático: 

```css
/* Esta é a cor 'third', que contém o valor da cor com terceiro grau de destaque */
--third: var(--third-dark);

/* A cor 'third' tem duas variações, a dark e a light */
--third-dark: #171a21;
--third-light: #e1e1e1;

/* No momento de definir a cor da navbar e da sidebar, por exemplo, caso queira colocar como third, 
então deve-se utilizar a própria variável third, não a third-dark ou third-light diretamente */
.navbar { background-color: var(--third); }
.sidebar { background-color: var(--third); }

/* Isso porque, ao usar a third, como ela atualmente contém o valor da third-dark,
indiretamente o background se torna dark. Caso o tema mude para light, bastaria apenas mudar 
via JavaScript o valor da --third para third-light
*/
--third: var(--third-light);

/* Assim, mudando para third-light, tanto a navbar quanto a sidebar, que usam
a --third, mudariam simultaneamente para light. Desse modo, não é necessário mudar
individualmente o background de cada um que usa a cor third por causa da troca de tema.
Portanto, se todos usam a mesma variável, basta mudar esta única que o tema muda para todos de uma vez.
*/
```

### Background
As cores de 'bg' são usadas para dar cor ao fundo geral. Portanto, dependendo do tema que usuário escolher, a cor de fundo se torna dark ou light. Dessa maneira, temos as duas cores:

```css
--bg-dark: #1b2838;
--bg-light: #c7d5e0;
```

Para definir o plano de fundo, usamos a variável de tema escolhido, o qual é **dark by default**, sendo ela:

```css
--bg: var(--bg-dark); /* ou --bg-light */
```

### Text
Os textos podem ter cores diferentes, dependendo do grau de destaque que quer atribuir. Outrossim a cor também muda de acordo com o tema. Desse modo, temos as seguintes cores definidas:

```css
--text-first-dark: #c7d5e0;
--text-second-dark: #aab6be;
--text-first-light: #1b2838;
--text-second-light: #3d4a5a;
```

Os com sufixo 'first' dão mais destaque ao texto em relação ao 'second'.

Vale destacar que, cada variável tem a cor 'oposta' ao tema. Isso porque o **text-dark, por exemplo, contempla a cor do texto no tema dark**, logo, o text-dark seria claro, para ser um texto visível. Nesse sentido, se o text-dark é claro, logo, o text-light é escuro.

Para definir as cores, usamos apenas as variáveis de cor principais, que contêm as cores do tema escolhido, sendo elas:

```css
--text-first: var(--text-dark-first); /* ou --text-light-first */
--text-second: var(--text-dark-second); /* ou --text-light-second */
```


### General Components
Nos componentes gerais, seguindo a lógica do text-color, também se escolhe a cor de acordo com o destaque que quer ser atribuído. Assim, há as seguintes cores para o modo dark e light:

```css
--accent-dark: #66c0f4;
--first-dark: #2a475e;
--second-dark: #1b2838;
--third-dark: #171a21;

--accent-light: #2a475e;
--first-light: #c1c1c1;
--second-light: #d1d1d1;
--third-light: #e1e1e1;
```

Do first ao third, a cor fica cada vez mais escura, no modo dark. No modo light, contudo, o inverso é verdadeiro, a cor fica cada vez mais clara do first ao third. O accent, por fim, é a cor de contraste, que daria o maior destaque.

Como de costume, as únicas variáveis usadas de fato são as sem sufixo, cujo valor depende do modo dark ou light:

```css
--accent: var(--accent-dark); /* ou --accent-light */
--first: var(--first-dark); /* ou --accent-light */
--second: var(--second-dark); /* ou --accent-light */
--third: var(--third-dark); /* ou --accent-light */
```

## Text Font
A definir...

