module.exports = {
  '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,mdx}': ['prettier --write'],
  '**/*/package.json': ['npm run precommit'],
};
