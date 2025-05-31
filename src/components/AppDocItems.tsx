import { NavLink } from "react-router-dom";

export const DocItem = ({ props }: { props: any }) => {
  const { to = "/", icon: Icon, title = "", outlined } = props;

  return (
    <div className="relative">
      <NavLink
        className={({ isActive }) =>
          `w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-[9.6px] drop-shadow-[0px_0.945px_2.835px_rgba(0,0,0,0.30)] transition-all duration-300
        ${
          outlined
            ? "border border-dashed border-secondary-0 bg-transparent"
            : isActive
              ? "bg-gradient-to-t from-[#1E3363] to-[#3D68C9] text-white dark:from-info-700 dark:to-[#BAD9EC] drop-shadow-[0px_1.26px_3.78px_rgba(0,0,0,0.30)] w-16 h-16 -translate-y-2"
              : "bg-gradient-to-t  from-[#DCE0E3] to-[#FFFFFF] text-secondary-1000 dark:text-neutral-50 dark:from-surface-150 dark:to-[rgba(4,66,92,0.4)]"
        }`
        }
        to={to}
      >
        <Icon className="flex-shrink-0" size="24" />
      </NavLink>
      <NavLink to={to}>
        {({ isActive }) =>
          isActive && (
            <h3 className="text-[12px] font-semibold text-center absolute -bottom-3 left-0 right-0 mt-1 text-black dark:text-white">
              {title}
            </h3>
          )
        }
      </NavLink>
    </div>
  );
};

export default DocItem;
