module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    ['@semantic-release/github', { assets: [{ path: 'docs/CHANGELOG.md' }] }],
    '@semantic-release/git',
  ],
  branches: [
    { name: '1.x', range: '1.x', channel: '1.x' }, // Only after the `1.x` is created in the repo
    { name: '2.x', range: '2.x', channel: '2.x' }, // Only after the `2.x` is created in the repo
    { name: 'beta', channel: 'beta', prerelease: true }, // `prerelease` is set to `beta` as it is the value of `name`
    { name: 'main' },
  ],
  // dryRun: true,
}