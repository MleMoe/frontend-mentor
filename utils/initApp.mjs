#!/usr/bin/env node
import chalk from 'chalk';
import { $, question } from 'zx';
import * as fs from 'fs';

let appName = await question(chalk.cyanBright('请输入项目名字？'));

let isDark = await question(chalk.blueBright('是暗系视觉风格吗(y/n)？'));

// const levelChoices = ['NEWBIE', 'JUNIOR', 'INTERMEDIATE', 'ADVANCED'];

// let level = await question(chalk.cyanBright('请输入难度类别？'), {
//   choices: [
//     chalk.cyan('NEWBIE'),
//     chalk.green('JUNIOR'),
//     chalk.yellow('INTERMEDIATE'),
//     chalk.magenta('ADVANCED'),
//   ].map((e, i) => `${(i + 1).toString()}. ${e}`),
// });

// console.log(appName);
// console.log(levelChoices[parseInt(level) - 1]);

const pagesPath = 'pages';
const pagesFolder = `${pagesPath}/${appName}`;

await $`mkdir ${pagesFolder}`;

const getHtml = (pagaName) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/src/icons/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>fe-mentor</title>
    	<style>
        .attribution {
          padding-bottom: 10px;
          font-size: 12px;
          text-align: center;
          color: ${isDark === 'y' ? 'hsl(228, 45%, 44%)' : '#fff'};
        }
        .attribution a {
          color: ${isDark === 'y' ? '#fff' : 'hsl(228, 45%, 44%)'};
          text-decoration: none;
        }
      </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/${pagaName}/index.tsx"></script>
    <div class="attribution">
			Challenge by
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
				>Frontend Mentor</a
			>. Coded by
			<a href="https://github.com/MleMoe"
				><img src="/src/icons/github ${
          isDark === 'y' ? '-light' : ''
        }-32.png" width="12" height="12" />
				MleMoe </a
			>.
		</div>
  </body>
</html>`;

// await $`echo ${getHtml(appName)} > ${pagesFolder}/index.html`;
fs.writeFileSync(`${pagesFolder}/index.html`, getHtml(appName));

await $`mkdir src/${appName}`;
await $`cp -r utils/templates/src/ src/${appName}`;
