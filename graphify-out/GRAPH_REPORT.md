# Graph Report - ziggurat-src  (2026-07-24)

## Corpus Check
- 18 files · ~305,315 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 105 nodes · 124 edges · 10 communities (9 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_ui.tsx|ui.tsx]]
- [[_COMMUNITY_App.tsx|App.tsx]]
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_ArticlesPage.tsx|ArticlesPage.tsx]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_ContactPage.tsx|ContactPage.tsx]]
- [[_COMMUNITY_Run and deploy your AI Studio app|Run and deploy your AI Studio app]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `SEO()` - 8 edges
3. `Label()` - 8 edges
4. `Btn()` - 4 edges
5. `scripts` - 4 edges
6. `linkProps()` - 3 edges
7. `getInitialTheme()` - 2 edges
8. `App()` - 2 edges
9. `TextCard()` - 2 edges
10. `ArticlesPage()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 1 thin omitted)

### Community 0 - "ui.tsx"
Cohesion: 0.13
Nodes (14): SEO(), SEOProps, Btn(), BTN_CLASS, BtnVariant, Label(), S, homeSchema (+6 more)

### Community 1 - "App.tsx"
Cohesion: 0.11
Nodes (13): AboutPage, App(), ArticlesPage, ContactPage, getInitialTheme(), HomePage, NAV_LINKS, ProductsPage (+5 more)

### Community 2 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+9 more)

### Community 3 - "package.json"
Cohesion: 0.14
Nodes (13): devDependencies, @types/node, typescript, vite, @vitejs/plugin-react, name, private, scripts (+5 more)

### Community 4 - "ArticlesPage.tsx"
Cohesion: 0.28
Nodes (8): Article, ArticlesPage(), FEATURED, GRID, linkProps(), S, SIDE, TextCard()

### Community 5 - "dependencies"
Cohesion: 0.33
Nodes (6): dependencies, react, react-dom, react-router-dom, vite, @vitejs/plugin-react

### Community 6 - "ContactPage.tsx"
Cohesion: 0.33
Nodes (4): fieldCard, inputStyle, labelStyle, S

## Knowledge Gaps
- **63 isolated node(s):** `HomePage`, `ProductsPage`, `TechnologyPage`, `RoiPage`, `ArticlesPage` (+58 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `SEO()` connect `ui.tsx` to `ArticlesPage.tsx`, `ContactPage.tsx`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `Label()` connect `ui.tsx` to `ArticlesPage.tsx`, `ContactPage.tsx`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `HomePage`, `ProductsPage`, `TechnologyPage` to the rest of the system?**
  _63 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ui.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12923076923076923 - nodes in this community are weakly interconnected._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._