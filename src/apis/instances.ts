import axios from "axios"

export const auth0Agency = axios.create({
  baseURL: process.env.REACT_APP_AUTH0_DOMAIN
})

export const coreAgency = axios.create({
  baseURL: 'https://api.rokk.app/api/v1'
})