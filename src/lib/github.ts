interface GitHubFile {
  name: string;
  path: string;
  download_url: string;
}

export async function fetchMarkdownFiles(): Promise<GitHubFile[]> {
  const repoOwner = "abrarfahim19";
  const repoName = "mdfile-to-blog-generator-source";
  const response = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contents`,
  );
  const files: GitHubFile[] = await response.json();
  return files.filter((file) => file.name.endsWith(".md"));
}

export async function fetchMarkdownContent(path: string): Promise<string> {
  const response = await fetch(
    `https://raw.githubusercontent.com/your-github-username/your-repo-name/main/${path}`,
  );
  const content = await response.text();
  return content;
}
