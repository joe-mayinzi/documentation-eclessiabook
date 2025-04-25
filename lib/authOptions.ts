import NextAuth, {
  AuthOptions,
  Session,
  JWT as NextAuthJWT,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dotenv from "dotenv";
dotenv.config(); 

// Définir les types pour les données utilisateur et JWT
interface User {
  id: string;
  email: string;
  accessToken: string;
  role: string;
}

interface JWTToken {
  accessToken?: string;
  email?: string | null; // Permettre à email d'être null
  role?: string;
}




// Étendre le type Session de NextAuth pour y ajouter des propriétés personnalisées
interface ExtendedSession extends Session {
  accessToken?: string;
  email?: string;
  role?: string;
}



export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Requête API pour vérifier les identifiants de l'utilisateur
        const res = await fetch(
          "https://docs-linkend-solution.onrender.com/doc-linked-solution/v1/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const data = await res.json();

        if (res.ok && data.status === 200) {
          // Retourner les informations nécessaires pour l'authentification
          return {
            id: data.data.email,
            email: data.data.email,
            accessToken: data.data.access_token,
            role: data.data.role,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin", // Page de connexion personnalisée
  },
  callbacks: {
    async jwt({ token, user }: { token: NextAuthJWT; user?: User }) {
      if (user) {
        // Ajouter les propriétés personnalisées dans le token JWT
        token.accessToken = user.accessToken;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWTToken }) {
      if (token) {
        // Ajouter les informations à la session de manière sécurisée
        (session as ExtendedSession).accessToken = token.accessToken;
        (session as ExtendedSession).email = token.email ?? undefined; // Utiliser undefined si email est null
        (session as ExtendedSession).role = token.role;
      }
      return session;
    },
  },
  secret: "slHY9NaAd7z1Y516XaNosyaWJ8Yvu8hRuuPP35/WOQg=",
  
  
};

export default NextAuth(authOptions);
