/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const node_env = process.env.STATE
const prodEnv = isProd && node_env === 'production' 

const prodPath = prodEnv? "/prp": "/Xcelerator/prp"


const nextConfig = {
  reactStrictMode: true,
  basePath: prodPath,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    iisPath: prodPath, 
    jwtSecretKey: 'XwYYh4ihttaTbfBAL6Cq23YkABxpkH',
    isProd: isProd, 
    tokenUrl: prodEnv ? 'https://apps.cdldelivers.com/authentication/connect/token': 'https://test.cdldelivers.com/Xcelerator/authentication/connect/token',
    baseURL: prodEnv? "https://apps.cdldelivers.com/prpserver": node_env === 'staging' ? "https://test.cdldelivers.com/Xcelerator/PrpServer" : "localhost/Xcelerator/PrpServer"
  }
}

module.exports = nextConfig
