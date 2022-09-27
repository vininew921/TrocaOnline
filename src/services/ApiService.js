export async function registerUser(user) {
  let api = process.env.VUE_APP_API_ENDPOINT;

  let responseStatus = 0;

  await fetch(`${api}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(async (response) => {
    responseStatus = response.status;
  });

  return responseStatus;
}
