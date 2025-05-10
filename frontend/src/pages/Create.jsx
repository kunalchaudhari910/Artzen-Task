import { useState } from "react";
import { createPost } from "../api";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(form);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border p-3 rounded"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="w-full border p-3 rounded"
          value={form.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          className="w-full border p-3 rounded h-40"
          value={form.content}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Create;
