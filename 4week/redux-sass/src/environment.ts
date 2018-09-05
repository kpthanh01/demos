const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://ec2-52-11-143-84.us-west-2.compute.amazonaws.com:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
