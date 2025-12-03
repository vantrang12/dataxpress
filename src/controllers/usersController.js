import { supabase } from "../config/supabase.js";

// GET all users
export const getUsers = async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
};

// CREATE user
export const createUser = async (req, res) => {
  const { username, password, fullname, description, organization_id, role, role_approve } = req.body;

  const { data, error } = await supabase
    .from('users')
    .insert([{ username, password, fullname, description, organization_id, role, role_approve }])
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
};

// UPDATE user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const fields = req.body;

  const { data, error } = await supabase
    .from('users')
    .update(fields)
    .eq('id', id)
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
};

// DELETE user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from('users').delete().eq('id', id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "Deleted successfully" });
};
