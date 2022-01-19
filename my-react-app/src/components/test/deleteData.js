export default async function deleteData(url, jsonData) {
  try {
    let response = await fetch(url, {
      method: "DELETE",
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
      throw new Error("DELETE:deleteData: fetch error occured");
    }
    let result = await response.json();
    console.log("deleteData response: ", result);
    return result;
  } catch (error) {
  
    return "error";
  }
}
