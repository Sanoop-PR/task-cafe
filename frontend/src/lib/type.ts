export interface dbData {
  _id?:string;
  __v?:number;
}

export interface IMenu extends dbData {
  title: string;
  description: string;
}

export interface IItem extends dbData {
  menu:string;
  title: string;
  description: string;
  price: number;
}

export interface IformProps {
  mutate: (data: IMenu ) => void;
  buttonLabel: string;
  isPending: boolean;
  isSuccess:boolean;
  defaultValues?:IMenu
}

export interface IItemformProps {
  mutate: (data: IItem) => void;
  buttonLabel: string;
  isPending: boolean;
  isSuccess:boolean;
  defaultValues?:IItem
}
