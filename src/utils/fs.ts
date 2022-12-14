import { exec } from 'child_process';
import { copySync, readFileSync } from 'fs-extra';
import { join } from 'path';
import util from 'util';
import { accessSync, constants, realpathSync } from 'fs';
import log from './log';
import { spawnAsync } from './process';

const execAsync = util.promisify(exec);

export const syncrReadFileContent = (filePath: string) => {
  const buffer = readFileSync(filePath);
  const content = JSON.parse(buffer.toString());

  return content;
};

export const getCurrentFilePath = (src, dist) => {
  return join(src, dist);
};

export const cloneGitRepository = async ({
  repoUrl,
  dist = '.',
  hasTip = true,
  targetName = 'Git',
}: {
  repoUrl: string;
  dist: string;
  hasTip?: boolean;
  targetName?: string;
}) => {
  hasTip && log.success(`ð å¼å§åå»º${targetName}é¡¹ç®`);

  // ä¸è½½ç¨æ·è¾å¥çæå®Gitä»åºçé¡¹ç®æä»¶
  await spawnAsync('git', ['clone', repoUrl, '--depth=1', '--verbose', '--progress', dist]);

  hasTip && log.success(`â¨ ${targetName}é¡¹ç®åå»ºæå`);
};

export const traverseDeleteFiles = async (filePath: string) => {
  await execAsync(`rm -rf ${filePath}`);
};

export const copyFilesWithoutGitFile = async ({
  src,
  dist,
  hasTip = true,
  targetName = '',
}: {
  src: string;
  dist: string;
  hasTip?: boolean;
  targetName?: string;
}) => {
  hasTip && log.success(`ð å¼å§æ·è´${targetName}æä»¶`);

  await copySync(src, dist, {
    filter: src => {
      const regexp = /\.git/;
      const hasIgnoreGitFile = !regexp.test(src);
      if (hasIgnoreGitFile) {
        log.print(log.infoColor(src) + log.successColor(' â'));
      }
      return hasIgnoreGitFile;
    },
  });

  hasTip && log.success(`â¨ ${targetName}æä»¶æ·è´æå`);
};

/**
 * @param {string} relativePath æä»¶ç¸å¯¹è·¯å¾
 * @returns åºäºæ ¹ç®å½çå®æ´æä»¶ç»å¯¹è·¯å¾
 */
export const getRuntimeProjectPath = (path: string, rootPath?: string) => {
  const appPath = realpathSync(rootPath || process.cwd());
  const fullPath = join(appPath, path);

  return fullPath;
};

export const checkFileExist = filePath => {
  return accessSync(filePath, constants.F_OK);
};
