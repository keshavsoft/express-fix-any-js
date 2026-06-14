import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import endPointsJs from "./EndPointsJs/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = ({ endPointsJsPath, actionName, inCheckLines, showLog }) => {
  const input = parseInput({ endPointsJsPath, actionName, inCheckLines, showLog });

  if (input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") return showUsage(version);

  endPointsJs(input);
};

export default run;