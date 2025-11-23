// Sample hierarchical file system data
const fileSystem = [
  {
    name: 'Documents',
    type: 'folder',
    children: [
      { name: 'Resume.pdf', type: 'file' },
      { name: 'CoverLetter.docx', type: 'file' },
    ],
  },
  {
    name: 'Projects',
    type: 'folder',
    children: [
      {
        name: 'AppDev',
        type: 'folder',
        children: [
          { name: 'App.js', type: 'file' },
          { name: 'index.html', type: 'file' },
        ],
      },
    ],
  },
  {
    name: 'README.md',
    type: 'file',
  },
];

// 1. Recursive Search Function
function searchFiles(data, query) {
  return data.reduce((result, item) => {
    if (item.type === 'file' && item.name.toLowerCase().includes(query.toLowerCase())) {
      result.push(item);
    } else if (item.type === 'folder' && item.children) {
      const foundInChildren = searchFiles(item.children, query);
      if (foundInChildren.length > 0) {
        result.push({
          ...item,
          children: foundInChildren
        });
      }
    }
    return result;
  }, []);
}

// 2. Filter by File Extension
function filterFilesByExtension(data, extension) {
  return data.reduce((result, item) => {
    if (item.type === 'file' && item.name.endsWith(extension)) {
      result.push(item);
    } else if (item.type === 'folder' && item.children) {
      const filteredChildren = filterFilesByExtension(item.children, extension);
      if (filteredChildren.length > 0) {
        result.push({
          ...item,
          children: filteredChildren
        });
      }
    }
    return result;
  }, []);
}

// 3. Flatten the File System
function flattenFileSystem(data) {
  return data.reduce((acc, item) => {
    acc.push(item);
    if (item.type === 'folder' && item.children) {
      acc = acc.concat(flattenFileSystem(item.children));
    }
    return acc;
  }, []);
}

// Example Usages
const searchResult = searchFiles(fileSystem, 'app');
const pdfFiles = filterFilesByExtension(fileSystem, '.pdf');
const allItems = flattenFileSystem(fileSystem);

console.log('Search Result:', searchResult);
console.log('PDF Files:', pdfFiles);
console.log('Flattened List:', allItems);
