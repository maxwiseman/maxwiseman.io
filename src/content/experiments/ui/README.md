Files in this folder must follow a specific format to be read by the NextJS frontend.

For each component, a folder should be created. This folder must be named exactly the same as the component is named inside the `src/components/ui` folder. This will also be used as the slug. 

Then, create a `component.mdx` file inside the folder. This file should contain the following frontmatter:
- title: string
- description: string

Next, you can optionally add a description to the `component.mdx` file. This will be displayed on the component's page.

Finally, you must create an `example.tsx` file. This will be rendered at the top of the component page. It should export a default function that returns the component.

Optionally, you can create a separate `mini-example.tsx` file. This will be rendered only in the component list. It should export a default function that returns the component.

You may also add additional examples to be displayed at the bottom of the component's page. Do this by creating a tsx file in the component's folder. You can name it anything you want. It must export a default function that returns a react component, and a const called `exampleTitle` that is a string. This will be displayed as a title above the example.