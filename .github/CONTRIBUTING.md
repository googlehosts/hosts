# 报告问题 Reporting issues
您可以通过GitHub的[issue](https://github.com/googlehosts/hosts/issues)向我们报告问题。  
You can report issues via GitHub's [issue](https://github.com/googlehosts/hosts/issues).

请遵守下列事项：  
Make sure you are following the rules below:

- 只能使用中文或英文。  
Only Chinese or English is allowed here.

- 禁止一切广告、政治敏感或攻击性言论。  
No promotions, political-sensitive or offensive contents.

- 除非您有合适的理由，否则请勿破坏issue预设的模板。  
We have a issue template, but non-Chinese speakers are not required to follow it at the moment.

- 禁止重复issue：具体来说，如果您想让我们向hosts内新增一个网站，请先搜索是否有相似的issue（无论状态），如果有，您就不应当再开一个issue了。对于其他情况，如果存在相似issue，且这个issue为“打开”（open）状态，您也不应当再开一个issue。如果您的issue被关闭，重新引起我们的注意的正确方式是在原issue下留言，而不是再开一个新的issue。  
No duplicate issues: Make sure you searched for similar issue before continuing. Specifically, for HOSTS additions, you shouldn't open a new issue if a similar issue is found (status is irrelevant); for other situations, you can only open a new issue if no similar issue with open status is found. If your previous issue was closed by us, you should comment to the original issue instead of opening a new one to regain our attention on the same topic.

- 禁止短时间内大量刷屏：无论您发送的内容是什么，您都不应该在短时间内大量回复同一个issue；如果您想补充内容，请善用编辑功能。  
No double posting: You shouldn't double post in the same issue in a short period, no matter what your comment is about. Use EDIT instead.

- 如果您只是想“顶楼上”，请使用reaction功能（即消息框右上角的笑脸符号，移动版页面不可见）。  
If you comment just for "+1", use REACTION instead (the smile face on top-right of the comment box; invisible on mobile view).

- 如果您的issue中含有大量hosts条目/代码/日志等内容，请使用 ` ``` ` 将这部分内容括起来。例如：  
If your issue contains multiple lines of HOSTS entries/codes/logs, use ` ``` ` to wrap it up. For example:

````
```
1.1.1.1 adc.com
1.1.1.2 zzz.adc.com
```
````

# 贡献 Contributing
您可以通过GitHub的[issue](https://github.com/googlehosts/hosts/issues)或[pull request](https://github.com/googlehosts/hosts/pulls)向hosts中贡献条目。  
You can contribute to the HOSTS file via GitHub's [issue](https://github.com/googlehosts/hosts/issues) or [pull request](https://github.com/googlehosts/hosts/pulls).

如果您使用issue，请遵守上述事项。通过issue提交的内容将被视为匿名提交。  
If you choose issue, please follow the rules above. Contributions via this method will be considered anonymous.

如果您使用pull request，请留意以下内容：  
If you choose pull request, read the following:

- 本项目不受理NSFW（换言之就是以成人内容为主，例如Pornhub）以及代理列表类网站。含有NSFW内容（且不能是主要内容），但有明确浏览限制的网站除外（例如Pixiv）。  
We do not accept any full-NSFW (Not Safe For Work, e.g. Pornhub) or proxy-list sites. Sites that contains NSFW contents (and not in the majority) with explicit viewing restrictions are exceptions (e.g. Pixiv).

- 您只能提交更改至[hosts-source](https://github.com/googlehosts/hosts/tree/hosts-source)分支。  
You can only commit your changes against the [hosts-source](https://github.com/googlehosts/hosts/tree/hosts-source) branch.

- 默认情况下，我们将以rebase方式进行合并。如果您需要以其他方式进行合并，请在pull request中声明。  
By default we will use rebase merging. If you prefer other ways of merging, please declare it in your pull request.

- 为了您的安全，我们建议您以 `beyondgfw <beyond.gfw.limit@gmail.com>` 的身份提交：  
For your safety, it is suggested to use `beyondgfw <beyond.gfw.limit@gmail.com>` as the identity of your commit:
```
git config user.name beyondgfw
git config user.email beyond.gfw.limit@gmail.com
```

- 请注意遵守格式，并尽可能按字母顺序排列。  
Follow the format (and also in alphabetical order if possible).

- 请避免将同一个IP用于多个不同的域名上。参见[issue #48](https://github.com/googlehosts/hosts/issues/48)。  
Avoid using same IP for multiple domains. See [issue #48](https://github.com/googlehosts/hosts/issues/48) for details.

