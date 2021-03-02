# Prompurr.org (new)

## Notes

All notes folders are going to be listed as an icon using css grid

Clicking on the folder reveals more notes, and clicking on the note finally expands and reveals the md doc

- `svelte:self`

To render this doc, we will use stock marked + katex engine if needed!

## How do we get path of files?

First of all, the path of files must be automatic, since we're supporting nesting.

There's two ways we could then implement this:

1. Scan in development/build (with node)

- Node.js `fs.readdir` recursive to generate a json similar to that seen in the [`svelte:self`](https://svelte.dev/tutorial/svelte-self) tutorial

2. Scan during live use

- Idk how we would do this without an index file, or without node...
