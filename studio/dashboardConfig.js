export default {
  widgets: [
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
                  buildHookId: '62bae895095ec717070a1a6f',
                  title: 'Sanity Studio',
                  name: 'subversive-distribution-studio',
                  apiId: 'ef93ceb8-fbb8-4431-9455-ca6d154b7034'
                },
                {
                  buildHookId: '62bae8953ddb7317d8c747a4',
                  title: 'Blog Website',
                  name: 'subversive-distribution',
                  apiId: '8d0fa0bd-b76d-47d2-96e6-1dd825f3ecb6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalaksjon/subversive-distribution',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://subversive-distribution.netlify.app', category: 'apps'}
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
