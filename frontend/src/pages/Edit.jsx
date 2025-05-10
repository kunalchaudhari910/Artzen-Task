import { useEffect, useState } from "react";
import { getPost, updatePost } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    getPost(id).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, form);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          className="w-full border p-3 rounded"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          className="w-full border p-3 rounded"
          value={form.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          className="w-full border p-3 rounded h-40"
          value={form.content}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
