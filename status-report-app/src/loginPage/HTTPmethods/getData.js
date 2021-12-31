export default async function userAuth(url, jsonData) {
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(jsonData),
    });
    if (!response.ok) {
      throw new Error("POST:addData: fetch error occured");
    }
    let result = await response.json();
    console.log("userAuth: response: ", result);
    return result;
  } catch (error) {
    console.log(error);
    return "error";
  }
}
