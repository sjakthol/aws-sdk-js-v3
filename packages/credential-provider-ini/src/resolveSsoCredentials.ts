import { fromSSO } from "@aws-sdk/credential-provider-sso";

/**
 * @internal
 */
export { isSsoProfile } from "@aws-sdk/credential-provider-sso";

/**
 * @internal
 */
export const resolveSsoCredentials = (profile: string) => {
  return fromSSO({
    profile,
  })();
};
