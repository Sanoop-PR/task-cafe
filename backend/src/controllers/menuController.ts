import { Request, Response } from "express";
import Menu from "../model/menuModel";
import Item from "../model/menuItemsModel";

export const createMenuController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = { ...req.body };
    console.log("data: ", data);
    const ress = await Menu.create(data);
    console.log("res: ", ress);
    return res.status(200).json({ message: "Successfully created menu" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating menu", error: error.message });
  }
};

export const updateMenuController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = { ...req.body };
    const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json({ message: "Successfully updated menu" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating menu", error });
  }
};

export const getMenuByTitleController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Menu.findOne({ title: req.params.title });
    if (!data) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching menu", error });
  }
};

export const deleteMenuByIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await Menu.findByIdAndDelete(req.params.id);
    if (response) {
      await Item.deleteMany({ menu: response.title });
    }
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting menu", error });
  }
};

export const getAllMenuController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await Menu.find();
    if (!response) {
      return res.status(200).json({ message: "datas not found" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Error deleting menu", error });
  }
};
