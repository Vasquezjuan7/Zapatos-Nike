const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');
const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname);

async function run() {
  console.log('Initializing git repo in:', dir);
  await git.init({ fs, dir, defaultBranch: 'main' });

  const files = ['index.html', 'styles.css', 'assets/nike_airforce1_cropped.png', 'README.md'];
  
  // Write a clean README.md
  fs.writeFileSync(path.join(dir, 'README.md'), `# Zapatos Nike - Nike Airforce1 Premium Showcase\n\nReplica de tarjeta de producto Nike Airforce1 Premium en HTML y CSS puro.\n`);

  for (const file of files) {
    if (fs.existsSync(path.join(dir, file))) {
      await git.add({ fs, dir, filepath: file });
      console.log('Staged:', file);
    }
  }

  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Vasquezjuan7',
      email: 'vasquezjuan7@users.noreply.github.com'
    },
    message: 'Nike Airforce 1 Premium showcase single card replica'
  });
  console.log('Committed commit SHA:', sha);

  await git.writeRef({
    fs,
    dir,
    ref: 'refs/heads/main',
    value: sha,
    force: true
  });

  try {
    await git.addRemote({
      fs,
      dir,
      remote: 'origin',
      url: 'https://github.com/Vasquezjuan7/Zapatos-Nike.git',
      force: true
    });
  } catch (e) {
    console.log('Remote origin exists or updated.');
  }

  console.log('Pushing to remote origin main...');
  const pushRes = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true
  });
  console.log('Push result:', pushRes);
}

run().catch(err => {
  console.error('Error during git push:', err);
});
