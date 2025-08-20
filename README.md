# README — Amigo Secreto (JS)

Aplicação simples para cadastrar nomes e sortear um **amigo secreto** diretamente no navegador. O projeto usa HTML, CSS e JavaScript puros.

---

# Funcionalidades

- Adicionar nomes à lista de participantes.  
- Listar os amigos adicionados em tela.  
- Sortear um amigo aleatoriamente usando `Math.random()` + `Math.floor()`.  
- Exibir o resultado do sorteio em uma área dedicada e com `aria-live="polite"` para melhor acessibilidade.  
- Layout responsivo e estilizado com variáveis CSS.  

---

# Estrutura do projeto

```
/
├─ index.html
├─ style.css
├─ app.js
└─ assets/
   ├─ amigo-secreto.png
   └─ play_circle_outline.png
```

- **index.html**: marcação da página, campos de entrada, listas e botões de ação.  
- **style.css**: estilos, paleta via CSS custom properties e responsividade.  
- **app.js**: lógica de adicionar nomes, atualizar lista e sortear.  

---

# Como executar

1. Baixe/clique duas vezes em **`index.html`** para abrir no seu navegador.  
2. Digite um nome no campo “Digite um nome” e clique em **Adicionar**. Repita para todos os participantes.  
3. Clique em **Sortear amigo** para ver o resultado. O nome sorteado aparece na área de **resultado**.  

> Dica: se preferir, use uma extensão como **Live Server** (VS Code) para atualizar a página automaticamente a cada alteração.

---

# Como funciona 

- Os nomes são mantidos no array global `listaAmigos`.  
- `adicionarAmigo()`  
  - Lê o valor do `<input>`, inclui no array e re-renderiza a `<ul>` de participantes.  
- `sortearAmigo()`  
  - Gera um índice aleatório com `Math.floor(Math.random() * listaAmigos.length)`.  
  - Busca o nome correspondente e exibe em `#resultado`.  
  - Se a lista estiver vazia, mostra a mensagem de aviso em `#resultado`.  

----

# Estilo

- Paleta configurável via variáveis: `--color-primary`, `--color-secondary`, etc.  
- Botões com `:hover`, tipografia com **Inter** e **Merriweather** e layout centralizado e responsivo.  

----

# Solução de problemas

- **“O amigo sorteado foi undefined”**  
  - Isso acontece quando tenta sortear com a lista vazia. O código já trata exibindo a mensagem de aviso em `#resultado`. Adicione participantes antes de sortear.  
- **Nome não aparece na lista**  
  - Verifique se clicou em **Adicionar** após digitar o nome. A função atualiza a `<ul id="listaAmigos">` a cada inclusão.  

----
# Licença

Projeto didático. Use e modifique livremente.
