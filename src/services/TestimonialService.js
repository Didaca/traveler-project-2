const baseUrl = 'http://localhost:3030/data/testimonials';



export const GetOneTestimonial = async(testimonial_id) => {
    const response = await fetch(`${baseUrl}/${testimonial_id}`);
    const result = await response.json();

    return result;
}



export const GetTestimonials = async() => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
} 


export const AddTestimonial = async(token, data) => {

    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${token}`
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}


export const EditTestimonial = async(testimonial_id, token, data) => {

    const response = await fetch(`${baseUrl}/${testimonial_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${token}`
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}


export const DeleteTestimonial = (testimonial_id, token) => {

    fetch(`${baseUrl}/${testimonial_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': `${token}`
        }
    });

    return;
}