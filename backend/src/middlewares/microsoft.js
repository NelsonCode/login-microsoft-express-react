import passport from "passport";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import { config } from "dotenv";

config();

passport.use(
  "auth-microsoft",
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/microsoft/callback",
      scope: ["user.read", "calendars.read", "mail.read", "offline_access"],
      authorizationURL:
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      tokenURL: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
