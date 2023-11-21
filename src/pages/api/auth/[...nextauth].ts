import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const clientId = process.env.OAUTH_CLIENT_KEY;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error('Environment variables OAUTH_CLIENT_KEY and OAUTH_CLIENT_SECRET are not set');
}

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret
    })
  ]
});
