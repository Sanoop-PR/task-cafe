import { Request, Response } from "express";
import Item from "../model/menuItemsModel";

export const createItemController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = { ...req.body };
    await Item.create(data);
    return res.status(200).json({ message: "Successfully created Item" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating Item", error: error.message });
  }
};

export const updateItemController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = { ...req.body };
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json({ message: "Successfully updated Item" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating Item", error });
  }
};

export const getItemByIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Item.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching Item", error });
  }
};

export const deleteItemByIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting Item", error });
  }
};

export const getAllItemByMenuController = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const response = await Item.find({ menu: req.params.title });
    if (!response) {
      return res.status(200).json({ message: "datas not found" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: "Error deleting Item", error });
  }
};
