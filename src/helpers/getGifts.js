
    export const getGifts = async ( category ) => {

        const url = `http://api.giphy.com/v1/gifs/search?api_key=mlJtfHur7k5GbwmRpENRpNjexTyi3FJ3&limit=10&q=${ encodeURI(category) }`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifts = data.map((g) => {
            return {
                id: g.id,
                title: g.title,
                url: g.images?.downsized_medium.url
            }
        });

        return gifts;
        
    }