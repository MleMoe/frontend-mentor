import chalk from 'chalk';
import { $, question } from 'zx';
import * as fs from 'fs';

let appName = await question(chalk.cyanBright('请输入项目名字？'));

// let appId = await question(chalk.blueBright('请输入 app id？'));

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

const getHtml = (pagaName: string) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" sizes="32x32" href="/src/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>fe-mentor</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/${pagaName}/index.tsx"></script>
  </body>
</html>`;

// await $`echo ${getHtml(appName)} > ${pagesFolder}/index.html`;
fs.writeFileSync(`${pagesFolder}/index.html`, getHtml(appName));

await $`mkdir src/${appName}`;
await $`cp -r utils/templates/src/ src/${appName}`;
