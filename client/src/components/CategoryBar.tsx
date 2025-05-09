import { NavLink } from "react-router";

interface CategoryBarProps {
  categories: { name: string; value: string }[];
}

const CategoryBar = ({ categories }: CategoryBarProps) => {
  return (
    <div className="hidden md:flex items-center justify-center gap-8 border-b-2 border-red-600">
      {categories &&
        categories.map((category) => (
          <NavLink
            key={category.value}
            to={`${category.value}`}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-red-700 p-4"
                : "text-black p-4 hover:bg-accent hover:text-accent-foreground"
            }
          >
            {category.name}
          </NavLink>
        ))}
    </div>
  );
};

export default CategoryBar;
