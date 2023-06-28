export const ShortDescription = ({ icon, description, customClass }) => {
  return (
    <p
      className={`${customClass} flex flex-row py-1 items-center gap-1 text-dark-text-primary-dim font-semibold`}
    >
      <span className="text-dark-text-active">{icon}</span>
      <span className="text-[14px]">{description}</span>
    </p>
  );
};
