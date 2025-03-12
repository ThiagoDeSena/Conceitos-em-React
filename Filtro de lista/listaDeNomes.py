import names

# Gera 100 nomes aleatórios
nome_aleatorios = [names.get_full_name() for _ in range(100)]

# Imprime os nomes em formato CSV
print(','.join(f'"{nome}"' for nome in nome_aleatorios))