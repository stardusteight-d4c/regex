# regex
```
<(a)\s+href="(.+)"(?:>(.*)<\/\1>)
```
A expressão regular acima está analisando uma tag de âncora HTML5, tags como a seguinte estão dentro dos matches:
```
<a href="#"></a>
```
A primeira parte é mais simples: 
```
<(a)\s+href="(.+)"
```
Temos os caracteres literais da tag como '<' e 'a' seguido de um espaço em branco '\s'  que pode aparecer uma ou mais vezes graças ao operador '+'. Após isso temos outra sequência de caracteres literais 'href="()"', sendo que dentro dos parênteses pode ter a ocorrência de qualquer caractere indicado pelo '.', uma ou mais vezes, indicado pelo '+'. Nesta parte temos dois grupos. Segunda parte:
```
(?:>(.*)<\/\1>)
```
Temos um grupo que será desconsiderado por causa do operador de '?:' (Non-capturing group), e fechando o abrimento da tag com '>'. Logo temos outro grupo '(.*)', só que agora temos o asteristico que representa zero ou mais vezes, este grupo captura o conteúdo da tag, a string que receberá o link. Por fim há uma back-reference referenciando o primeiro grupo de captura (a), tudo isso dentro de um grupo, totalizando quatro grupos no total.

A regex possui 4 grupos, 3 são capturados. Além disso, o back-reference \1 referencia o primeiro grupo, (a).

    O primeiro grupo devolve o nome da tag, sempre a.
    O segundo grupo devolve o conteúdo do atributo href.
    O terceiro grupo devolve o conteúdo da tag.


Arquivos disponibilizados pelo instrutor: Nico Steppat
