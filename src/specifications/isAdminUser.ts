import { User, UserType } from "../models/user";
import { CompositeSpecification } from "./specification.base";

export class IsAdminUser extends CompositeSpecification<User> {
    IsSatisfiedBy(user: User): boolean {
        return user.type === UserType.ADMIN;
    }
  }