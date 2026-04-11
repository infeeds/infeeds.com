import fs from 'fs';
import path from 'path';

const dir = 'src/content/posts';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Improved regex to handle optional spaces and different line endings
    const startRegex = /^```markdown\s*[\r\n]+/;
    const endRegex = /[\r\n]+```\s*$/;
    
    if (startRegex.test(content)) {
      content = content.replace(startRegex, '');
      content = content.replace(endRegex, '');
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${file}`);
    }
  }
});
