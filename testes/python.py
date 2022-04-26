import re

resultados = re.finditer(r'(\d\d)\w','11a22b33c')
for resultado in resultados:
    print("%s com grupo %s [%s,%s]" % (resultado.group(), resultado.group(1),resultado.start(), resultado.end()))


regex = '\s-\s'
novotexto = ': '
alura = 'Alura - Regex'
resultado = re.sub(regex, novotexto, alura)
print(resultado)