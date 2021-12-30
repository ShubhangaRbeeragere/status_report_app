
export default function addData(url, token, jsonData, nextFunction, setToDoList) {
    fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
                token: token
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(jsonData)
        }).then(
            result => {
                if(!result.ok){
                    throw new Error("POST fetch unsuccessful");
                }
                return result.json();
            }
        ).then(
            data => {
                console.log(data);
                nextFunction("http://localhost:7000/toDoList/getAll", token, setToDoList);
            }
        ).catch(
            error => {console.log(error)}
        )
}