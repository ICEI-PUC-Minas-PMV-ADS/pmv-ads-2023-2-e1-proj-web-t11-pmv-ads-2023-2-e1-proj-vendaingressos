# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-01 - Verificar o funcionamento dos links da página Home |
|:---|:---|
| Requisitos Associados | RF-01; RF-02; RF-03; RF-04 e RF-08 |
| Objetivo do Teste | Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. Clicar nos links da página Home |
| Critérios de êxito | Todos os links da página Home devem encaminhar os usuários para as páginas descritas  |
| Responsável pela elaborar do caso de Teste | Daniel |

|Caso de Teste    | CT-02 - Verificar o funcionamento do filtro de pesquisa |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. Clicar na página Livros; 5. Digitar no filtro de pesquisa algum dado presente na página “Eventos” ou “Eventos Passados” e verificar se o resultado é exibido na página|
| Critérios de êxito | Os dados inseridos no filtro de pesquisa devem mostrar o evento correspondente |
| Responsável pela elaborar do caso de Teste | Daniel |

|Caso de Teste    | CT-03 - Verificar detalhes dos eventos |
|:---|:---|
| Requisitos Associados | RF-04 |
| Objetivo do Teste | Verificar se todas as informações referentes aos eventos estão disponíveis |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. “Eventos” ou “Eventos Passados”; 5. Selecionar o evento; 6. Visualizar as informações referentes aos eventos disponíveis na página. |
| Critérios de êxito | Todas as informações, incluindo imagens dos eventos e responsividade da página, referentes ao evento selecionado estão disponíveis na página |
| Responsável pela elaborar do caso de Teste | Daniel |

|Caso de Teste    | CT-04 - Verificar o cadastro de usuários |
|:---|:---|
| Requisitos Associados | RF-01 |
| Objetivo do Teste | Verificar se o cadastro está sendo feito corretamente |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. Clicar em "Cadastro de empresas e alunos”; 5. Preencher o formulário e clicar em “Cadastrar” |
| Critérios de êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deve aparecer a mensagem "Usuário cadastrado com sucesso" |
| Responsável pela elaborar do caso de Teste | Daniel |


|Caso de Teste    | CT-05 - Verificar o login de usuários |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Verificar se o cadastro de usuários está sendo feito corretamente |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. Clicar em "Cadastro de empresas e alunos”; 5. Preencher seus dados e clicar em “Entrar”; 6. Visualizar a página Perfil. |
| Critérios de êxito | Deve ocorrer uma validação das informações fornecidas pelo usuário |
| Responsável pela elaborar do caso de Teste | Daniel |

|Caso de Teste    | CT-06: Verificar o cadastro de empresas |
|:---|:---|
| Requisitos Associados | RF-02 |
| Objetivo do Teste | Verificar se o cadastro de empresas está sendo feito corretamente e se a listagem das empresas cadastradas estão funcionando como previsto |
| Passos | 1. Acessar o navegador; 2. Informar o endereço do site; 3. Visualizar a página Home; 4. Clicar em "Cadastro de empresas e alunos”; 5. Preencher seus dados e clicar em “Cadastro de Empresas”; 6. Informar a senha de login de administrador; 7 - Visualizar a página  |
| Critérios de êxito | Deve ocorrer uma validação das informações fornecidas pelo administrador. Deve ser possível efetuar operações CRUD e vizualizar empresas cadastradas. Por fim, deve ser possível pesquisar as empresas cadastradas por meio da "cidade" do evento e/ou "categoria do evento"|
| Responsável pela elaborar do caso de Teste | Daniel |


 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
