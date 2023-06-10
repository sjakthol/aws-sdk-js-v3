import { fromSSO, isSsoProfile as origIsSsoProfile, validateSsoProfile } from "@aws-sdk/credential-provider-sso";
import { AwsCredentialIdentity } from "@smithy/types";

import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";

jest.mock("@aws-sdk/credential-provider-sso");

describe(isSsoProfile.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([false, true])("returns value returned by original isSsoProfile: %s", (value) => {
    (origIsSsoProfile as unknown as jest.Mock).mockReturnValue(value);
    expect(isSsoProfile({})).toEqual(value);
  });
});

describe(resolveSsoCredentials.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws error when fromSSO throws error", async () => {
    const mockProfileName = "mockProfileName";
    const expectedError = new Error("error from fromSSO");

    (fromSSO as jest.Mock).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveSsoCredentials(mockProfileName);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });

  it("calls fromSSO", async () => {
    const mockProfileName = "mockProfileName";
    const mockCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };

    (fromSSO as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveSsoCredentials(mockProfileName);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });
});
