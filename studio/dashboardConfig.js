export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a4dbf6552b2d462a7194fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gw5khofk',
                  apiId: '9aaabe18-06ea-4ed7-9af1-98d008748968'
                },
                {
                  buildHookId: '62a4dbf6e074844b5b7d196f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-hsz9dyur',
                  apiId: '9fd5f2ec-dbec-49bb-9840-45a204c2b985'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahsvedenborg/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-hsz9dyur.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
