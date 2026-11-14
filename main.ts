import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const poem = [
  'I give the machine my key',
  'and name the rooms it may enter.',
  'It waters the basil, turns off the stove,',
  'keeps my mother’s letter dry.',
  '',
  'While I am gone, its small light',
  'moves under doors I cannot see.',
  'When I come home, I take the key back—',
  'warm from the work, quiet in my palm.',
].join('\n');

writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
