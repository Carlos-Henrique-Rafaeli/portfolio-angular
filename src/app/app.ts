import { Component } from '@angular/core';

interface ItemHabilidade {
  icone: string;
  titulo: string;
  descricao?: string;
}

interface ItemPortfolio {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  public itensHabilidades: ItemHabilidade[] = [
    {
      icone: 'bi-window-fullscreen',
      titulo: 'Web Design',
      descricao: `Design e desenvolvimento de sistemas web atraentes e responsivos.`,
    },
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.`,
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    },
    {
      icone: 'bi-wrench',
      titulo: 'Engenharia de Software',
      descricao: `Planejamento e execução de sistemas multi-camadas, integrando várias tecnologias de forma organizada e escalável.`,
    },
    {
      icone: 'bi-people',
      titulo: 'Liderança',
      descricao: `Habilidade de liderar e tomar decisões técnicas em projetos em equipe.`,
    },
    {
      icone: 'bi-building-up',
      titulo: 'Implantação',
      descricao: `Implantação e manutenção de sistemas em servidores VPS e em nuvem.`,
    },
  ];

  public itensHabilidades2: ItemHabilidade[] = [
    {
      icone: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
    },
    {
      icone: 'https://skillicons.dev/icons?i=css&theme=dark',
      titulo: 'CSS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=js&theme=dark',
      titulo: 'JavaScript',
    },
    {
      icone: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
    },
    {
      icone: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
    },
    {
      icone: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
    },
    {
      icone: 'https://skillicons.dev/icons?i=net&theme=dark',
      titulo: '.NET',
    },
    {
      icone: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
    },
    {
      icone: 'https://skillicons.dev/icons?i=selenium&theme=dark',
      titulo: 'Selenium',
    },
    {
      icone: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Postgres',
    },
    {
      icone: 'https://skillicons.dev/icons?i=redis&theme=dark',
      titulo: 'Redis',
    },
    {
      icone: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
    },
    {
      icone: 'https://skillicons.dev/icons?i=powershell&theme=dark',
      titulo: 'PowerShell',
    },
    {
      icone: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
    },
    {
      icone: 'https://skillicons.dev/icons?i=github&theme=dark',
      titulo: 'GitHub',
    },
    {
      icone: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
    },
    {
      icone: 'https://skillicons.dev/icons?i=visualstudio&theme=dark',
      titulo: 'Visual Studio',
    },
    {
      icone: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VSCode',
    },
    {
      icone: 'https://skillicons.dev/icons?i=godot&theme=dark',
      titulo: 'Godot',
    },
    {
      icone: 'https://skillicons.dev/icons?i=unreal&theme=dark',
      titulo: 'Unreal',
    },
  ];

  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Gestão de Medicamentos',
      urlImagem: 'https://i.imgur.com/qJHb6iI.png',
      urlGif: 'https://i.imgur.com/AKK9i0I.gif',
      urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/controle-de-medicamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições — com foco na rastreabilidade das movimentações de estoque.`
    },
    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'https://i.imgur.com/njV7bm4.png',
      urlGif: 'https://i.imgur.com/vyl4wk3.gif',
      urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/gestao-de-equipamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`
    },
    {
      titulo: 'Gestão de Bar',
      urlImagem: 'https://i.imgur.com/l93SOZQ.png',
      urlGif: 'https://i.imgur.com/18oFjBf.gif',
      urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/controle-de-bar',
      stack: [
          'https://skillicons.dev/icons?i=html&theme=light',
          'https://skillicons.dev/icons?i=css&theme=light',
          'https://skillicons.dev/icons?i=cs&theme=light',
          'https://skillicons.dev/icons?i=net&theme=light',
          'https://skillicons.dev/icons?i=bootstrap&theme=light',
      ],
      descricao: `O sistema de Gestão de Bar permite o gerenciamento completo do funcionamento de um bar, com cadastro de mesas, garçons, produtos e controle de contas dos clientes. É possível acompanhar o andamento das contas, registrar pedidos, visualizar contas abertas ou fechadas e consultar o faturamento com base nas vendas realizadas.`
    },
    {
      titulo: 'E-Agenda',
      urlImagem: 'https://i.imgur.com/ufAs5XY.png',
      urlGif: 'https://i.imgur.com/jnmwLpB.gif',
      urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/e-agenda',
      stack: [
          'https://skillicons.dev/icons?i=html&theme=light',
          'https://skillicons.dev/icons?i=css&theme=light',
          'https://skillicons.dev/icons?i=cs&theme=light',
          'https://skillicons.dev/icons?i=net&theme=light',
          'https://skillicons.dev/icons?i=bootstrap&theme=light',
          'https://skillicons.dev/icons?i=azure&theme=light'
      ],
      descricao: `O sistema E-Agenda permite o gerenciamento completo de compromissos pessoais e profissionais, com cadastro de contatos, tarefas, despesas, categorias e compromissos. É possível organizar e visualizar compromissos por data e tipo, registrar tarefas com prioridades e progresso, gerenciar contatos com validações específicas, controlar despesas por categorias e consultar informações agrupadas por relevância e status de conclusão.`
    },
    {
      titulo: 'Gerador De Testes',
      urlImagem: 'https://i.imgur.com/LJfDZqu.png',
      urlGif: 'https://i.imgur.com/hXfn0BS.gif',
      urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/gerador-de-testes',
      stack: [
          'https://skillicons.dev/icons?i=html&theme=light',
          'https://skillicons.dev/icons?i=css&theme=light',
          'https://skillicons.dev/icons?i=cs&theme=light',
          'https://skillicons.dev/icons?i=net&theme=light',
          'https://skillicons.dev/icons?i=bootstrap&theme=light',
          'https://skillicons.dev/icons?i=azure&theme=light',
          'https://skillicons.dev/icons?i=postgres&theme=light'
      ],
      descricao: `Sistema gerador de testes avaliativos, com cadastro de disciplinas, matérias e questões. Permite gerar provas e gabaritos em PDF.`
    },
  ];

  public itemPortfolioSelecionado?: ItemPortfolio;
}
