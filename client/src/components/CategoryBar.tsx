import { NavLink } from "react-router";

interface CategoryBarProps {
  categories: { name: string; value: string }[];
}

const CategoryBar = ({ categories }: CategoryBarProps) => {
  return (
    <div className="hidden md:flex items-center justify-center gap-4">
      {categories &&
        categories.map((category) => (
          <NavLink
            key={category.value}
            to={`${category.value}`}
            className={({ isActive }) =>
              isActive
                ? "bg-accent px-4 py-2 rounded-sm"
                : "px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-sm"
            }
            reloadDocument
          >
            {category.name}
          </NavLink>
        ))}
    </div>
  );
};

export default CategoryBar;
