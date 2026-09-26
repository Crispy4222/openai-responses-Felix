const DEFAULT_ALLOWED_TOOLS = [
  "get_repository",
  "get_file_contents",
  "search_code",
  "list_branches",
  "create_branch",
  "create_or_update_file",
  "create_pull_request",
];

export function getGitHubMcpTool(): any | null {
  const token = process.env.GITHUB_MCP_TOKEN?.trim();
  if (!token) return null;

  const serverUrl =
    process.env.GITHUB_MCP_URL?.trim() ||
    "https://api.githubcopilot.com/mcp/";

  const allowedTools = (
    process.env.GITHUB_MCP_ALLOWED_TOOLS ||
    DEFAULT_ALLOWED_TOOLS.join(",")
  )
    .split(",")
    .map((tool) => tool.trim())
    .filter(Boolean);

  return {
    type: "mcp",
    server_label: "GitHub",
    server_description:
      "Read and modify the configured GitHub repositories used by Felix.",
    server_url: serverUrl,
    authorization: token,
    require_approval:
      process.env.GITHUB_MCP_REQUIRE_APPROVAL === "false" ? "never" : "always",
    allowed_tools: allowedTools,
  };
}
