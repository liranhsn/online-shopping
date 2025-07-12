import shirts from '../api/shirts';

export const getShirts = async () => {
    try {
        const { data } = await shirts.get('/');
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getShirtById = async shirtId => {
    try {
        const { data } = await shirts.get(`/${shirtId}`);
        return data;
    } catch (error) {
        console.error(error);
    }
};
