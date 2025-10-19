import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type item = {
  description: string;
  amount: number;
  category: string;
};

const ExpenseTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  let [items, setItems] = useState<item[]>([
    //Initial item for Testing purpose
    { description: "Apfel (Placeholder)", amount: 2, category: "Groceries" },
  ]);

  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm<item>();
  const onSubmit: SubmitHandler<item> = (data) => {
    setItems([...items, data]);
  };

  const deleteItem = (index: number) => {
    setItems(
      items.filter((item) => {
        if (index !== items.indexOf(item)) return item;
      })
    );
  };

  return (
    <>
      {/* === Form === */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            {...register("description", { required: true, maxLength: 20 })}
          ></input>
          {errors.description?.type === "required" && (
            <p role="alert" style={{ color: "red", fontSize: "14px" }}>
              A description is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Ammount</label>
          <input
            className="form-control"
            type="number"
            {...register("amount", { required: true, min: 1 })}
          ></input>
          {errors.amount?.type === "min" && (
            <p role="alert" style={{ color: "red", fontSize: "14px" }}>
              Amount must be at least 1.
            </p>
          )}
          {errors.amount?.type === "required" && (
            <p role="alert" style={{ color: "red", fontSize: "14px" }}>
              An amount is required.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            {...register("category", { required: true })}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* === List === */}
      <div className="list" style={{ marginTop: "40px" }}>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            style={{
              borderColor: "lightgrey",
              width: "100%",
              textAlign: "left",
            }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedCategory}
          </button>
          <ul className="dropdown-menu">
            <li key={"all_categories"}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSelectedCategory("All categories")}
              >
                AllCategories
              </a>
            </li>
            <li key={"groceries"}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSelectedCategory("Groceries")}
              >
                Groceries
              </a>
            </li>
          </ul>
        </div>
        <table
          className="table table-bordered"
          style={{ width: "100%", marginTop: 20 }}
        >
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col" style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {items
              .filter((item) => {
                if (
                  selectedCategory === "All categories" ||
                  selectedCategory === item.category
                )
                  return item;
              })
              .map((item) => (
                <tr key={item.description}>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      onClick={() => deleteItem(items.indexOf(item))}
                      className="btn btn-outline-danger"
                      style={{ margin: 5 }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseTracker;
