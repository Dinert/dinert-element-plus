import chalk from 'chalk'
import escapeHtml from 'escape-html'
import prism from 'prismjs'
import consola from 'consola'
// import loadLanguages from ''

// const loadLanguages = require('prismjs/components/index')

// loadLanguages(['markup', 'css', 'javascript'])

function wrap(code, lang) {
    if (lang === 'text') {
        code = escapeHtml(code)
    }
    return `<pre v-pre><code>${code}</code></pre>`
}

export const highlight = (str, lang) => {
    if (!lang) {
        return wrap(str, 'text')
    }
    lang = lang.toLowerCase()
    const rawLang = lang
    if (lang === 'vue' || lang === 'html') {
        lang = 'markup'
    }
    if (lang === 'md') {
        lang = 'markdown'
    }
    if (lang === 'ts') {
        lang = 'typescript'
    }
    if (lang === 'py') {
        lang = 'python'
    }
    if (!prism.languages[lang]) {
        try {
            //   loadLanguages([lang])
        } catch {
            // eslint-disable-next-line no-console
            consola.warn(
                chalk.yellow(
                    `[vitepress] Syntax highlight for language "${lang}" is not supported.`
                )
            )
        }
    }
    if (prism.languages[lang]) {
        const code = prism.highlight(str, prism.languages[lang], lang)
        return wrap(code, rawLang)
    }
    return wrap(str, 'text')
}
