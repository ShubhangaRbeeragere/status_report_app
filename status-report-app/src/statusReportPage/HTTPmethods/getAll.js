export default async function getAll(url, token) {
    try {
        let response = await fetch(url, {
            method: "GET",
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
        });
        if (!response.ok) {
            throw new Error("get:getData: fetch unsuccessful");
        }
        let result = await response.json();
        console.log("getData response: ", result);
        return result;
    } catch (error) {
        console.log(error);
        return "error";
    }
}
