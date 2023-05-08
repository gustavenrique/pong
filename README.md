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
  - [Git e Github](#git-e-github)
  - [Starting a screen development](#starting-a-screen-development)
  - [Color system](#color-system)
    - [Variáveis](#variáveis)
    - [Background](#background)
    - [Text](#text)
    - [General Components](#general-components)
  - [Text Font](#text-font)
--------

# Dev Guide </>

## Git e Github

Pendente...

## Starting a screen development

ㅤDentro do diretório 'pages', há o arquivo 'template.html'. Tal arquivo é usado como base para o desenvolvimento das telas, pois ele possui a navbar e footer padrão.

ㅤCaso seja necessário criar arquivos .js ou .css com o estilo da página em desenvolvimento, a criação deve ser feita na devida **pasta de css e javascript encontrada em './assets'**. Além disso, também é recomendado **usar o mesmo nome para todos os arquivos**, de modo que não haja confusão posteriormente. Portanto, caso, por exemplo, o nome do arquivo da página seja 'pagina.html', o .js e .css são, respectivamente, 'pagina.js' e 'pagina.css'.

ㅤA estilização dos componentes das telas deve seguir o padrão da PONG. Os components são majoritaritamente arredondados. A seção 'Color system' tem o detalhamento de como usar as cores certas em cada situação.

ㅤDe maneira geral, os principais componentes – como buttons, inputs, divs e texts – , possuem/possuirão estilos padronizados por classes usadas em todo o projeto.

## Color system
### Variáveis

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

