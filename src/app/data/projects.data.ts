import { Project } from './models';

export const PROJECTS: Project[] = [
  {
    slug: 'access-control-engine',
    title: 'Enterprise Access Control Engine',
    tagline: 'A deterministic RBAC engine published as a Python package and Angular library',
    summary:
      'Enterprise applications often outgrow simple boolean role-based access control as permission rules ' +
      'get layered, overridden, and time-boxed across teams. I co-designed and built an in-house access-control ' +
      'engine from the ground up to solve this: a deterministic, arithmetic-style rule resolver where signed term ' +
      'expressions (such as +A-B+C) layer grant and revoke rules with recency-based conflict resolution, replacing ' +
      'brittle boolean RBAC logic. Rules are applied oldest-to-newest with a deterministic tiebreak, so a later ' +
      '+A after an earlier -A correctly re-grants access — recency wins, which mirrors how access changes actually ' +
      'happen in a real organization. The engine was published as a standalone, typed Python package so every ' +
      'backend service in the organization could depend on the same access logic instead of re-implementing it, ' +
      'and it ships with a CLI and a mountable FastAPI router so any service can bring it in with minimal setup.',
    role:
      'Co-designed the rule-resolution algorithm and built both the backend package and the companion Angular ' +
      'admin UI used to manage rules, users, and groups.',
    techStack: [
      'Python',
      'FastAPI',
      'Alembic',
      'Angular',
      'TypeScript',
      'Redis',
      'AES / Fernet-compatible token signing',
    ],
    highlights: [
      'Published the engine as a standalone typed Python package (11,000+ lines, async + sync APIs, Alembic migrations, CLI, mountable FastAPI router) consumed by multiple backend services organization-wide.',
      'Built and published a companion Angular component library (19+ components, 10+ services) for rule editing, user/group management, resource hierarchy visualization, and audit views.',
      "Implemented a client-side Fernet-compatible AES token signer in TypeScript to interoperate with the Python backend's auth scheme — a real cross-stack crypto interop feature, not just a UI wrapper.",
      'Designed a two-tier caching strategy (in-process LRU/TTL + Redis) with pattern-based invalidation to keep permission checks fast at scale.',
      'Wrote a companion scheduled sync job that reconciles Microsoft Entra ID group membership and hospital-level row-level-security assignments into the engine automatically.',
    ],
  },
  {
    slug: 'dashboard-platform',
    title: 'Healthcare BI Dashboard Platform',
    tagline: 'An Angular + FastAPI analytics platform serving dashboards across a multi-hospital network',
    summary:
      'This is the primary user-facing analytics platform I work on — a dashboard viewer used across finance, ' +
      'clinical, HR, and operations teams at a multi-hospital healthcare network. On the frontend, I built ' +
      'dashboard/tile viewing with drill-down and multi-filter panels, an admin panel with a YAML config editor, ' +
      'dark/light theming, and Excel/PDF export. On the backend, I built and maintained the chart/visualization ' +
      'microservices and the caching layer that keeps dashboards responsive at scale under row-level-security ' +
      'constraints. The app is also embeddable inside Microsoft Teams and other iframe contexts, so I worked ' +
      'through hardened CSP/frame-ancestors configuration on the hosting layer to make that safe.',
    role:
      'Full stack ownership of major dashboard features end-to-end — from Angular components through FastAPI ' +
      'services to the caching and authorization layers underneath.',
    techStack: [
      'Angular',
      'RxJS',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Row-Level Security',
    ],
    highlights: [
      'Designed and developed frontend features using Angular (80+ components, 59 services) — dashboard/tile viewer with drill-down and multi-filter panels, an admin panel with a YAML config editor, dark/light theming, and Excel/PDF export.',
      'Developed and maintained 9+ chart/visualization microservices (bar, pie, scatter, box plot, stacked bar, card, table, etc.) on the FastAPI backend.',
      'Implemented a 3-tier caching layer (result → config → template) keyed on request and row-level-security context, cutting redundant query/render work on repeat dashboard loads, with cache pre-warming for frequently viewed dashboards.',
      'Optimized the authorization path by consolidating per-dashboard access checks into a single access-control call per request, replacing N per-tile calls.',
      "Hardened a server-to-server microservice's internal auth using constant-time token comparison and explicit CORS/credential policy.",
      'Built export tooling (Excel/PDF) and a YAML-based admin config editor with an embedded Monaco/ACE code editor for non-engineers to safely edit dashboard configuration.',
    ],
  },
  {
    slug: 'semantic-layer-pipeline',
    title: 'Semantic Layer & Multi-Engine Data Pipeline',
    tagline: 'A Cube.js semantic layer spanning Databricks, Druid, and Trino with zero-downtime deploys',
    summary:
      'Behind every dashboard sits a semantic layer of ~1,400+ Cube.js models defining dimensions and measures ' +
      'across three different query engines. I worked on the pipeline that keeps this layer fast to change and ' +
      'reliable to deploy — from a query transformation microservice that routes requests to the right engine, to ' +
      'an incremental schema-compilation pipeline that turns a multi-minute rebuild into a 1–2 second patch, to a ' +
      'self-service flow that lets analysts ship schema changes without engineering involvement. Every cube model ' +
      'shares a consistent time-intelligence pattern — month/quarter/year-to-date and run-rate projections — so ' +
      'finance and clinical dashboards compute these consistently instead of every dashboard reinventing the logic. ' +
      'The Kubernetes deployment itself runs zero-downtime rolling updates with a readiness probe that checks every ' +
      'connected data engine before a pod is marked healthy, plus a scoped, least-privilege service account so the ' +
      'backend can only ever redeploy this one service.',
    role:
      'Built the query routing microservice, the incremental schema compiler, and the self-service deployment ' +
      'pipeline connecting the admin UI to a live Kubernetes rollout.',
    techStack: [
      'Cube.js',
      'Databricks',
      'Apache Druid',
      'Trino',
      'Kubernetes',
      'GitHub API',
      'Microsoft Entra ID',
    ],
    highlights: [
      'Maintained ~1,400+ Cube.js semantic-layer models (YAML/Jinja) defining dimensions/measures across three query engines (Databricks, Druid, Trino), with a shared time-intelligence pattern (MTD/QTD/YTD/projection) reused across models.',
      'Built a query transformation microservice that connects to each engine via its native client (Databricks SQL connector, PyDruid, Trino DBAPI) and parallelizes execution via async thread-pool dispatch.',
      'Designed an incremental schema-compilation pipeline that patches a single cube definition in-place instead of recompiling ~450 files, cutting semantic-layer deploy time from a full rebuild to 1–2 seconds, with atomic writes and automatic rollback on failure.',
      'Built a self-service pipeline for analysts to edit cube YAML from the admin UI, push changes via the GitHub API, and trigger a zero-downtime rolling Kubernetes deployment with a least-privilege service account.',
      'Automated a scheduled sync job pulling group membership from Microsoft Entra ID (Graph API) and hospital-level row-level-security assignments from Databricks, reconciling both into the access-control engine.',
      'Added a scheduled cleanup job that prunes old versioned schema directories, keeping only the most recent deployments so the shared storage volume does not grow unbounded.',
    ],
  },
  {
    slug: 'ai-conversational-analytics',
    title: 'AI-Powered Conversational Analytics',
    tagline: 'A multi-agent system on the Claude Agent SDK for natural-language healthcare analytics',
    summary:
      'Analysts and staff want to ask questions about hospital data in plain language, not write queries. ' +
      'I built a multi-agent conversational analytics system on the Claude Agent SDK where nine cooperating ' +
      'sub-agents handle different parts of the problem — extracting metrics and dimensions from a question, ' +
      'analyzing data, finding root causes, and generating visualizations — coordinated through Model Context ' +
      'Protocol tool servers, with an Azure OpenAI Code Interpreter tool available for on-the-fly computation ' +
      'when an agent needs to run actual code against retrieved data. To keep the agents grounded in real business ' +
      'knowledge, I also designed a Git-versioned knowledge base with a CI/CD pipeline that hot-syncs updated ' +
      'business context into the system without a redeploy — so a documentation update goes live for the agents ' +
      'within minutes of being merged, not the next release cycle.',
    role:
      'Built the multi-agent orchestration, the hybrid RAG retrieval feature, and the Git-versioned business ' +
      'context knowledge base and its CI/CD sync pipeline.',
    techStack: [
      'Claude Agent SDK',
      'Model Context Protocol (MCP)',
      'Elasticsearch',
      'RAG / BM25 + Vector Search',
      'Redis',
      'GitHub Actions',
    ],
    highlights: [
      'Built a multi-agent conversational analytics system on the Claude Agent SDK: 9 cooperating sub-agents (metric extraction, dimension identification, data analysis, insights, root-cause/action analysis, web research, business-context lookup, visualization) coordinated via Model Context Protocol (MCP) tool servers, backed by an Azure OpenAI Code Interpreter tool.',
      'Implemented hybrid RAG retrieval for a healthcare document search feature, fusing vector similarity and BM25 lexical search via Reciprocal Rank Fusion, with LLM-based query expansion for domain abbreviations.',
      "Designed a Git-versioned business-context knowledge base with a CI/CD pipeline (GitHub Actions) that detects changed docs and hot-syncs them into the AI system's context store — keeping the LLM agents grounded on current business knowledge without redeploying the service.",
      'Built an Elasticsearch-backed metric/dimension catalog (indexed from Databricks) powering fuzzy natural-language lookups used by the agents to resolve business terms to schema fields.',
      'Used Redis-backed per-user conversation scratchpads (context, preferences, TTL-based expiry) to support multi-turn conversational state.',
      'Added a background sweeper task that clears orphaned or stale "loading" messages left behind by interrupted conversations, keeping the chat history clean.',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
