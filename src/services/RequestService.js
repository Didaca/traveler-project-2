export const request = async (url, method, data) => {

    const dependency = {};

    if (method !== "GET") {
        dependency.method = method;

    } else {
        dependency.method = "GET";
    };

    if (data.token) {
        dependency.headers = {
            "content-type": "application/json",
            "X-Authorization": `${data.token}`
        }
    };

    if (data.data) {
        dependency.body = JSON.stringify(data.data);
    };



    const response = await fetch(url, dependency);

    if (response.status === 200) {
        const result = response.json();
        return result;
    };

    if (response.status === 204) {
        return response;
    }

    if (response.status === 403) {
        return 403;
    }
}