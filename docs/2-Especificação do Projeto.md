# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Introdução

Esse documento tem o objetivo de especificar requisitos, que contemplação da aplicação do solução adequada para o desenvolvimento da aplicação a partir perspectiva do  usuário apresentando a definição do problema a parte de histórias do futuro usuário, requisitos funcionais da proposta, requisitos não funcionais e  o levantamento de dados a respeito da discussão.
<br>

_UM BREVE HISTÓRICO_
<br>
A aplicação gerenciamento será implementado na  instituição sem fins lucrativos intitulada de GAAPO - Grupo de Assistência e Apoio ao Paciente Oncológico.
<br><br>

["O objetivo do GAAPO além do acolhimento e amparo aos doentes e parcerias com diversas ONGs é também realizar palestras e desenvolver campanhas de prevenção e atenção ao câncer masculino, feminino e infantil, unindo a população de Poços De Caldas em prol do cuidado com o próximo.](https://helevasocial.com.br/instituicoes/gaapo-grupo-de-apoio-e-assistencia-ao-paciente-oncologico)".

["Assim, distribui-se cerca de perucas e lenços mensalmente, além de fraldas geriátricas, próteses de mama, e cestas básicas. No momento a única fonte de renda tem sido poucas doações espontâneas, alguns eventos com parceria privada e o bazar de roupas usadas."](<https://helevasocial.com.br/instituicoes/gaapo-grupo-de-apoio-e-assistencia-ao-paciente-oncologico>).
<br><br>
O contato com associação foi realizado através da professora Luciana De'Nardini, via virtual, pelo aplicativo  Microsoft Teams no dia 17/03/2023 - Sexta-feira, assim a equipe composta pelos alunos Gabriel Coetti, João Eduardo Lino, João Pedro Barbosa, Lucas Florentino, Marcelle Andrade e Mateus Boletta, poderão entrar em contado com a presidente Claudia  afim de realizar a coleta dos pré-requisitos, identificando dores, anseios e objetos.
<br>

## Personas

Exemplo:

|**Rebeca Laura Monteiro**|           |                             |
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/Rebeca.jpeg" width="300" height="180"/>|_Idade:_ 53 anos. _Naturalidade:_ Poços de Caldas - Minas Gerais.    _Ocupação:_ Veterinária, estudante de Psicologia e Presidente da GAAPO.       |_Atribuições:_ No GAAPO , compete a ela promover eventos, iniciativas, projetos e aulas. Gerenciar pessoas, acordar convênios, formar parcerias e receber doações destinadas a entidade. Somado a tudo isso, cabe a ela ser porta voz da instituição.
|_Motivações:_ Deseja organizar e ter fácil acesso aos relatórios de doações, alimentos e prazos de validade, cabelos, empréstimo de equipamentos médico, beneficiados e receita da ONG.   |_Frustações:_ Dificuldade para gerenciar a ONG de forma clara e otimizada, pois trabalha paralelamente ao GAAPO, dessa maneira, questões como o vencimento de alimentos, gestão de cabelos e de doações não são realizadas de forma eficiente, não sabendo estimar a quantidade de cabelos doados e também a data de validade de alguns produtos.   |_Hobbies, história:_ Almeja conseguir conciliar os diferentes papéis que exerce, pois atualmente está se sentindo extremamente sobrecarregada e por isso busca métodos para otimizar o seu tempo e esforço.

|**Fernanda Antonella Rocha**|           |                             |
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/Fernanda.jpeg" width="300" height="180"/>|**Idade:** 58 anos. **Naturalidade:** Poços de Caldas - Minas Gerais.    **Ocupação:** Voluntaria - Contadora       |**Atribuições:** No GAAPO , compete a ela promover eventos, iniciativas, projetos e aulas, gerenciar pessoas, acordar convênios, parcerias e receber doações destinadas a entidade. Somada isso , cabe a ela ser porta voz da instituição.
|**Motivações:** Deseja organizar e ter fácil acesso aos pacientes, para as consultas e auxilio social.   |**Frustações:** Dificuldade para gerenciar o fluxo de pacientes para a assistência social. Alta rotatividade de beneficiados.   |**Hobbies, história:** Se dedica a sua família, especialmente para a sua filha a além de se voltar para serviços comunitários para igreja e para o GAAPO.

**Sophia Bruna Assis**|           |                             |
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/Sophia.jpeg" width="250" height="170"/>|**Idade:** 54 anos. **Naturalidade:** Poços de Caldas - Minas Gerais. **Ocupação:** Voluntaria - Contadora       |**Atribuições:** No GAAPO , compete a ela organizar de forma precisa os fluxos e as finanças da instituição de caridade.  
|**Motivações:** Deseja que o fluxo de caixa seja mais organizado e automatizado. Visto que toda essas tarefas atualmente são realizadas em papel.    |**Frustações:** Dificuldade para gerenciar a receita ONG de forma clara e concisa , pois, trabalha paralelamente ao GAAPO e também dificuldade em gerenciar todos os dados gerado referente as doações em dinheiro e fluxo de caixa, principalmente pela forma arcaica como essa tarefa é executada.    |**Hobbies, história:** Gosta de passear com os seus cachorros e divide seu tempo assentindo Netflix e viajando com sua família.

**Katia Souza**|           |                             |
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/katia.png" width="250" height="170"/>|**Idade:** 38 anos. **Naturalidade:** Campestre - Minas Gerais. **Ocupação:** Empregada doméstica      |**Atribuições:** Compete a ela como beneficiaria da instituição receber auxilios como alimentação e emprestimo de equipamentos como cadeira de rodas.
|**Motivações:** Deseja que a organização, controle de itens e o gerenciamento de pessoas da instituição seja melhor organizado.    |**Frustações:** Sempre que chega a cidade, a dúvida se vai conseguir usufruir dos serviços que a instituição disponibiliza sempre a acompanha, como por exemplo saber se vai ter uma peruca ou uma cadeira de rodas disponivel, sendo necessário sempre aguardar por longos périodos até que alguém da instuição de a resposta se aquele serviço está disponivel ou não.    |**Hobbies, história:** Katia foi diagnosticada com câncer no útero. A notícia foi devastadora, mas ela se recusou a deixar a doença controlar sua vida. Mesmo quando estava passando por quimioterapia e radioterapia, ela ainda encontrava tempo para continuar com suas paixões. Ela dançava com uma peruca na cabeça e um sorriso no rosto, enquanto ainda encontrava tempo para ler seus livros favoritos.

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rebeca Laura Monteiro | Desejo poder ter um controle real sobre os alimentos que a ONG recebe nas doações.  | Pois muitos alimentos se perdem devido não conseguirmos manter o controle das datas de validade. |
|Sophia Bruna Assis | Desejo que o fluxo de caixa seja mais organizado e automatizado. Visto que toda essas tarefas atualmente são realizadas em papel.   | A melhor maneira de armazenar dados, otimizando o precesso. E ter maior controle sobre os movimentos de entrada e saida de dinheiro.   |
|Katia Souza | Desejo que o fluxo da instituição seja melhor otimizado para que eu não precise mais esperar por tanto tempo em filas enquanto a funcionário(a) se pergunte se o que eu preciso ainda está disponível na instituição | Melhor agilidade no processo de entrega de serviço, como a entrega de uma peruca.   |

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|-------|-----------------------------------------|----|
| RF-01 | O sistema deverá permitir login com os campos: nome, senha e atualização de senha caso tenha esquecido. Para restrição de acesso de usuários; | ALTA |
| RF-02 | O sistema terá uma tela inicial contendo visão geral dos alimentos e das cestas e alertas do vencimento dos alimentos;  | ALTA |
| RF-03 | O sistema deverá conter o menu navegável, com os respectivos ícones  | MÉDIA |
| RF-04 | Na tela de Estoque do sistema, deverá conter demonstrativo dos alimentos e quantitativo total; | MÉDIA |
| RF-05 | Na tela de doações de alimentos, o sistema irá conter o CRUD (criar, exibir, atualizar e apagar elementos), além de exportar relatórios; | MÉDIA |
| RF-06 | O sistema será possível a visualização de relatórios em 2º Nível; | MÉDIA |
| RF-07 | O sistema terá a tela definir Receita, com o intuito que o usuário selecione quais itens serão correspondidos aquela cesta em determinado período de tempo. Somando a definição de estoque mínimo de cesta. O sistema definirá alarmes para quantidade mínima de cestas não alcançadas dentro de um mês; | MÉDIA |
| RF-08 | O sistema terá a tela CESTAS afim de demonstrar quantitativos e visualização básica sobre as cestas básicas. Além de exportar relatórios , permitir qual produto deve conter na cesta e permitir que o usuário a monte; | MÉDIA |
| RF-09 | Na tela de configurações, terá como intuito que o usuário selecione ou realize cadastro de novo usuário; | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema ultilizará liguagem TypeScript  com os frameworks NodeJs, AdonisJs e ReactJs   | ALTA |
|RNF-02| O sistema se comunicara com o banco de dados non-SQL MongoDB para armazenar os dados    | ALTA |
|RNF-03| O sistema deverá ter conexao com internet     | ALTA |
|RNF-04| O sistema devera ser responsivo| ALTA |
|RNF-05| O sistema devera ser coberto por testes automatizados utilizando o framework jest| ALTA |
|RNF-06| O sistema deve processar requisições do usuário em no máximo 3 segundos    | BAIXA |
|RNF-07| O sistema sera hospedado em uma instancia | ALTA |
|RNF-08| O sistema sera acompanhado via arquivos para exportação| MÉDIA |
|RNF-09| O sistemas sera feito utilizando o paradigma POO  | MÉDIA |
|RNF-10| O sistemas deverá atender as normas legais sobre LGPD    | ALTA |
|RNF-11| O desenvolvimento do sistema sera acompnhado via spints utilizando o github | ALTA |
