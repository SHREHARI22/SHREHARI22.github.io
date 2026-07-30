import { SkillGroup } from './models';

export const SKILLS: SkillGroup[] = [
  { category: 'Programming Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  {
    category: 'Frontend',
    items: ['Angular (14–19)', 'Angular Material', 'RxJS', 'TailwindCSS', 'ECharts'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'SQLAlchemy (ORM, async + sync)', 'Alembic', 'REST APIs', 'WebSockets/SSE'],
  },
  {
    category: 'Databases & Query Engines',
    items: ['PostgreSQL', 'Redis', 'Cube.js (semantic layer)', 'Elasticsearch', 'Databricks, Druid, Trino (via client connectors)'],
  },
  {
    category: 'AI / LLM',
    items: [
      'Claude Agent SDK',
      'Claude Code',
      'Anthropic & OpenAI APIs',
      'Model Context Protocol (MCP)',
      'LangChain',
      'LlamaIndex',
      'RAG (hybrid vector + BM25)',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Microsoft Azure (Azure AD/Entra ID)', 'Kubernetes', 'Docker', 'GitHub Actions (CI/CD)', 'Git'],
  },
  { category: 'Tools', items: ['Postman', 'Monaco/ACE Editor', 'Azure DevOps (Boards)', 'Jira'] },
  {
    category: 'Concepts',
    items: ['Microservices', 'Authentication', 'Authorization', 'RBAC', 'Caching Strategies', 'Agile', 'Performance Optimization'],
  },
];
