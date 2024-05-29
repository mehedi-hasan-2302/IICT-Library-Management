import LibraryCardDao, { ILibraryCardModel } from '../daos/LibraryCardDao';

import { ILibraryCard } from '../models/LibraryCard';
import { LibraryCardDoesNotExistError } from '../utils/libraryErrors';

export async function registerLibraryCard(card:ILibraryCard):Promise<ILibraryCardModel>{
    try {
        const savedCard = new LibraryCardDao(card);
        return await savedCard.save();
        
    } catch (error:any) {
        
        let c = await LibraryCardDao.findOne({user:card.user}).populate('user');
        if(c) return c;
        throw error;
    }
}


export async function findLibraryCard(libraryCardId:string):Promise<ILibraryCardModel>{
    try {
        let card = await LibraryCardDao.findOne({_id:libraryCardId}).populate('user');
        if(card) return card;

        throw new LibraryCardDoesNotExistError("The specified library card does not exist");
    } catch (error:any) {
        throw error;
    }
}