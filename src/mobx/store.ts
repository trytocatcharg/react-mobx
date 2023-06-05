import { Product } from "../models/product";
import { User, UserType } from "../models/user";
import { makeAutoObservable } from 'mobx';

class AppStore {
    products: Product[] = [{
            name: 'pepe',
            price: 50,
            url: generateRandomImage()
    }];
    users: User[] = [{
        firstName: 'admin',
        lastName:'admin',
        username: 'admin',
        type: UserType.ADMIN,
        email: 'admin@admin.com'
    },
    {
        firstName: 'user1',
        lastName:'user1',
        username: 'user1',
        type: UserType.USER,
        email: 'user1@user1.com'
    },
    {
        firstName: 'user2',
        lastName:'user2',
        username: 'user2',
        type: UserType.USER,
        email: 'user2@user2.com'
    }];

    constructor() {
        makeAutoObservable(this);
    }

    addProduct = () => {
        let randomName = "x".repeat(5)
             .replace(/./g, _c => 
             "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26) ] );
      
        
        this.products.push({
            name: randomName,
            price: Math.floor(Math.random() * 101),
            url: generateRandomImage()
        })
    }

    removeProduct = () => {
        if (!!this.products.length) {
            this.products.pop();
        }
    }

}


export function generateRandomImage() {
    const mockUrlImage = [
        'https://cdn-files.kimovil.com/default/0006/03/thumb_502284_default_big.jpeg',
        'https://cdn-files.kimovil.com/default/0007/74/thumb_673378_default_big.jpg',
        'https://cdn-files.kimovil.com/default/0008/71/thumb_770973_default_big.jpg',
        'https://cdn-files.kimovil.com/default/0006/37/thumb_536991_default_big.jpeg',
        'https://cdn-files.kimovil.com/default/0008/50/thumb_749425_default_big.jpg',
        'https://cdn-files.kimovil.com/default/0006/74/thumb_573764_default_big.jpg'   ,
        'https://cdn-files.kimovil.com/default/0008/39/thumb_738237_default_big.jpg',
        'https://cdn-files.kimovil.com/default/0007/19/thumb_618305_default_big.jpg',
        'https://cdn-files.kimovil.com/default/0007/87/thumb_686539_default_big.jpg'
    ]
    return mockUrlImage[Math.floor(Math.random() * mockUrlImage.length)]; 
}


const appStore = new AppStore();

export default appStore;