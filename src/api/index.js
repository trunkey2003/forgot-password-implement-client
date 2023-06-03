import Axios from "./axios";

export const resetPasswordLoader = async ({ request, params, context }) => {
    try {
        const token = new URL(request.url).searchParams.get("token");
        const userID = new URL(request.url).searchParams.get("userID");
        const {data} = await Axios.get(
          "/api/v1/auth/verify-reset-password-token",
          {
            params: {
              token,
              userID,
            },
          }
        );
        const email = data.email;
        if (!token || !userID || !data.isValid || !email) {
          throw new Error("Token or userID is not valid");
        };
        return {
          token,
          userID,
          email
        };
      } catch(e) {
        console.error(e);
        throw new Error("Token or userID is not valid");
        return {
          token: null,
          userID: null,
          status: "error",
        };
      }
};
