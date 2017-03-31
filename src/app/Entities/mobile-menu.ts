export class MobileMenu
{
      description: string;
      id:string;
      link: string;
      childrens: children[];
}

export class children
{
    title:string;
    link:string;
    id:string;
    isdisabled:boolean;
}