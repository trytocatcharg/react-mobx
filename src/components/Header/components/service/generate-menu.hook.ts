import { useAuthUser } from "react-auth-kit";
import { User } from "../../../../models/user";
import { IsAdminUser } from "../../../../specifications/isAdminUser";
import { PageMenuModel } from "../models/page-menu.model";


const useGenerateMenu = (): PageMenuModel[] => {
    const auth = useAuthUser();
    const menu = [{name: 'Products', page: '/products', isVisible: true},
    {name: 'Users', page: '/users', isVisible: false}];

    menu.forEach(element => {
        if (element.name === 'Users') {
          const isUserAdminSpecification = new IsAdminUser();
            element.isVisible = isUserAdminSpecification.IsSatisfiedBy(auth() as User);
        }
      });

      return menu;
}

export default useGenerateMenu;

