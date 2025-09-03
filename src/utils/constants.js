export const NETFLIX_BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg'
export const API_MOVIES_NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

export const API_HEADERS = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_tmdb_access_token}`
    }
}

export const API_METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}