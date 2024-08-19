import "./portfolioList.scss";

export default function PortFolioList({id,title, active, setSelected}) {
  return (
    <li className={active ? "portFoliolist active" : "portFoliolist"} 
    onClick={() => setSelected(id)}
    >
        {title}
    </li>
  )
}
