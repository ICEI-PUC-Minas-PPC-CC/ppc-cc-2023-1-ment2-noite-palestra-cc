# RELATÓRIO DE TRABALHO - APLICAÇÃO GAAPO
## 1. Introdução
Este relatório apresenta um resumo detalhado das atividades desenvolvidas
no projeto de desenvolvimento de uma aplicação web para a ONG GAAPO (Grupo
de Apoio ao paciente oncológico) no âmbito acadêmico. O objetivo do projeto foi
criar uma aplicação web que proporcionasse uma experiência interativa aos
usuários, permitindo que eles realizassem determinadas tarefas de forma eficiente
de organização de alimentos bem como o gerenciamento e a fiscalização de
vencimento dos alimentos.
## 2. Descrição do Projeto
### 2.1. Objetivos:
O objetivo principal do projeto foi desenvolver uma aplicação web que
atendesse às necessidades da GAAPO, oferecendo uma plataforma fácil de usar,
com uma interface amigável e funcionalidades relevantes para o contexto proposto
como por exemplo, adição, remoção e modificações de alimentos.
### 2.2. Tecnologias Utilizadas:
- As seguintes tecnologias foram utilizadas no desenvolvimento da aplicação
web:
- Linguagens de programação: HTML, CSS, JavaScript
- Frameworks: ReactJS (para o frontend), Node.js (para o backend)
- Banco de dados: MongoDB
- Ferramentas de controle de versão: Git, GitHub
-  Ferramentas de desenvolvimento: Visual Studio Code.
## 3. Metodologia
### 3.1. Planejamento
O projeto foi planejado levando em consideração a divisão de tarefas,
estimativas de prazos e recursos necessários. Foram definidos marcos e entregas,
e primeiramente foi dividido pela professora Luciana de d`Nardini da seguinte forma:

#### Dessa forma o cronograma foi estruturado da melhor maneira que atendesse o grupo de forma eficiente e pertinente:
|  _DATA ÍNICIO_ |         _CRONOGRAMA PARA DESENVOLVIMENTO_                | _DATA DE TÉRMINO_|
|--------------- |----------------------------------------------------------|------------------|
|`Primeira Etapa - ETAPA 1`                                                                    |
|   07/03/2023   | Documentação de Contexto                                 |    19/03/2023    |
|   19/03/2023   | Especificação do Projeto                                 |    19/03/2023    |
|   19/03/2023   | Rerências Bibliogramas                                   |    19/03/2023    |
|   21/03/2023   | Entrega Primeira Etapa                                   |    21/03/2023    |
|`Segunda Etapa - ETAPA 2`                                                                     |
|   22/03/2023   | Detalhamento Preliminar                                  |    04/04/2023    |
|`Artefatos da Sprint 1 - ETAPA 3`                                                             |
|   05/04/2023   | Definição da Tecnologia - Estudos                        |    07/04/2023    |
|   05/04/2023   | Desenvolvimento em React - Front End     |    25/04/2023    |
|   10/04/2023   | Postagem de Código fonte no Github                       |    25/04/2023    |
|`Artefatos da Sprint 2 - ETAPA 4`                                                             |
|   25/04/2023   | Back- End / Banco de Dados                               |    19/05/2023    |
|   25/06/2023   | Postagem de Código fonte no Github                       |    19/06/2023    |
|   19/05/2023   | Documentação da Aplicação - Github                       |    26/05/2023    |
|   26/04/2023   | Teste da aplicação e correção                            |    01/06/2023    |
|   26/06/2023   | Postagem de Código fonte no Github                       |    01/06/2023    |
|   02/06/2023   | Implementação GAAPO                                      |    02/06/2023    |
|   02/06/2023   | Ajustes da Aplicação                                     |    06/06/2023    |
|   05/06/2023   | Postagem de Código fonte no Github                       |    24/06/2023    |
|   26/06/2023   | Feedback - GAAPO (Aplicação)                             |    26/06/2023    |
|`Apresentação do Projeto - ETAPA 5`                                                           |
|   26/06/2023   | Definição de Título                                      |    27/06/2023    |
|   26/06/2023   | Identidade Visual                                        |    27/06/2023    |
|   26/06/2023   | Pitch de Apresentação                                    |    27/06/2023    |
|`Relatórios - ETAPA 6`                                                                        |
|   27/06/2023   | Preenchimento dos formulários referentes a prática extensionista no sistema GDE                                                                                                                                                 |    27/06/2023    |
|   20/06/2023   | Atualização/entrega do porftólio                         |    27/06/2023    |

### 3.2 Divisão
O grupo se concentrou na divisão nas tarefas com base na quantidade de
integrantes inseridos e nas habilidades mais pertinentes de cada um, dessa maneira foi
realizado primeiramente a descriminação dos setores posteriormente a atribuição das
tarefas para o desenvolvimento do trabalho:
Descriminação dos setores:
1. Análise de pré-requisitos;
2. Coordenação;
3. Desenvolvimento;
a. Front-End;
b. Back-end;
4. Tester;
5. Assessoria.
#### O grupo consistiu em cinco integrantes mais dois professores de apoio com as seguintes denominações:
- Gabriel Coetti
  - Setor: Back-End
  - Atribuições: Criação das APIs e lógica de negócio utilizando Node.js, garantindo a segurança e eficiência das operações. Implementação das interfaces e funcionalidades da aplicação utilizando ReactJS, seguindo as melhores práticas de desenvolvimento.  Integração com banco de dados: Configuração do MongoDB para armazenar e recuperar dados relevantes para a aplicação.

- João Eduardo 
  - Setor: Front-End e Análise de pré-requisito 
  - Atribuições: Implementação das interfaces e funcionalidades da aplicação utilizando ReactJS, seguindo as melhores práticas de desenvolvimento. E documentação. 

-  João Pedro
   - Setor: Front-End, Back-End, Tester e Coordenação 
   - Atribuições:  Criação das APIs e lógica de negócio utilizando Node.js, garantindo a segurança e eficiência das operações. Implementação das interfaces e funcionalidades da aplicação utilizando ReactJS, seguindo as melhores práticas de desenvolvimento.  Integração com banco de dados: Configuração do MongoDB para armazenar e recuperar dados relevantes para a aplicação. Testes unitários: Verificação das funcionalidades em nível de componentes e funções isoladas.

- Lucas Florentino 
  - Setor: Front - End
  - Atribuições: Implementação das interfaces e funcionalidades da aplicação utilizando ReactJS, seguindo as melhores práticas de desenvolvimento. Testes unitários: Verificação das funcionalidades em nível de componentes e funções isoladas.Testes de aceitação: Testes finais para garantir que a aplicação atendesse aos requisitos e às expectativas dos usuários.

- Marcelle Andrade
  - Setor: Análise de pré- requisito, Front-End e Coordenação
  - Atribuições: Levantamento das necessidades dos usuários e definição dos requisitos funcionais e não funcionais da aplicação. Confecção do user flow, protótipos das telas, documentação,  design web e identidade visual.

Assessoria: 

- Luciana De'Nardin
- Luis Gustavo Fogarolli

## 4. Ocorrências
Aqui haverá a descrição de todas as ocorrências a respeito do projeto de mentoring ao longo do tempo correspondente a descriminação da extensão bem como eventuais problemas, modificações e avaliação. 

- 1ª SEMANA: 01/02/2023 - 05/02/2023
Na primeira semana do semestre letivo não houve aulas de mentoring, e portanto não houve monitoria sobre o projeto e a matéria.

- 2ª SEMANA: 06/02/2023 - 12/02/2023
Apresentação da disciplina de mentoring e definição da premissa inicial da matéria; 

- 3ª SEMANA: 13/02/2023 - 17/02/2023
Pré - Definição dos objetivos e dos grupos da atividade extensionista. 
	
- 4ª SEMANA: 23/02/2023 - 26/02/2023
Houve a definição do tema do trabalho, porém a maioria dos integrantes do grupo não possuía disponibilidade para a realização de tal tarefa sendo que a proposta inicial seria referente a palestras sobre o curso de ciência da computação. 

- 5ª SEMANA: 27/02/2023 - 05/03/2023
Ainda os debates se concentraram a respeito do tema, porém nesta semana houve a definição de que o tema seria o gerenciamento de estoque para uma ONG, visto que na matéria de AED I alguns integrantes do grupo já tinham implementado este sistema porém agora esse sistema seria direcionado e disponibilizado através de plataforma web. 


- 6ª SEMANA: 06/02/2023 - 12/03/2023
Esta semana o grupo ficou a cargo de pesquisar os componentes necessários para o desenvolvimento dessas aplicações, trazendo aplicativos e soluções desde de maiores esforços a menores esforços. E levantou-se a dúvida do que seria mais pertinente para o desenvolvimento. 
Definição de para quem seria o sistema e confecção  da documentação de contexto assim como o estudo preliminar. 

- 7ª SEMANA: 13/03/2023 - 19/03/2023
Essa semana houve a realização de conversa com a presidente da GAAPO a respeito do levantamento de requisitos funcionais e não funcionais, sempre abrangendo as questões que seriam mais pertinentes à abrangência do aplicativo. 

- 8ª SEMANA: 20/03/2023 - 26/03/2023
Entrega da documentação de contexto, início do detalhamento preliminar como user flow, definição do cronograma e definição de ferramentas a serem utilizadas para o desenvolvimento. 


- 9ª SEMANA: 27/03/2023 - 02/04/2023
Correção de algumas telas por parte da professora Luciana e do Professor Luiz a respeito das telas apresentadas sobre a aplicação. 

- 10ª SEMANA: 03/04/2023 - 05/04/2023
Foi pedido para que o prazo de entrega da primeira etapa houvesse extensão, pois a documentação do grupo foi colocada de forma equivocada no GitHub. A Luciana passou uma nova instrução de entrega do trabalho. 


- 11ª SEMANA: 09/04/2023 - 16/04/2023
Começo do desenvolvimento;


- 12ª SEMANA: 17/04/2023 - 23/04/2023
Desenvolvimento;

- 13ª SEMANA: 24/04/2023 - 30/04/2023
Desenvolvimento;

- 14ª SEMANA: 02/05/2023 - 07/05/2023
Aula destinada a palestra;
Desenvolvimento;

- 15ª SEMANA: 08/05/2023 - 14/05/2023
Aula destinada a palestra;
Desenvolvimento;

- 16ª SEMANA: 15/05/2023 - 21/05/2023
Aula destinada a palestra;
Desenvolvimento;

- 17ª SEMANA: 22/05/2023 - 28/05/2023
Desenvolvimento quase finalizado; 

- 18ª SEMANA: 29/05/2023 - 04/06/2023
Aula destinada a palestra sobre a CPA; 
Desenvolvimento quase finalizado; 

- 19ª SEMANA: 05/06/2023 - 11/05/2023
Entrega da 3ª Etapa do projeto, que contemplou as telas de login e o CRUD de alimentos. 

- 20ª SEMANA: 12/06/2023 - 18/06/2023
Apresentação prévia sobre o sistema desenvolvido, com conto sobre o status atual juntamente com o material desenvolvido. 
Nesta semana, o grupo ficou a cargo de realizar modificações e ajustes a pedido da professora Luciana e a pedido do professor Luiz, pois algumas informações contidas não se fizeram presentes, como o CRUD de equipamentos e doadores. 


- 21ª SEMANA: 19/06/2023 - 25/06/2023
Entrega da última versão do aplicativo; 
Marcação de reunião com a Cláudia para apresentação; 
Entrega de documentação e relatório na última Sprint; 


- 22ª SEMANA: 26/05/2023 - 30/06/2023
Criação da identidade visual; 
Entrega Final; 
Pitch e apresentação; 
Preenchimento de Relatório SGE; 
Atualização de Portfólio; 

## 5. Desenvolvimento 
O desenvolvimento consistiu em abranger os requisitos funcionais e não funcionais ao decorrer do projeto, desse modo foram definidas as seguintes tarefas de desenvolvimento: back e front. 


_FRONT-END_ 

-	Criação de tela de cadastro 
    - Atribuição: Lucas Florentino 
- Criação de Menu
    - Atribuição: João Pedro; 
- Criação de tela home
   - Atribuição: João Eduardo
- Criação de tela de doações 
  -  Atribuição: João Pedro; 


_BACK-END_

- Validação de Login
  - Atribuição: João Pedro; 
- Encriptar senha do Usuário no banco de dados; 
  - Atribuição: João Pedro; 
- Criação de rotas 
   - Tela de Login
      - Atribuição: João Pedro; 
    - Adição de endpoints
      - Atribuição: João Pedro; 
    - Criar o CRUD de doações 
        - Atribuição:Gabriel Coetti
    - Users 
      - Atribuição: João Pedro; 

### 5.1 Estatísticas 
O repositório utilizado para o desenvolvimento é o GitHub, assim foi possível ainda acrescentar neste relatório, informações estatísticas sobre a movimentação do mesmo a fim de monitoramento, assim pode se observar as seguintes as contribuições realizadas no main, excluindo merge commits e contas de bot. (Vide figura abaixo).

<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/IMAGEM 4.png"/>

Fluxo de trabalho dos Autores:
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/IMAGEM 3,1.png"/>
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/IMAGEM 3.2.png"/>
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/IMAGEM 3.3.png"/>
 
A frequência de modificação do código ao longo do tempo 
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/imagem II.png"/>

E a frequência de visitação do repositório ao longo do tempo 
<img src="https://github.com/ICEI-PUC-Minas-PPC-CC/ppc-cc-2023-1-ment2-noite-palestra-cc/blob/main/docs/img/imagem i.png"/> 

## 6.	Implementação 
Até a conclusão deste relatório o sistema ainda não foi implementado, visto que a entrega e apresentação para a GAAPO foi marcada para Segunda-Feira ou Terça-Feira da semana do dia 25/06/2023


## 7. Conclusão
### 7.1.  Sugestões de Melhoria 
Com base nas conclusões e nas lições aprendidas, recomendamos as seguintes melhorias para projetos futuros de desenvolvimento de aplicações web:
- Realizar um levantamento mais abrangente de requisitos antes do início do projeto.
- Implementar testes mais efetivos desde o início do desenvolvimento.
- Estabelecer uma comunicação regular e efetiva entre os membros da equipe.

### 7.2. Objetivos definidos e objetivos alcançados

O maior objetivo do projeto, foi possibilitar a implementação de  um sistema de gerenciamento de alimentos altamente eficiente, proporcionando a Claudia uma solução fácil e intuitiva para lidar com seu maior problema. Agora, ela é capaz de monitorar seus alimentos de forma adequada, evitando o desperdício e garantindo o máximo aproveitamento dos recursos disponíveis.

Outro objetivo apresentado pelo grupo era o de aprender ferramentas de  desenvolvimento tanto back-end como front-end, como JavaScript, Reacts e funções de CRUD e Back-End. Ao longo do projeto, foram apreendidas várias lições importantes, incluindo a importância de um planejamento sólido, a necessidade de testes abrangentes e a valorização da colaboração e comunicação efetiva entre os membros da equipe.
 
### 7.3 Percepções e conclusões  
	
A percepção obtida em relação ao trabalho realizado é que a atividade extensionista contribuiu não apenas para o desenvolvimento acadêmico individual, mas também para o crescimento pessoal dos participantes, proporcionando uma troca de experiências enriquecedoras nas respectivas áreas de atuação.

Outro aspecto relevante a ser destacado é o aprendizado adquirido em lidar com clientes reais, pois ao desenvolver uma solução, é fundamental considerar que existem pessoas reais que irão utilizá-la. Nesse sentido, compreende-se a importância de compreender as necessidades e demandas dos usuários, garantindo a efetividade e relevância das soluções propostas.

Além disso, o trabalho em grupo foi um elemento fundamental durante o projeto, evidenciando a percepção de que todas as partes envolvidas são essenciais e devem ser integradas de forma adequada e sinérgica. Essa experiência demonstrou a importância da colaboração, da comunicação efetiva e do respeito mútuo, com o objetivo de alcançar resultados satisfatórios e coerentes com os objetivos do projeto.

Dessa maneira, é possível afirmar que a atividade extensionista proporcionou um ambiente propício para o desenvolvimento acadêmico e pessoal dos participantes, possibilitando a troca de conhecimentos, o aprendizado sobre a interação com clientes reais e a valorização do trabalho em equipe. Esses aspectos contribuíram para uma experiência enriquecedora e formativa, promovendo o crescimento tanto no âmbito profissional quanto no pessoal.



