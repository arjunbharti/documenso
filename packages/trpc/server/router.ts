import { adminRouter } from './admin-router/router';
import { authRouter } from './auth-router/router';
import { documentRouter } from './document-router/router';
import { fieldRouter } from './field-router/router';
import { profileRouter } from './profile-router/router';
import { shareLinkRouter } from './share-link-router/router';
import { procedure, router } from './trpc';
import { twoFactorAuthenticationRouter } from './two-factor-authentication-router/router';

export const appRouter = router({
  health: procedure.query(() => {
    return { status: 'ok' };
  }),
  auth: authRouter,
  profile: profileRouter,
  document: documentRouter,
  field: fieldRouter,
  admin: adminRouter,
  shareLink: shareLinkRouter,
  twoFactorAuthentication: twoFactorAuthenticationRouter,
});

export type AppRouter = typeof appRouter;
