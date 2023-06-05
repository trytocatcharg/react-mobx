import appStore from "../../mobx/store";
import { User } from "../../models/user";
import LoginFormValues from "./models/userForm.model";

export const retrieveMockUser = (user: LoginFormValues): User | undefined => {

    if (user.password !== '123456') {
        return undefined;
    }

    return appStore.users.find(e => e.username === user.username);
}