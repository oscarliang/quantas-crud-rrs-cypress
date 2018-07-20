#!/usr/bin/env node
process.stdout.write('\033c');
// require('dotenv').config();

const express = require('express');
const cypress = require('cypress');
const path = require('path');
const app = express();
const { green, red } = require('chalk');
const program = require('commander');
const spawn = require('cross-spawn');
const fs = require('fs-extra');
const moment = require('moment');

const port = process.env.PORT || 8081;

// const hosts = require('../../config/devAppState');

program
  .version('0.0.1')
  .option('-r, --run', 'Start the server and run Cypress tests.')
  .option('-a, --all', 'Run all tests instead of staggered.')
  .parse(process.argv);

// const {
//   authenticate,
//   getReactAppState,
// } = require('../../scripts/appStateHelpers');
// let oauth = {
//   access_token: 'access_token_mock',
// };

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.resolve(__dirname, '../../build/')));

const handler = (req, res) => {

  const mock = require(path.resolve(
    __dirname,
    `./fixtures/initialData.json`
  ));

  res.render('pages/index', {
    appState: JSON.stringify(mock)
  });
};

app.get('/', handler);
app.get('/homepage', handler);
app.get('/search', handler);

const integrationTmpDir = '.tmp';
let crashCount = 0;
let crashSpawnCount = 0;

const _runCypress = async integrationTests => {
  const result = await cypress.run({
    record: true,
    key: 'd44f50a2-73dc-4978-aa37-c94f6c494904',
  });
  if (result.failures) {
    process.exit(1);
  }

  if (integrationTests.length === 0) {
    process.exit(0);
  } else {
    startCypress(integrationTests);
  }
};

const startCypress = async integrationTests => {
  fs.removeSync(path.resolve(__dirname, `../${integrationTmpDir}`));
  fs.mkdirSync(path.resolve(__dirname, `../${integrationTmpDir}`));
  let testsToCopy = program.all ? 999 : 1;
  while (testsToCopy--) {
    if (integrationTests.length) {
      const spec = integrationTests.shift();
      console.log(`Creating symbolic link for : ${green(spec)}`);
      try {
        fs.symlinkSync(
          path.resolve(__dirname, `../integration/${spec}`),
          path.resolve(__dirname, `../${integrationTmpDir}/${spec}`)
        );
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    } else {
      testsToCopy = 0;
    }
  }
  try {
    await _runCypress(integrationTests);
  } catch (err) {
    console.error('Cypress jusr crashed', err);
    crashCount++;
    if (crashCount >= 2) {
      console.error('Cypress crashed 3 times ...');
      process.exit(1);
    }
    await _runCypress(integrationTests);
  }
};

const launchNPMCypress = () => {
  const result = spawn('npm', ['run', 'cypress:open']);

  result.on('close', code => {
    if (code !== 0) {
      console.error(`npm run cypress:open exited with code ${code}`);
      crashSpawnCount++;
      if (crashSpawnCount < 2) {
        launchNPMCypress();
      }
    }
  });
};

const startServer = () => {
  const host = `localhost:${port}`;
  process.env.CYPRESS_host = host;
  process.env.CYPRESS_VIDEO_RECORDING = false;
  const server = app.listen(port, () => {
    if (program.run) {
      process.env.CYPRESS_INTEGRATION_FOLDER = `cypress/${integrationTmpDir}`;
      const integrationTests = fs.readdirSync(
        path.resolve(__dirname, '../integration/')
      );
      startCypress(integrationTests);
    } else {
      console.log(green(`🚀  Testing server running on port: ${port}`));
      launchNPMCypress();
    }
  });
};

startServer();
