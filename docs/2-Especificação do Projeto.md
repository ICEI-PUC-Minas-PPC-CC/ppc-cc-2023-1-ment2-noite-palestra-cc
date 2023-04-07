# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>
## Introdução 
Esse documento tem o objetivo de especificar requisitos, que contemplação da aplicação do solução adequada para o desenvolvimento do aplicativo a partir perspectiva do  usuário apresentando a definição do problema a parte de histórias do futuro usuário, requisitos funcionais da proposta, requisitos não funcionais e  o levantamento de dados a respeito da discussão. 
<br>

_UM BREVE HISTÓRICO_ 
<br>
A aplicação gerenciamento será implementado na  instituição sem fins lucrativos intitulada de GAAPO - Grupo de Assistência e Apoio ao Paciente Oncológico. 
<br><br>

"O objetivo do GAAPO além do acolhimento e amparo aos doentes e parcerias com diversas ONGs é também realizar palestras e desenvolver campanhas de prevenção e atenção ao câncer masculino, feminino e infantil, unindo a população de Poços De Caldas em prol do cuidado com o próximo. "(HELEVASOCIAL[8]).
<br><br>
"Assim, distribui-se cerca de perucas e lenços mensalmente, além de fraldas geriátricas, próteses de mama, e cestas básicas. No momento a única fonte de renda tem sido poucas doações espontâneas, alguns eventos com parceria privada e o bazar de roupas usadas." (HELEVASOCIAL[8]).
<br><br>
O contato com associação foi realizado através da professora Luciana De'Nardini, via virtual, pelo aplicativo  Microsoft Teams no dia 17/03/2023 - Sexta-feira, assim a equipe composta pelos alunos Gabriel Coetti, João Eduardo Lino, João Pedro Barbosa, Lucas Florentino, Marcelle Andrade e Mateus Boletta, poderão entrar em contado com a presidente Claudia  afim de realizar a coleta dos pré-requisitos, identificando dores, anseios e objetos. 
<br>

## Personas

Exemplo:

|**Rebeca Laura Monteiro**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/Rebeca.jpeg" width="300" height="180"/>|**Idade:** 53 anos. **Naturalidade:** Poços de Caldas - Minas Gerais.    **Ocupação:** Veterinária, estudante de Psicologia e Presidente da GAAPO.       |**Atribuições:** No GAAPO , compete a ela promover eventos, iniciativas, projetos e aulas. Gerenciar pessoas, acordar convênios, formar parcerias e receber doações destinadas a entidade. Somado a tudo isso, cabe a ela ser porta voz da instituição.
|**Motivações:** Deseja organizar e ter fácil acesso aos relatórios de doações, alimentos, cabelos, empréstimo de equipamentos médico, beneficiados e receita da ONG.   |**Frustações:** Dificuldade para gerenciar a ONG de forma clara e otimizada, pois trabalha paralelamente ao GAAPO, dessa maneira, questões como o vencimento de alimentos, gestão de cabelos e de doações não são realizadas de forma eficiente, não sabendo estimar a quantidade de cabelos doados e também a data de validade de alguns produtos.   |**Hobbies, história:** Almeja conseguir conciliar os diferentes papéis que exerce, pois atualmente está se sentindo extremamente sobrecarregada e por isso busca métodos para otimizar o seu tempo e esforço.

|**Fernanda Antonella Rocha**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/Fernanda.jpeg" width="300" height="180"/>|**Idade:** 58 anos. **Naturalidade:** Poços de Caldas - Minas Gerais.    **Ocupação:** Voluntaria - Contadora       |**Atribuições:** No GAAPO , compete a ela promover eventos, iniciativas, projetos e aulas, gerenciar pessoas, acordar convênios, parcerias e receber doações destinadas a entidade. Somada isso , cabe a ela ser porta voz da instituição. 
|**Motivações:** Deseja organizar e ter fácil acesso aos pacientes, para as consultas e auxilio social.   |**Frustações:** Dificuldade para gerenciar o fluxo de pacientes para a assistência social. Alta rotatividade de beneficiados.   |**Hobbies, história:** Se dedica a sua família, especialmente para a sua filha a além de se voltar para serviços comunitários para igreja e para o GAAPO.

**Sophia Bruna Assis**|           |                             | 
|-------------------|-----------|-----------------------------|
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/Sophia.jpeg" width="250" height="170"/>|**Idade:** 54 anos. **Naturalidade:** Poços de Caldas - Minas Gerais. **Ocupação:** Voluntaria - Contadora       |**Atribuições:** No GAAPO , compete a ela organizar de forma precisa os fluxos e as finanças da instituição de caridade.  
|**Motivações:** Deseja que o fluxo de caixa seja mais organizado e automatizado. Visto que toda essas tarefas atualmente são realizadas em papel.    |**Frustações:** Dificuldade para gerenciar a receita ONG de forma clara e concisa , pois, trabalha paralelamente ao GAAPO e também dificuldade em gerenciar todos os dados gerado referente as doações em dinheiro e fluxo de caixa, principalmente pela forma arcaica como essa tarefa é executada.    |**Hobbies, história:** Gosta de passear com os seus cachorros e divide seu tempo assentindo Netflix e viajando com sua família. 



## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:


|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rebeca Laura Monteiro | Desejo organizar e ter fácil acesso aos relatórios de doações, alimentos, cabelos, empréstimo de equipamentos médico, beneficiados e receita da ONG.  | Melhor gerencia e administração, otimizando o meu trabalho e forncecendo dados reais para maior credibilidade.  |
|Fernanda Antonella Rocha | Desejo organizar e ter fácil acesso aos pacientes, para as consultas e auxilio social.  | Ter melhor controle dos pacientes e gerenciamento das sessões de acompanhamento.  |
|Sophia Bruna Assis | Desejo que o fluxo de caixa seja mais organizado e automatizado. Visto que toda essas tarefas atualmente são realizadas em papel.   | A melhor maneira de armazenar dados, otimizando o precesso. E ter maior controle sobre os movimentos de entrada e saida de dinheiro.   |

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deverá permitir login com os campos: nome, senha e atualização de senha caso haja esquecimento.Para restrição de acesso de usuários| ALTA | 
|RF-01| O sistema deverá permitir cadastro de alimento: nome, validade,quatidade, data de entrada, data de saida.  | ALTA | 
|RF-02| O sitema deverá permitir a criação de cestas básicas a partir dos alimento pré-cadastrados.   | ALTA |
|RF-03| O sistema deverá mostrar guia de montagem da cesta básica.    | ALTA |
|RF-04| O sistemá deverá permitir o controle de estoque: produto, quantidade mínima. Sendo o produto existente na tabela.    | ALTA |
|RF-05| O sistema devará exisitr desmostradtivo de saída apresentando o benificiario, item de estoque (cabelo/alimeto) e data de entrega.     | ALTA |
|RF-06| O sistema deverá conter cadastro de doador ( nome, telefone e mail).   | MÉDIA |
|RF-07| O sistema deverá conter cadastro de beneficiario (nome, enderço, telefone,C.P.F.)   | ALTA |
|RF-08| O sistema deverá conter cadastro de paciente oncologicos ( nome, endereço, telefone, C.P.F e N.I.S.)  | BAIXA |
|RF-09| O sistema deverá aparesentar cadastro de voluntario/ usuário (nome , user ,senha e restrições)   | ALTA |
|RF-10| O sistema deverá conter entrada de doações em dinheiro    | BAIXA |
|RF-11| O sistema deverá conter gestão de empreentimos de equipamentos hospitalares.    | BAIXA |
|RF-12| O sistemas deverá conter aviso de controle de custos.  | MÉDIA |
|RF-13| O sistemas deverá conter entrada e saida de custos   | BAIXA |
|RF-14| O sistemas deverá ter relatórios sobre as receitas   | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema ultilizará liguagem TypeScript  com os frameworks NodeJs, AdonisJs e ReactJs   | ALTA | 
|RNF-02| O sistema se comunicara com o banco de dados non-SQL MongoDB para armazenar os dados    | ALTA |
|RNF-03| O sistema deverá ter conexao com internet     | ALTA |
|RNF-04| O sistema devera ser responsivo    | ALTA |
|RNF-05| O sistema devera ser coberto por testes automatizados utilizando o framework jest       | ALTA |
|RNF-06| O sistema deve processar requisições do usuário em no máximo 3 segundos    | BAIXA |
|RNF-07| O sistema sera hospedado em uma instancia Azuere/ou na plataforma heroku  | ALTA |
|RNF-08| O sistema sera acompanhado via arquivos de LOG mensalmente  | MÉDIA |
|RNF-09| Sera criado um aplicativo via powerApps como reserva   | BAIXA |
|RNF-10| O sistema deverá conter entrada de doações de dinheiro    | BAIXA |
|RNF-11| O desenvolvimento do sistema sera acompnhado via spints utilizando o github     | ALTA |
|RNF-12| O sistemas sera feito utilizando o paradigma POO  | MÉDIA |
|RNF-13| O sistemas deverá atender as normas legais sobre LGPD    | ALTA |
|RNF-14| O sistemas deverá ser integrado via banco de dados com o powerapps   | ALTA | 

