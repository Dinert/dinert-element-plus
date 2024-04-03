import path from 'path';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import { highlight } from '../utils/highlight';
import tag from './tag.js';

const localMd = MarkdownIt().use(tag);

export const mdPlugin = (md) => {
    md.use(mdContainer, 'demo', {
        render(tokens, idx: number) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            if (tokens[idx].nesting === 1 /* means the tag is opening */) {
              const description = m && m.length > 1 ? m[1] : '';
              const sourceFileToken = tokens[idx + 2];
              let source = '';
              const sourceFile = sourceFileToken.children?.[0].content ?? '';
              if (sourceFileToken.type === 'inline') {

                source = fs.readFileSync(
                  path.resolve('components', `${sourceFile}.vue`),
                  'utf-8'
                );
              }
              if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

              return `<DinertDemo source="${encodeURIComponent(
                highlight(source, 'vue')
              )}" path="${sourceFile}" raw-source="${encodeURIComponent(
                source
              )}" description="${encodeURIComponent(localMd.render(description))}">`;
            } else {
              return '</DinertDemo>';
            }
        }
    })
};
