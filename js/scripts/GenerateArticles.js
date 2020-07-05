import DateManager from "./DateManager";

export default class GenerateArticles {
    constructor(dateManager) {
        this.dateManager = dateManager;
    }

    createArts(){
        return [
            {
                title: "Prueba de titulo 1",
                date: this.dateManager.getArticlesSpellDate(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem."
            }, 
            {
                title: "Prueba de titulo 2",
                date: this.dateManager.getArticlesSpellDate(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem."
            }, 
            {
                title: "Prueba de titulo 3",
                date: this.dateManager.getArticlesSpellDate(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem."
            }, 
            {
                title: "Prueba de titulo 4",
                date: this.dateManager.getArticlesSpellDate(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem."
            }, 
            {
                title: "Prueba de titulo 5",
                date: this.dateManager.getArticlesSpellDate(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima recusandae beatae optio. Ex sapiente eligendi laborum ducimus! Minima illum maxime, velit commodi quod hic voluptates iste neque exercitationem at? Animi praesentium commodi voluptas quis eos magni provident? Sit maiores provident pariatur possimus cumque quis dolorum est optio velit autem."
            }, 
        ]
    }

    setArticles(container){
        const artsInfo = this.createArts();
        artsInfo.forEach((x, i) => {
            container.innerHTML += `
            <article class="art">
                <h2 class="art-title">${x.title}</h2>
                <span class="art-date">${x.date}</span>
                <p class="art-info">${x.content}</p>
                <button class="read-more">Leer más</button>
            </article>
        `;
        })
    }

}