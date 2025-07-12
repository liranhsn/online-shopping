import user from '../api/user';

export const upsertUser = async userData => {
    try {
        const { data } = await user.post(`/createUser`, {
            userData,
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const login = async userData => {
    try {
        const { data } = await user.post('/login', {
            userData,
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};
