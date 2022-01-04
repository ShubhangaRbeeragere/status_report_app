import { useEffect, useState } from "react";

export function useGet(url, token) {
    const [data, setData] = useState(null);
    const [loadPage, setLoadPage] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(url, {
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
        })
            .then((result) => {
                if (!result.ok) {
                    setLoadPage(false);
                    setError(true);
                    throw new Error("get fetch unsuccessful");
                }
                setLoadPage(false);
                setError(false);
                return result.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return { data, setData, loadPage, setLoadPage, error, setError };
}

export function usePost(url, token, jsonData) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url, {
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
        })
            .then((result) => {
                if (!result.ok) {
                    throw new Error("get fetch unsuccessful");
                }
                return result.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url, token, jsonData]);

    return { data };
}
