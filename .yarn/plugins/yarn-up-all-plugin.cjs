module.exports = {
  name: 'yarn-up-all-plugin',
  factory: (a) => {
    const { Configuration: b, Project: c } = a('@yarnpkg/core'),
      { Cli: d, Command: e, Option: f } = a('clipanion'),
      g = a('@yarnpkg/plugin-essentials'),
      h = a('typanion'),
      i = (a, b) => (a ? `@${a}/${b}` : b),
      j = (a, b) => {
        const c = [...a.values()]
        return b
          ? c.filter((a) => {
              const c = i(a[1].scope, a[1].name)
              return !b.includes(c)
            })
          : c
      }
    class k extends e {
      constructor() {
        super(),
          (this.exclude = f.String('-e,--exclude', { validator: h.isString() }))
      }
      async execute() {
        if (!g.default.commands)
          throw new Error('Yarn commands are not available!')
        const a = await b.find(this.context.cwd, this.context.plugins),
          { workspace: e } = await c.find(a, this.context.cwd),
          f = [...e.manifest.dependencies, ...e.manifest.devDependencies],
          h = j(f, this.exclude ? this.exclude.split(' ') : null),
          k = h.map((a) => i(a[1].scope, a[1].name)),
          l = d.from(g.default.commands)
        return l.runExit(['up', ...k], this.context)
      }
    }
    return (
      (k.paths = [['up-all']]),
      (k.usage = {
        category: 'Utilities',
        description:
          'Yarn 2 plugin that will upgrade all dependencies to their latest version with one simple command',
        details:
          'This command will upgrade all dependencies to their latest version. You can exclude certain dependencies from being upgraded by using the `-e,--exclude` option.',
        examples: [
          ['Upgrade all dependencies', 'yarn up-all'],
          [
            'Upgrade all dependencies but exclude a single dependency',
            'yarn up-all --exclude package',
          ],
          [
            'Upgrade all dependencies but exclude a single dependency',
            'yarn up-all -e package',
          ],
          [
            'Upgrade all dependencies but exclude multiple dependencies',
            'yarn up-all --exclude "package1 package2"',
          ],
        ],
      }),
      { commands: [k] }
    )
  },
}
