export default async function updateData(url, token, jsonData) {
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        token: token,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(jsonData),
    });
    if (!response.ok) {
      throw new Error("PUT:updateData: fetch error occured");
    }
    let result = await response.json();
    console.log("updateData response: ", result);
    return result;
  } catch (error) {
    console.log(error);
    return "error";
  }
}
