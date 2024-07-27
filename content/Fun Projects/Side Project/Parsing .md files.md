First we need to parse the content of the repository:

```ts
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

```


1. Create 1 json file:
	- [ ] . Relations.json: Relations between file 
	- [x] . Explorer.json: 

```ts
interface INode{
	id: string;
	name: string;
	filePath: string;
	urlPath: string;
	backlinks: string[];
	forwardlinks: string[];
}
```

Facts:
A file is mentioned in another file by use of `[[This is first file]]`.
1. Every .md has unique name
2. this unique name is the `id` of the file
3. `filePath` is relative path of the file from root directory example: `folder1/folder2/This is first file.md`
4. `urlPath` is created from the file name. The `urlPath` is also unique and has some rules while being created. example: `This_is_first_file` is the `urlPath` of the  `This is first file.md` 
5. `backlinks` are the id of other nodes that mentions the file in its content. 
6. `forwarlinks` are the id of the nodes/files that are mentioned inside this file. 
