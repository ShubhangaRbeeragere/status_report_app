export default async function addData(url, token, jsonData) {
    try {
        let response = await fetch(url, {
            method: "POST",
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

        console.log(response.status);
        if (!response.ok) {
            throw new Error("POST:addData: fetch error occured");
        }
        let result = await response.json();
        console.log("addData response: ", result);
        return result;
    } catch (error) {
        console.log(error);
        return "error";
    }
}
