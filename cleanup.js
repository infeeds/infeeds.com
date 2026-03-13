import fs from 'fs';
import path from 'path';

const dir = 'src/content/posts';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.startsWith('```markdown\n')) {
      content = content.replace(/^```markdown\n/, '');
      content = content.replace(/\n```$/, '');
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${file}`);
    }
  }
});
