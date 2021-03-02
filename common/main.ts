import fs from 'fs/promises';
import path from 'path';

// Recursively walk a directory, with the goal of building a JSON that is easy for
// Svelte to interpret
const getFiles = async (dir: string): Promise<string[]> => {
  try {
    // Get all the files in a directory
    const files = await fs.readdir(dir, { withFileTypes: true });
    // We're going to be storing all files in a temp path
    let currentPath: string[] = [];
    // For each file
    for (const file of files) {
      // If it is a directory
      if (file.isDirectory()) {
        // Recursively find all files in that directory, and append it to our current path
        currentPath = [
          ...currentPath,
          ...(await getFiles(path.resolve(dir, file.name))),
        ];
      }
      // Otherwise, if it's a file
      else {
        // Preserve only images and markdown docs
        if (['.md', '.png'].includes(path.extname(file.name))) {
          // And push it to the path
          currentPath.push(file.name);
        }
      }
    }
    // Return our path
    return currentPath;
  } catch (e) {
    // If there's an error, print and reeeeeturn nothing
    console.log(e, 'oh no');
    return [''];
  }
};

(async () => {
  // Set the default directory to notes directory
  const directory = path.resolve('..', 'notes');
  // Get a list of all files in the directory
  const list = await getFiles(directory);

  // Debug, print it out
  console.log(list);

  // Actually, my work here is kind of useless, I just needed to build in a json in this form
  /*
    *let root = [
		{
			type: 'folder',
			name: 'Important work stuff',
			files: [
				{ type: 'file', name: 'quarterly-results.xlsx' }
			]
		},
		{
			type: 'folder',
			name: 'Animal GIFs',
			files: [
				{
					type: 'folder',
					name: 'Dogs',
					files: [
						{ type: 'file', name: 'treadmill.gif' },
						{ type: 'file', name: 'rope-jumping.gif' }
					]
				},
				{
					type: 'folder',
					name: 'Goats',
					files: [
						{ type: 'file', name: 'parkour.gif' },
						{ type: 'file', name: 'rampage.gif' }
					]
				},
				{ type: 'file', name: 'cat-roomba.gif' },
				{ type: 'file', name: 'duck-shuffle.gif' },
				{ type: 'file', name: 'monkey-on-a-pig.gif' }
			]
		},
		{ type: 'file', name: 'TODO.md' }
	];
    */
  // That means I should be returning a folder object!!
  // Then from there, it's just a matter of object.json() and fs.write() to the root
  //
  // Then for build on frontend we just copy this json file and the notes folder (but only pngs and md) into the public folder.
})();
