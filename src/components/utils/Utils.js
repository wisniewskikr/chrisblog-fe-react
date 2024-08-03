export const getCategoryPathAndQuery = (pathParams = {}, queryParams = {}) => {

    let path = `/category/:categoryId/sorting/:sorting/page/:page`;
    for (const [key, value] of Object.entries(pathParams)) {
        path = path.replace(`:${key}`, encodeURIComponent(value));
    }

    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(queryParams)) {
        if (value !== null && value !== undefined) {
            searchParams.append(key, value);
        }
    }

    const result = (![...searchParams.keys()].length) ? `${path}` : `${path}?${searchParams.toString()}`;

    return result;
    
};

export const getArticlesApiUrl = (queryParams = {}) => {

    let path = `http://localhost:8080/api/v1/article`;
 
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(queryParams)) {
        if (value !== null && value !== undefined) {
            searchParams.append(key, value);
        }
    }

    const result = (![...searchParams.keys()].length) ? `${path}` : `${path}?${searchParams.toString()}`;

    return result;
    
};

export const getArticleApiUrl = (pathParams = {}) => {

    let path = `http://localhost:8080/api/v1/article/:id`;
    for (const [key, value] of Object.entries(pathParams)) {
        path = path.replace(`:${key}`, encodeURIComponent(value));
    }
    
    return path;
    
};