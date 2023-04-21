# Pong

O PONG (Plataforma Online de Games), como o próprio nome propõe, é uma plataforma de jogos, na qual o usuário pode, dependendo do game, jogar tanto no próprio navegador, quanto pode baixar o game para uso em sua máquina.

A plataforma possui games para mobile e PC, tanto gratuitos quanto pagos.

Ademais, o PONG possui um sistema de streaming, no qual usuários podem fazer live de gameplay e, obviamente, assistir.

--------

# Dev Guide </>

## Starting a screen development

Dentro do diretório 'pages', há o arquivo 'template.html'. Tal arquivo é usado como base para o desenvolvimento das telas, pois ele possui a navbar e footer padrão.

A estilização dos componentes das telas deve seguir o padrão da PONG. Os components são majoritaritamente arredondados. A seção 'Color system' tem o detalhamento de como usar as cores certas em cada situação.

De maneira geral, os principais componentes – como buttons, inputs, divs e texts – , possuem/possuirão estilos padronizados por classes usadas em todo o projeto.

## Color system
As variáveis citadas nesta seção são encontradas no './assets/css/template.css'

### Background
As cores de 'bg' são usadas para dar cor ao fundo geral. Portanto, dependendo do tema que usuário escolher, a cor de fundo se torna dark ou light. Dessa maneira, temos as duas cores:

```css
--bg-dark: #1b2838;
--bg-light: #c7d5e0;
```

Para definir o plano de fundo, usamos a variável de tema escolhido, o qual é **dark by default**, sendo ela:

```css
--bg-current: var(--bg-dark); /* ou --bg-light */
```

### Text
Os textos podem ter cores diferentes, dependendo do grau de destaque que quer atribuir. Outrossim a cor também muda de acordo com o tema. Desse modo, temos as seguintes cores definidas:

```css
--text-dark-first: #c7d5e0;
--text-dark-second: #aab6be;
--text-light-first: #1b2838;
--text-light-second: #3d4a5a;
```

Os com sufixo 'first' dão mais destaque ao texto em relação ao 'second'.

Vale destacar que, cada variável tem a cor 'oposta' ao tema. Isso porque o **text-dark, por exemplo, contempla a cor do texto no tema dark**, logo, o text-dark seria claro, para ser um texto visível. Nesse sentido, se o text-dark é claro, logo, o text-light é escuro.

Para definir as cores, usamos apenas as variáveis de cor principais, que contêm as cores do tema escolhido, sendo elas:

```css
--text-first: var(--text-dark-first); /* ou --text-light-first */
--text-second: var(--text-dark-second); /* ou --text-light-second */
```


### General Components
Nos componentes gerais, seguindo a lógica do text-color, também se escolhe a cor de acordo com o destaque que quer ser atribuído. Assim, há as seguintes cores:

```css
--accent: #66c0f4;
--first: #2a475e;
--second: #1b2838;
--third: #171a21;
```

Do first ao third, a cor fica cada vez mais escura. Enquanto o accent é a cor de contraste, que daria o maior destaque.