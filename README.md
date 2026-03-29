# Mathcheap Documentation

This is the official documentation repository for **Mathcheap**, built with [Mintlify](https://mintlify.com).

This project contains Mathcheap's guides, custom configurations, and API reference documentation. All pages are MDX files with YAML Frontmatter. Configurations can be managed through `docs.json`.

## Directory Structure

- `index.mdx`, `quickstart.mdx`, etc.: Main guides and introductory documentation.
- `api-reference/`: Contains API reference documentation and endpoint examples (e.g., GET, POST).
- `essentials/`: Guides on basic configurations like Markdown, code snippets, images, and navigation.
- `ai-tools/`: Instructions for integrating with various AI tools (like Cursor, Windsurf, Claude Code).

## Local Development & Preview

To preview documentation changes locally, you need to install the [Mintlify CLI](https://www.npmjs.com/package/mint). Run the following command to install it:

```bash
npm i -g mint
```

After installation, run the following command at the root of your documentation (where `docs.json` is located) to start the local server:

```bash
mint dev
```

Once started, you can visit `http://localhost:3000` in your browser to view the local documentation preview in real-time.

## 🤖 AI-assisted Writing

We recommend using Mintlify's AI skill when writing documentation. It includes component references, writing standards, and workflow guidance. Run the following command in your terminal to configure the AI tools:

```bash
npx skills add https://mintlify.com/docs
```

> **Note**: This command applies to common AI coding tools like Claude Code, Cursor, and Windsurf. For more configuration details, refer to the [AI tools guides](/ai-tools).

## Publishing Changes

We use Mintlify's GitHub App for automatic deployment.
Simply push your changes to the main branch (e.g., `main`). If your [Mintlify Dashboard](https://dashboard.mintlify.com/settings/organization/github-app) is configured correctly, the production environment will automatically pull the latest code and deploy it.

## Need Help?

- **Local server not running**: Try running `mint update` to ensure you are using the latest version of the Mintlify CLI.
- **Page shows 404**: Make sure you are running the command in a directory that contains a valid `docs.json` file.
- **Broken links**: You can run `mint broken-links` locally to check for any invalid links.

For more information on how to use Mintlify, please visit the [Mintlify Official Documentation](https://mintlify.com/docs).
