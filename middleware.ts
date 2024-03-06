export { default } from "next-auth/middleware"

// Ref: https://next-auth.js.org/configuration/nextjs#middleware
export const config = { matcher: ["/dashboard"] }