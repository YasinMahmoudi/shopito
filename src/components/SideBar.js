function SideBar({ children }) {
  return <aside className="sidebar">{children}</aside>;
}

function Title({ title }) {
  return (
    <strong className="title">
      <span> All {title} </span>
    </strong>
  );
}

export { Title, SideBar };
