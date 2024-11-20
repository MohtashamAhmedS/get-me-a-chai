import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDb from '@/db/connectDb'

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'github') {
        try {
          await connectDb() // Ensure MongoDB connection is established
          const currentUser = await User.findOne({ email }).maxTimeMS(30000)
          if (!currentUser) {
            const newUser = new User({
              email: user.email,
              user: user.email.split('@')[0],
            })
            user.name = newUser.username
            console.log('New user created:', newUser)
          } else {
            user.name = currentUser.username
          }
          return true
        } catch (error) {
          console.error('Error during sign in:', error)
          return false
        }
      }
    },

    async session({ session, user, token }) {
      try {
        const dbUser = await User.findOne({ email: session.user.email })
        if (dbUser) {
          session.user.name = dbUser.username
        }
        return session
      } catch (error) {
        console.error('Error fetching session user:', error)
        return session
      }
    },
  },
})

export { authoptions as GET, authoptions as POST }
