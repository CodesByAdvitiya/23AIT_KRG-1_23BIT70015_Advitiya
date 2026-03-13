import { useState } from "react";

function ActivityManager() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [carbon, setCarbon] = useState("");
  const [activities, setActivities] = useState([]);

  const addHandler = () => {
    if (!name || !category || !carbon) return;

    const newActivity = {
      name: name,
      category: category,
      carbon: Number(carbon)
    };

    setActivities([...activities, newActivity]);

    setName("");
    setCategory("");
    setCarbon("");
  };

  const totalCarbon = activities.reduce((sum, item) => sum + item.carbon, 0);

  return (
    <div>
      <h2>Activity Manager</h2>

      <input
        placeholder="Activity Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Carbon Saved"
        value={carbon}
        onChange={(e) => setCarbon(e.target.value)}
      />

      <button onClick={addHandler}>Add Activity</button>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Carbon</th>
          </tr>
        </thead>

        <tbody>
          {activities.map((a, i) => (
            <tr key={i}>
              <td>{a.name}</td>
              <td>{a.category}</td>
              <td>{a.carbon}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Total Carbon Saved: {totalCarbon}</p>
    </div>
  );
}

export default ActivityManager;