import { supabase } from "../config/supabase.js";

// GET all organizations
export const getOrganizations = async (req, res) => {
  const { data, error } = await supabase.from('organizations').select('*');
  if (error) return res.status(400).json({ error });
  res.json(data);
};

// CREATE organization
export const createOrganization = async (req, res) => {
  const { name } = req.body;

  const { data, error } = await supabase
    .from('organizations')
    .insert([{ name }])
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
};

// UPDATE organization
export const updateOrganization = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('organizations')
    .update(req.body)
    .eq('id', id)
    .select();

  if (error) return res.status(400).json({ error });
  res.json(data[0]);
};

// DELETE organization
export const deleteOrganization = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('organizations').delete().eq('id', id);

  if (error) return res.status(400).json({ error });
  res.json({ message: "Deleted successfully" });
};

// Lấy 1 organization theo id
exports.getOrganizationById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('organizations')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return res.status(400).json({ error });
  if (!data) return res.status(404).json({ message: "Organization not found" });

  res.json(data);
};

