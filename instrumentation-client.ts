let captureRouterTransitionStart: ((...args: unknown[]) => void) | undefined;

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  void import("@sentry/nextjs").then((Sentry) => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: process.env.NODE_ENV === "production" ? 0.05 : 1,
      debug: false,
    });

    captureRouterTransitionStart = Sentry.captureRouterTransitionStart as (
      ...args: unknown[]
    ) => void;
  });
}

export const onRouterTransitionStart = (...args: unknown[]) => {
  captureRouterTransitionStart?.(...args);
};
