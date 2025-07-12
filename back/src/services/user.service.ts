import User from '../db/models/user';
import * as errors from '../utils/errors';
import { passwordSecure, validateUser } from '../utils/secureUtils';

/**
 * Check if the user exist and return its details
 * @param email
 * @returns Promise -> undefined if the user does not exist | user details
 */
export async function userExists(
    email: string,
): Promise<createUserType | null> {
    const user = await User.findOne({ email });
    if (user) return user;
    return null;
}

/**
 * Create a new user in the DB
 * @param userData
 * @returns Promise -> Created user details | message the user already exists
 */
export async function createUser(
    userData: registerUserType,
): Promise<errors.BadRequestError | returnedUserDetailsType> {
    const user = await userExists(userData.email);

    if (user) return new errors.BadRequestError('Email is already exists');
    const hashedPassword = await passwordSecure(userData.password);

    const userToCreate: createUserType = {
        ...userData,
        password: hashedPassword,
        createdDate: new Date(),
    };

    const newUser = await new User(userToCreate).save();

    const { firstName, lastName, phone, email }: returnedUserDetailsType =
        newUser;
    return { firstName, lastName, phone, email };
}

/**
 * User login
 * @param userLogin
 * @returns Promise -> User full details | message for incorrect user inputs.
 */
export async function login(
    userLogin: loginUserType,
): Promise<errors.UnauthorizedError | returnedUserDetailsType> {
    const { loginEmail, loginPassword }: loginUserType = userLogin;
    const user: createUserType | null = await userExists(loginEmail);

    if (user) {
        const { password } = user;
        const result = await validateUser(loginPassword, password);
        if (result) {
            const {
                firstName,
                lastName,
                email,
                phone,
            }: returnedUserDetailsType = user;

            return {
                firstName,
                lastName,
                email,
                phone,
            };
        }
    }

    return new errors.UnauthorizedError('username or password incorrect');
}
