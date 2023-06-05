import { useAuthUser } from "react-auth-kit";
import { User, UserType } from "../models/user";


export const useAdminRole = () => {
    const auth = useAuthUser()() as User;
    return auth && auth.type === UserType.ADMIN;
}