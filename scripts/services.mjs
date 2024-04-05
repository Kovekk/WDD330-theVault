export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
    // console.log(data);
    const json = getLocalStorage(key);
    // console.log(json);
    if (json != null) {
        data.index = `${json[json.length - 1].index[0]}` + (parseInt(json[json.length - 1].index.substring(1)) + 1);
        json.push(data);
        localStorage.setItem(key, JSON.stringify(json));
    }   else {
        let newData = [];
        newData.push(data);
        // console.log(newData);
        localStorage.setItem(key, JSON.stringify(newData));
    }
    
}

export async function getData(index, processor = "list") {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const response = await fetch(`https://www.dnd5eapi.co${index}`, requestOptions);
    const data = await convertToJson(response);
    // console.log(data);
    if (processor == "list") {
        return data.results;
    } else if (processor == "single") {
        return data;
    }
    
}

async function convertToJson(res) {
    const jsonResponse = await res.json();
    if (res.ok) {
        return jsonResponse;
    } else {
        throw { name: "servicesError", message: jsonResponse };
    }
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

export function changeWindowLocation(relativeURL, parentPage) {
    const absoluteURL = new URL(relativeURL, window.location.href);
    window.location.href = absoluteURL.href
}