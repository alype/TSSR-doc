import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightObsidian, { obsidianSidebarGroup } from 'starlight-obsidian'
import starlightLinksValidator from 'starlight-links-validator'

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        // Generate the Obsidian vault pages.
        starlightObsidian({
		      // Configuration options go here.
          vault: 'D:/Documents/TSSR/Cours TSSR/Cours TSSR',
          label: 'Cours',
          copyStarlightFrontmatter: true,
          ignore: [
            // Ignore all files and folders in the `private` folder.
            '_private/**/*',
            // Ignore all files containing `secret` in their name.
            // '**/*secret*',
          ],
        }),
        starlightLinksValidator({
          // Configuration options go here.
        }),
      ],
      sidebar: [
        // Add the generated sidebar group to the sidebar.
        obsidianSidebarGroup,
      ],
      title: 'Ma documentation TSSR',
    }),
  ],
})