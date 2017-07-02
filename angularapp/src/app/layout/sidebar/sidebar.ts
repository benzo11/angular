export class SidebarLink {
    public id: number;
    public translation: string;
    public link:string;
    public icon:string;

    constructor(id, translation, link, icon){
        this.id = id;
        this.translation = translation;
        this.link = link;
        this.icon = icon;
    }
}
//TODO: create service and get sidebar infos
