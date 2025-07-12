//* ********************** Items **************

type createCostumeType = {
    title: string;
    description: string;
    price: number;
    coverImg: string;
    sizes: Array<string>;
};
//* ********************** Users **************

type returnedUserDetailsType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
};

type registerUserType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
};

type createUserType = returnedUserDetailsType & {
    password: string;
    createdDate: Date;
};

type loginUserType = {
    loginEmail: string;
    loginPassword: string;
};
