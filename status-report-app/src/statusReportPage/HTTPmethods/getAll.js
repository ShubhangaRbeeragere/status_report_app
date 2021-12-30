export default function getAll(url, token, setToDoList){
    fetch(url, {
            method: 'GET', 
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
        }).then(
            
            result => {
                if(!result.ok){
                    throw new Error("get fetch unsuccessful");
                }
                return result.json();
            }
        ).then(
            data => {
                console.log(data);
                setToDoList(data);
            }
        ).catch(
            error => {console.log(error)}
        ) 
}