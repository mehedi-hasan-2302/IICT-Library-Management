export function generateRandomGenres(): string[] {
    let choices = ['Non-Fiction', 'Childrens', 'Fantasy', 'Fiction', 'Biography', 'Romance', 'Science Fiction', 'Young Adult'];

    let chosen:string[] = [];
    while(chosen.length !== 5) {
        let num = Math.floor(Math.random() *7);
        if(!chosen.includes(choices[num])) chosen.push(choices[num]);
    }

    return chosen;
}