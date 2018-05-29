import createHistory from 'history/createBrowserHistory';


const baseUrl = 'http://localhost:3000';


export function getBooks() {
    return fetch(baseUrl + '/books')
        .then(r=>r.json())
        .then(data=>data);
}

export function signup(userData){
    console.log(userData);
    return fetch(baseUrl + '/signup', {
        method:'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        //localStorage.setItem('user', JSON.stringify(user))
        return user;
    });
}

export function login(userData){
    return fetch(baseUrl + '/login', {
        method:'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
        credentials: 'include'
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        localStorage.setItem('user', JSON.stringify(user))
        console.log(user)
        return user;
    });
}

export function profile(userData){
    return fetch(baseUrl + '/profile', {
        method:'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
        credentials: 'include'
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        //localStorage.setItem('user', JSON.stringify(user))
        return user;
    });
}

export function logout(userData){
    return fetch(baseUrl + '/logout', {
        method:'get',
        headers:{
            "Content-Type": "application/json"
        },
        credentials: 'include'
    })
    .then(res=>{
        localStorage.removeItem('user')
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        
        return user;
    });
}
