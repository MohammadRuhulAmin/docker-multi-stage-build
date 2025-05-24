'use strict';
export const product = async (req, res) => {
  const list_item = ['cooker', 'washingmachine', 'dish', 'car', 'fridge', 'ac'];
  return res.json(list_item);
};
export const plastic_item = async (req, res) => {
  const list_item = ['bottle', 'jug', 'mog', 'plate', 'glass', 'plastic spoon'];
  return res.json(list_item);
};
export const kitchen_items = async (req, res) => {
  const list_item = ['cooker', 'washingmachine', 'dish', 'car', 'fridge', 'ac'];
  return res.json(list_item);
};
export const study_items = async (req, res) => {
  const list_item = ['books', 'chair', 'tables', 'pen', 'pencil', 'scale'];
  return res.json(list_item);
};
export const play_items = async (req, res) => {
  const list_item = ['bat', 'balls', 'stamp', 'footballs', 'hokey', 'sport bike'];
  return res.json(list_item);
};
export const ride_items = async (req, res) => {
  const list_item = ['car', 'bus', 'truck', 'lorry', 'pickup', 'van'];
  return res.json(list_item);
};
export const hospital_items = async (req, res) => {
  const list_item = ['injection', 'drugs', 'ambulance', 'bed'];
  return res.json(list_item);
};
export const cloth_items = async (req, res) => {
  const list_item = ['shirt', 'pants', 'lungi', 'shari'];
  return res.json(list_item);
};
