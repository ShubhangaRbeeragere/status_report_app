export default async function updateData(url, jsonDataPut) {
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(jsonDataPut),
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
