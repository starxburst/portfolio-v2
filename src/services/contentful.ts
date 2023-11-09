import * as contentful from 'contentful'

export const client = contentful.createClient({
  space: '6jn07p0nht9z',
  environment: import.meta.env.VITE_REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_REACT_APP_CONTENTFUL_ACCESS_TOKEN
})

// client.getEntry('4SHM4tfv89Vnx5PkOlG6U9')
//   .then((entry) => console.log(entry))
//   .catch(console.error)