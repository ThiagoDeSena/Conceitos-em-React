# Projetos com React Hooks

Uma coleção de desafios utilizando React Hooks como `useState` e `useEffect`.  

## 1. Contador Simples  
Crie um componente de contador que exibe um número na tela e possui dois botões: **"Incrementar"** e **"Decrementar"**. Use o hook `useState` para manter o valor do contador.  

**Desafio:** Adicione uma condição para não permitir que o valor seja menor que zero.  

---

## 2. Alteração de Cor de Fundo  
Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.  
- Use `useState` para armazenar a cor atual.  
- Use `useEffect` para atualizar o estilo do fundo com cada mudança.  

**Desafio:** Gere cores aleatórias sempre que o botão for clicado.  

---

## 3. Lista de Tarefas  
Crie um aplicativo de lista de tarefas (**To-Do List**) onde o usuário pode adicionar e remover tarefas.  
- Use `useState` para armazenar a lista de tarefas.  
- Renderize cada tarefa como um item de lista.  

**Desafio:** Permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.  

---

## 4. Temporizador com useEffect  
Crie um temporizador que conta o tempo em segundos e exibe na tela.  
- Use `useEffect` para iniciar o temporizador ao carregar o componente.  
- Use `useState` para atualizar o tempo.  

**Desafio:** Adicione botões para **pausar** e **reiniciar** o temporizador.  

---

## 5. Filtro de Lista  
Crie um componente que renderiza uma lista de nomes.  
- Adicione um campo de entrada para filtrar os nomes com base no texto digitado.  
- Use `useState` para controlar o valor do filtro.  
- Use `map()` para exibir apenas os itens que correspondem ao filtro.  

**Desafio:** Ignore maiúsculas e minúsculas ao filtrar.  

---

## 6. Formulário de Registro Simples  
Crie um formulário com campos de **Nome**, **E-mail** e **Senha**.  
- Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas.  
- Use `useState` para armazenar os valores dos campos.  

**Desafio:** Adicione validações para garantir que todos os campos estejam preenchidos antes de enviar.  

---

## 7. Aplicação de Requisição de Dados Simples  
Crie um componente que exiba uma lista de posts obtidos de uma API pública (como [JSONPlaceholder](https://jsonplaceholder.typicode.com/)).  
- Use `useEffect` para fazer a requisição ao carregar o componente.  
- Exiba os posts em uma lista.  

**Desafio:** Adicione um botão para **recarregar os dados** e um **indicador de carregamento** enquanto a requisição está sendo feita.  

---

## 8. Galeria de Imagens com Visualização Detalhada  
Crie uma galeria simples com uma lista de imagens.  
- Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal.  
- Use `useState` para armazenar a imagem selecionada.  
- Renderize o modal condicionalmente.  

**Desafio:**  
- Adicione um botão de **"Fechar"** no modal.  
- Adicione uma funcionalidade de **navegação entre as imagens**.  

---

## 9. Timer com Intervalo e Alerta  
Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo.  
- Use `useState` para armazenar o tempo.  
- Use `useEffect` para iniciar a contagem regressiva ao iniciar o timer.  
- Ao chegar a **zero**, exiba um alerta informando que o tempo acabou.  

**Desafio:** Adicione botões para **pausar** e **reiniciar** o timer.  

---

## 10. Componentes com Tabs Navegáveis  
Crie uma interface de **"tabs" (abas)** onde cada aba exibe um conteúdo diferente ao ser clicada.  
- Use `useState` para controlar qual aba está ativa.  
- Renderize o conteúdo de acordo com a aba selecionada.  

**Desafio:** Adicione um efeito visual que **destaque** a aba ativa.  
