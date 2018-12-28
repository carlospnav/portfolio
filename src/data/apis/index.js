/* Temporary function to simulate server article API */
export default {
  fetchArticles: (max) => new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Udacity is the best place to learn React!',
          category: 'REACT',
          content: '# Olá!',
          createdAt: 1542303526118,
          modifiedAt: null
        },
        {
          id: 2,
          title: 'Prozoba',
          category: 'REDUX',
          content: '## Tudo bem?',
          createdAt: 1542303526118,
          modifiedAt: 1542303547126
        },
        {
          id: 3,
          title: 'Udacity is the one place to learn abdul!',
          category: 'REACT',
          content: '# Olá!',
          createdAt: 1542303526118,
          modifiedAt: null
        },
        {
          id: 4,
          title: 'Prozoba',
          category: 'REACT',
          content: '## Tudo bem?',
          createdAt: 1542303526118,
          modifiedAt: 1542303547126
        }
      ].slice(0, max))
    }, 1000)
  })
}
