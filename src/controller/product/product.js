'use strict';
export const product = async (req, res) => {
  const list_item = ['cooker', 'washingmachine', 'dish', 'car', 'fridge', 'ac'];
  return res.json(list_item);
};

export const plastic_item = async (req, res) => {
  const list_item = ['bottle', 'jug', 'mog', 'plate', 'glass', 'plastic spoon'];
  return res.json(list_item);
};

export const productV3 = async (req, res) => {
  const list_item = ['cooker', 'washingmachine', 'dish', 'car', 'fridge', 'ac'];
  return res.json(list_item);
};


